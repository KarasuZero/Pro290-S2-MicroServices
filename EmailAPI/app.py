from flask import Flask
from flask_mail import Mail, Message

app = Flask(__name__)
mail= Mail(app)

app.config['MAIL_SERVER']='smtp.gmail.com'                  #conn using smtp protocal
app.config['MAIL_PORT'] = 465                               #defualt port for smtp
app.config['MAIL_USERNAME'] = 'person1EnTest@gmail.com'     #sender email
app.config['MAIL_PASSWORD'] = 'aedtcblcnmedgvtz'            #sender password for the email
app.config['MAIL_USE_TLS'] = False                          #settings in documentaiton
app.config['MAIL_USE_SSL'] = True
mail = Mail(app)

@app.route("/")
def index():
   msg = Message('Email notification', sender = 'person1EnTest@gmail.com', recipients = ['person2EnTest@gmail.com'])
   msg.body = "Email notification sent from Flask-Mail API"
   mail.send(msg)
   return "Sent"

if __name__ == '__main__':
   app.run(debug = True)