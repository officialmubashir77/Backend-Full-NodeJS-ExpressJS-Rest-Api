https://excalidraw.com/#json=c_9N1FrMkUTq-Xa4bj4k5,G4cnxpadvPr4SFkFFFWDEw

excalidraw example diagram view

________________________________________________________________________________________________________________________________

NodeJS , Express JS , MongoDb

NodeJS : javascript runtime allows to run javascript outside the browser
Express JS - Framwwork of node Routes POST - GET - PUT - DELETE
MongoDB - Nosql Database

Fronend React , NExtJS

Express JS APi (Routes , Controller)

MongoDB (Stored User , Order , Payments)

npm init -y ==> Create package.json 

{
  "name": "1-nodejs-expressjs-and-rest-api-basics-backend",
  "version": "1.0.0",
  "description": "NodeJS , Express JS , MongoDb",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1" ,
    "start": "nodemon index.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}

npm i nodemon ==> Restart your server auto whenever you make code changes

npm i dotenv for mongodb uris port and other extra secure information like JWT keys

GET - when user request . then express js will response

controllers -- business logic
models -- schema/table
routes -- endpoints
config -- db.js/cloudinary
.env -- keys/uri
server.js -- making express server



Real Life Example -- Train Ticket Booking App (IRCTC)

Login/Signup user information save in database (name , email , password)

password encrypt through bcrypt 

when user login api call - generate JWT token and save this token in client cookies