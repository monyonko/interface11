from flask import Flask, render_template, url_for

app = Flask(__name__)

@app.route('/')
@app.route('/one')
def first():
    return render_template('header_1.html')

@app.route('/two')
def second():
    return render_template('header_2.html')

@app.route('/three')
def third():
    return render_template('header_3.html')



if (__name__) == "__main__":
    app.run();