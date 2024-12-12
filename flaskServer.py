from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def root():
    return render_template('index.html')

@app.route('/TTT')
def TTT():
    return render_template('games/TicTacToe/indexTTT.html')


if __name__ == '__main__':
    app.run(debug=True)