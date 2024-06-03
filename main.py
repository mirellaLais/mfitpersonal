from flask import Flask, render_template

app = Flask(__name__, static_url_path='/static')

@app.route('/')
@app.route('/index')
def index():
    return render_template('index.html')

@app.route('/registre')
def registre():
    return render_template('registre.html')

@app.route('/login')
def login():
    return render_template('login.html')

@app.route('/cadastro_professor.html')
def cadastro_professor():
    return render_template('cadastro_professor.html')

@app.route('/menu_aluno.html')
def menu_aluno():
    return render_template('menu_aluno.html')

@app.route('/menuProfHTML.html')
def menuProfHTML():
    return render_template('menuProfHTML.html')

if __name__ == '__main__':
    app.run(port=5001, debug=True)