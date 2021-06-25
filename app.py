from enum import unique
from flask import Flask, render_template, request, redirect
from flask.sessions import NullSession
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///main.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

class Offers(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    departDate = db.Column(db.Integer, unique=False, nullable=False)
    ship = db.Column(db.String(50), unique=False, nullable=False)
    price = db.Column(db.Integer, unique=False, nullable=False)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)

    def __repr__(self):
        return '<User %r>' % self.username


@app.route('/')
def mainPage():
    if(Offers.query.first() != None):
        offers = Offers.query.all()
        return render_template('main_page.html', offers=offers)
    else:
        return render_template('main_page.html')


if __name__ == "__main__":
    app.run(debug=True)