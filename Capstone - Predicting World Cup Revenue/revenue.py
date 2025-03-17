import pandas as pd

df = pd.read_excel('revenue.xlsx')

df.set_index(df.columns[0], inplace=True)

# split data from excel 2 what i need
revenue_df = df.iloc[0:10]  # Rows 1-10 for revenue
visitors_df = df.iloc[10:21]  # Rows 11-21 for number of visitors

# -->json
revenue_json = revenue_df.to_json(orient='split')
visitors_json = visitors_df.to_json(orient='split')

#save
with open('revenue.json', 'w') as f:
    f.write(revenue_json)

with open('visitors.json', 'w') as f:
    f.write(visitors_json)

print("Revenue and visitors data saved to revenue_data.json and visitors_data.json")
