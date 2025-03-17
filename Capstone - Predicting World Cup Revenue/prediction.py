import pandas as pd
import plotly.graph_objects as go
from plotly.subplots import make_subplots

df = pd.read_csv('Tournament.csv', skiprows=[7])
#pie
pie = go.Pie(
    values=df['Host Expenditure'],
    labels=df['Host Country'],
    hovertemplate='%{label}: $%{value:,.0f}<extra></extra>',
)

bar = go.Bar(
    x=df['Host Country'],
    y=df['Host Expenditure'],
    text=[f"${value / 1e9:.2f}B" for value in df['Host Expenditure']],  # Fbillions
    textposition='outside', 
)

# smaller sub plots
fig = make_subplots(rows=1, cols=2, 
                    specs=[[{'type': 'pie'}, {'type': 'bar'}]], 
                    subplot_titles=("Host Expenditure Distribution (Pie)", "Host Expenditure Distribution (Bar)"))

fig.add_trace(pie, row=1, col=1)

fig.add_trace(bar, row=1, col=2)

# Update
fig.update_layout(
    title_text="Host Expenditure Analysis",
    showlegend=False,
    height=600,
    width=1000,
    margin=dict(l=20, r=20, t=50, b=20),
)

# html save
fig.write_html("plotly_pie_chart.html")

print("Interactive chart with toggle button and bar labels saved as plotly_pie_chart.html.")
