require('dotenv').config();
const admin = require('firebase-admin');
const defaultApp = admin.initializeApp();
const express = require('express');
const app = express();

let db = admin.firestore();

app.get('/', function (req, res) {
    res.send('<b>My</b> first express http server by ' + process.env.FIREBASE_CONFIG);
});

app.listen(3000, function() {
    console.log('Example app listening on port 3000.');
})