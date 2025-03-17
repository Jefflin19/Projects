from flask import Flask
import subprocess

app = Flask(__name__)

@app.route('/open_gui')
def open_gui():
    # tkinter (masters.py) laucnhed
    subprocess.Popen(['python', 'Masters.py'])  
    return "GUI opened!"

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)  #makes so the port is correct, 13.whatever

    #2 open GUI, run python -m app in terminal
