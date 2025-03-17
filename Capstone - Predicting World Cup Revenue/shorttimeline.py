import matplotlib.pyplot as plt
import numpy as np
import mpld3  

events = [
    ("FIFA World Cup Korea-Japan", "2002", "Korea-Japan", "Red"),  # World Cup
    ("East Asian Games", "2001", "Japan", "red"),
    ("World Games", "2001", "Japan", "red"),
    ("Asian Winter Games", "2003", "Japan", "red"),
    ("Special Winter Olympics", "2005", "Japan", "red"),
    ("Asian Games", "2002", "Korea", "red"),         
    ("Summer Universiade", "2003", "Korea", "red"),
    ("East Asian Football Championship", "2003", "Korea", "red"),
    ("World Baseball Classic", "2005", "Germany", "blue"),
    ("World Games", "2005", "Germany", "blue"),
    ("FIFA World Cup Germany", "2006", "Germany", "blue"),       # World Cup
    ("IIHF World Championships", "2007", "Germany", "blue"),
    ("World Championships in Athletics", "2009", "Germany", "blue"),
    ("UEFA European Championship", "2024", "Germany", "blue"),
    ("FIFA World Cup South Africa", "2010", "South Africa", "green"),  # World Cup
    ("ICC Cricket World Cup", "2011", "South Africa", "green"),
    ("African Cup of Nations", "2013", "South Africa","green"),
    ("Rugby World Cup Sevens", "2018", "South Africa", "green"),
    ("BRICS Games", "2014", "Brazil", "purple"),
    ("FIFA World Cup Brazil", "2014", "Brazil", "yellow"),  # World Cup
    ("Summer Olympics (Rio)", "2016", "Brazil", "yellow"),      
    ("Paralympics (Rio)", "2016", "Brazil", "yellow"),
    ("Copa America", "2019", "Brazil", "yellow"),
    ("FIFA World Cup Russia", "2018", "Russia", "pink"),        # World Cup
    ("UEFA Super Cup", "2019", "Russia", "pink"),
    ("Euro 2020 Games", "2020", "Russia", "pink"),
    ("FIFA World Cup Qatar", "2022", "Qatar", "green"),         # World Cup
    ("AFC Asian Cup", "2023", "Qatar", "green"),
    ("Club World Cup", "2024", "Qatar", "green"),
    ("FIFA World Cup North America", "2026", "USA, Canada, Mexico", "black"),  # World Cup    
    ("World Junior Ice Hockey Championships (Alberta)", "2027", "Canada", "Black"),
    ("Summer Olympics (LA)", "2028", "USA", "black"),
    ("Paralympics (LA)", "2028", "USA", "black"),
    ("Winter Olympics (Salt Lake City)", "2034", "USA", "Black"),  # USA
]

#prep data
years = [int(event[1]) for event in events]
countries = [event[2] for event in events]
event_names = [event[0] for event in events]
colors = [event[3] for event in events]  # colors 4 events (better visually)

fig, ax = plt.subplots(figsize=(10, 10))

y_positions = []
y_counter = 0

year_count = {}

for year, country, event, color in zip(years, countries, event_names, colors):
    if year not in year_count:
        year_count[year] = 0
    else:
        year_count[year] += 1

    
    spacing_multiplier = 0.6  #no overlaps

    if "FIFA World Cup" in event:  # Place World Cups in center timeline
        y_position = year + spacing_multiplier * (year_count[year] + 1)
        ax.plot(0, y_position, 'o', color=color)  
        ax.text(
            0, y_position, f"{event} ({year})", 
            ha='center', va='center', fontsize=10, weight='bold' 
        )
    else:
        # put events left n right of center
        if year_count[year] % 2 == 0:  # Even count for right side
            x_offset = 0.1
            y_position = year + spacing_multiplier * (year_count[year] + 1)
            ax.plot([0, x_offset], [y_position, y_position], color=color, lw=2)
            ax.plot(x_offset, y_position, 'o', color=color)
            ax.text(
                x_offset + 0.02, y_position, f"{event} ({year})",
                ha='left', va='center', fontsize=9
            )
        else:  # Odd count for left side
            x_offset = -0.1
            y_position = year + spacing_multiplier * (year_count[year] + 1)
            ax.plot([0, x_offset], [y_position, y_position], color=color, lw=2)
            ax.plot(x_offset, y_position, 'o', color=color)
            ax.text(
                x_offset - 0.02, y_position, f"{event} ({year})",
                ha='right', va='center', fontsize=9
            )


ax.set_xlim(-0.3, 0.3)
ax.set_ylim(2000, 2035)

ax.set_xticks([])
ax.set_xticklabels([])
#hide lables
ax.set_yticks([])

ax.set_title('Vertical Timeline of FIFA World Cups and Related Events')

ax.grid(False)

ax.spines['left'].set_color('none')
ax.spines['right'].set_color('none')
ax.spines['top'].set_color('none')
ax.spines['bottom'].set_color('none')

ax.axvline(x=0, color='royalblue', lw=2)

mpld3.save_html(fig, "timeline.html")

plt.tight_layout()
plt.savefig("timeline.png", format="png")
plt.show()
