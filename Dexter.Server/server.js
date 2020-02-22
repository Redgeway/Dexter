require('dotenv').config();
const admin = require('firebase-admin');
let serviceAccount = require('./assets/serviceAccountKey.json');

const defaultApp = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});
const express = require('express');
const app = express();

let db = admin.firestore();

app.get('/', function (req, res) {
    db.collection('pokemon').get()
        .then((snapshot) => {
            snapshot.forEach((doc) => {
                console.log(doc.id, '=>', doc.data());
            });
        })
        .catch((err) => {
            console.log('Error getting documents', err);
        });    
});

app.listen(3000, function() {
    console.log('Example app listening on port 3000.');
})