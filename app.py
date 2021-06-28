from enum import unique
from os import name
from flask import Flask, render_template, request, redirect, url_for
from flask.sessions import NullSession
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///main.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)



class Cruises(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    departDate = db.Column(db.Integer, unique=False, nullable=False)
    ship = db.Column(db.String(50), unique=False, nullable=False)
    floatsFrom = db.Column(db.String(50), unique=False, nullable=False)
    floatsTo = db.Column(db.String(50), unique=False, nullable=False)
    price = db.Column(db.Integer, unique=False, nullable=False)

class Ships(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    ship = db.Column(db.String(50), unique=True, nullable=False)
    passengerCapacity = db.Column(db.Integer, unique=False, nullable=False)
    price = db.Column(db.Integer, unique=False, nullable=False)

class Ports(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), unique=True, nullable=False)
    country = db.Column(db.String(50), unique=False, nullable=False)
    shipsCapacity = db.Column(db.Integer, unique=False, nullable=False)

class Users(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    password = db.Column(db.String(120), unique=True, nullable=False)

    def __repr__(self):
        return '<User %r>' % self.username


@app.route('/', methods=['POST', 'GET'])
def mainPage():
    admin = Users.query.first()
    if request.method == "POST":
        user = request.form['user']
        password = request.form['password']
        if admin.username == user and admin.password == password:
            return redirect('/admin_panel')
        else:
            return redirect('/')
    else:
        if Cruises.query.first() != None:
            offers = Cruises.query.all()
            return render_template('main_page.html', offers=offers)
        else:
            return render_template('main_page.html')


@app.route('/admin_panel')
def adminPanel():
    if Cruises.query.first() != None:
        offers = Cruises.query.all()
        return render_template('admin_panel.html', offers=offers)
    else:
        return render_template('admin_panel.html')        
    


if __name__ == "__main__":
    app.run(debug=True, use_reloader=False, host='0.0.0.0')