const express = require('express')
const app = express()
const admin = require("firebase-admin");
const bodyParser = require("body-parser");
const firebase = require("firebase");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var config = {
  apiKey: "AIzaSyC36azblDxYch3IxVuki1qdu-H5_aZnNYk",
  authDomain: "mentalist-v1.firebaseapp.com",
  databaseURL: "https://mentalist-v1.firebaseio.com",
  projectId: "mentalist-v1",
  storageBucket: "mentalist-v1.appspot.com",
  messagingSenderId: "18854070278"
};

firebase.initializeApp(config);
var serviceAccount = require("../mentalist-v1-firebase-adminsdk-2li8w-adfaad0317.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://mentalist-v1.firebaseio.com"
});

app.post('/login', function (req, res) {
  console.log('hey', req.body);
  firebase.auth().signInWithEmailAndPassword(req.body.email, req.body.password)
    .then(function(creds) {
      res.send(creds);
    })
    .catch(function(error) {
      const code = (error.code === 'auth/user-not-found') ? 404 : 500
      res.status(code).send(error.message);
    });
});

app.listen(3001, function () {
    console.log('server listening on port 3001!')
})
