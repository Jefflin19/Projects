import pandas as pd

df = pd.read_excel('Tournament.xlsx')
df.to_csv('Tournament.csv', index=False)
#loading my excel and changing to csv