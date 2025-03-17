#!/usr/bin/env python
# coding: utf-8

# In[1]:


from IPython.display import display
import pandas as pd
import numpy as np
import requests
import zipfile
import io
from scipy.io import arff
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from xgboost import XGBClassifier, XGBRegressor
from sklearn.metrics import accuracy_score, mean_squared_error, r2_score
import warnings
import os
import seaborn as sns
import matplotlib.pyplot as plt
import pickle
import tkinter as tk
from tkinter import messagebox
from PIL import Image, ImageTk,  ImageDraw
from sklearn.linear_model import LinearRegression
from sklearn.linear_model import LinearRegression
from sklearn.ensemble import RandomForestRegressor
import xgboost as xgb


# Importing the datasets

# In[2]:


tournament_file = r"C:\Users\jeffe\OneDrive\Desktop\Masters Project\MastersJust1.xlsx"

df_tournament = pd.read_excel(tournament_file)

print("Tournament Data:")
print(df_tournament.head())


# In[3]:


print("Tournament Data Columns:")
print(df_tournament.columns)


# Correlation matrix, only looking for ones >.3 or <-.3. vs target
# 

# In[4]:


correlation_matrix = df_tournament.corr()
correlation_with_target = correlation_matrix['Tournament Year Tourism Revenue']
print(correlation_with_target[abs(correlation_with_target) > 0.3].sort_values(ascending=False))


# Using only the targets above: feature selection

# In[5]:


selected_features = correlation_with_target[abs(correlation_with_target) > 0.3].index.tolist()
#take out target
selected_features.remove('Tournament Year Tourism Revenue')

X = df_tournament[selected_features]
y = df_tournament['Tournament Year Tourism Revenue']


# In[6]:


print("Selected Features:")
print(selected_features)


# In[7]:


#linear regression model
model = LinearRegression()
model.fit(X, y)

print(f"Model Coefficients: {model.coef_}, Intercept: {model.intercept_}")


# new file for visitors and revenue

# In[8]:


file_path = r"C:\Users\jeffe\OneDrive\Desktop\Masters Project\Combined_RevVis.xlsx"
df = pd.read_excel(file_path)

#drop rows of prev world cups
df = df.drop(index=range(0, 6)).reset_index(drop=True)

# Select the columns related to revenue and visitors (just dont need the column thats says where it is)
revenue_columns = [col for col in df.columns if 'Rev' in col]
visitor_columns = [col for col in df.columns if 'Vis' in col]

#sum
total_revenue_by_year = df[revenue_columns].sum()
total_visitors_by_year = df[visitor_columns].sum()

print("Total Revenue by Year:")
print(total_revenue_by_year)
print("\nTotal Visitors by Year:")
print(total_visitors_by_year)


# Predicting next couple of years # of visitors + tourism through natural growth

# In[9]:


#rate of growth
revenue_growth_rate = total_revenue_by_year.pct_change().dropna() * 100
visitor_growth_rate = total_visitors_by_year.pct_change().dropna() * 100

average_revenue_growth = revenue_growth_rate.mean()
average_visitor_growth = visitor_growth_rate.mean()

#2023
last_revenue_value = total_revenue_by_year[-1]
last_visitor_value = total_visitors_by_year[-1]


projected_years_visitors = list(range(-2, 3))  # 2024 to 2208 for visitors (includes 2026)
projected_years_revenue = [year for year in projected_years_visitors if year != 0]  # no 2026 cause target

projected_revenue = []
projected_visitors = []

#calc projected rev 
for i, year in enumerate(projected_years_revenue):
    next_revenue = last_revenue_value * ((1 + average_revenue_growth / 100) ** (i + 1))
    projected_revenue.append(next_revenue)

#calc project #of vis
for i, year in enumerate(projected_years_visitors):
    next_visitor = last_visitor_value * ((1 + average_visitor_growth / 100) ** (i + 1))
    projected_visitors.append(next_visitor)

projected_data = pd.DataFrame({
    'Years Relative to 2026': projected_years_visitors,  
    'Projected Revenue': [None] * len(projected_years_visitors) 
})

for i, year in enumerate(projected_years_revenue):
    projected_data.loc[projected_data['Years Relative to 2026'] == year, 'Projected Revenue'] = projected_revenue[i]

projected_data['Projected Visitors'] = projected_visitors

print("Projected Data:")
print(projected_data)


# Tkinter GUI for the prediction of 2026 North america tourism revenue

# In[13]:


selected_features = [
    'Tourism Revenue -5', 'Tourism Revenue -4', 'Tourism Revenue -3', 'Tourism Revenue -2', 'Tourism Revenue -1',
    'Tourism Revenue +1', 'Tourism Revenue +2',
    'Total Visitors Year -5', 'Total Visitors Year -4', 'Total Visitors Year -3', 'Total Visitors Year -2',
    'Total Visitors Year -1', 'World Cup Year Visitors', 'Total Visitors Year +1', 'Total Visitors Year +2',
    'Average Ticket prices', 'Host Expenditure', 'World Cup Revenue',
    'Hotel Occupancy Tournament Month %', 'Year', 'Summer', 'Winter'
]
X = df_tournament[selected_features]
y = df_tournament['Tournament Year Tourism Revenue']

#models
linear_model = LinearRegression()
linear_model.fit(X, y)

random_forest_model = RandomForestRegressor(random_state=42)
random_forest_model.fit(X, y)

xgboost_model = xgb.XGBRegressor(objective='reg:squarederror', random_state=42)
xgboost_model.fit(X, y)

# GUI
root = tk.Tk()
root.title("2026 World Cup Tourism Revenue Predictor")
root.state("zoomed")
#metlife image
background_image_path = "C:/Users/jeffe/OneDrive/Desktop/Masters Project/Tkinter.jpg"
original_bg_image = Image.open(background_image_path)


canvas = tk.Canvas(root)
canvas.pack(fill="both", expand=True)


def update_background():
    new_width = canvas.winfo_width()
    new_height = canvas.winfo_height()
    resized_bg_image = original_bg_image.resize((new_width, new_height), Image.LANCZOS)
    bg_photo = ImageTk.PhotoImage(resized_bg_image)
    canvas.background = bg_photo 
    canvas.create_image(0, 0, image=bg_photo, anchor="nw")
    canvas.lower("all") 

def resize_background(event):
    update_background()

root.bind("<Configure>", resize_background)

#choose model
model_choice = tk.StringVar(value="Linear Regression")  # Default model

def on_model_change(*args):
    update_background()

model_choice.trace("w", on_model_change)  # Reset background when dropdown is changed

model_dropdown = tk.OptionMenu(root, model_choice, "Linear Regression", "Random Forest", "XGBoost")
canvas.create_window(400, 400, window=model_dropdown)

def predict_revenue():
    try:
        input_values = [float(entries[feature].get().strip()) for feature in selected_features]
        example_values = pd.DataFrame([input_values], columns=selected_features)

        # Predict using the selected model
        if model_choice.get() == "Linear Regression":
            predicted_revenue = linear_model.predict(example_values)
        elif model_choice.get() == "Random Forest":
            predicted_revenue = random_forest_model.predict(example_values)
        elif model_choice.get() == "XGBoost":
            predicted_revenue = xgboost_model.predict(example_values)

        # Show result
        messagebox.showinfo("Prediction Result", f"The predicted tourism revenue for 2026 is ${predicted_revenue[0]:,.2f} billion USD.")
    except ValueError as e:
        messagebox.showerror("Input Error", f"Please enter valid numerical values. Error: {str(e)}")

entries = {}
prefilled_values = {
    'Tourism Revenue -5': 153.960,
    'Tourism Revenue -4': 246.530,
    'Tourism Revenue -3': 320.700,  
    'Tourism Revenue -2': 337.203285,  
    'Tourism Revenue -1': 354.555833,  
    'Tourism Revenue +1': 372.801346 ,  
    'Tourism Revenue +2': 391.985777, 
    'Total Visitors Year -5': 62.7,  
    'Total Visitors Year -4': 111.2,  
    'Total Visitors Year -3': 136.1, 
    'Total Visitors Year -2': 142.300956,  
    'Total Visitors Year -1': 148.784439,  
    'World Cup Year Visitors': 155.563321,  
    'Total Visitors Year +1': 162.651061,  
    'Total Visitors Year +2': 170.061730, 
    'Year': 2026, 
    'Summer': 1, 
    'Winter': 0, 
}
grouped_features = [
    ['Tourism Revenue -5', 'Tourism Revenue -4', 'Tourism Revenue -3', 'Tourism Revenue -2', 'Tourism Revenue -1', 'Tourism Revenue +1', 'Tourism Revenue +2', 'Year', 'Summer', 'Winter'],
    ['Total Visitors Year -5', 'Total Visitors Year -4', 'Total Visitors Year -3', 'Total Visitors Year -2', 'Total Visitors Year -1', 'World Cup Year Visitors', 'Total Visitors Year +1', 'Total Visitors Year +2'],
    ['Average Ticket prices', 'Host Expenditure', 'World Cup Revenue', 'Hotel Occupancy Tournament Month %'],
]

for col, feature_group in enumerate(grouped_features):
    for row, feature in enumerate(feature_group):
        label = tk.Label(root, text=f"{feature}:", bg="white")
        
        # spacing
        canvas.create_window(col*300 + 10, row*30 + 10, window=label, anchor="nw")
        entry = tk.Entry(root, width=10)  
        

        if feature in prefilled_values:
            entry.insert(tk.END, prefilled_values[feature])  #insert values that already exist above
        else:
            entry.insert(tk.END, "0")  #0 default if not, then gotta enter
        
        if feature in ["Hotel Occupancy Tournament Month %"]:
            canvas.create_window(col*300 + 300, row*30 + 10, window=entry, anchor="nw")
        else:
            canvas.create_window(col*300 + 150, row*30 + 10, window=entry, anchor="nw")
        
        entries[feature] = entry

btn_predict = tk.Button(root, text="Predict Revenue", command=predict_revenue)
canvas.create_window(400, 450, window=btn_predict)

root.mainloop()


# Using the input 200-10-10-90 in the gui, i got
# Linear regression: 411.54   
# Xg Boost: 45.56
# Random Forest:30  in billions, linear regressions most realistic. 
# --very small dataset, xgboost and random forest perform better with larger datasets without overfitting. 

# In[ ]:




#IN PV
#worked through the python code in jupyterlabs, then exported/uploaded to VS