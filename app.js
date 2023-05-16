const express = require('express');
const app = express();
const PORT = 3000;
const cors = require('cors');
const path = require('path');
//-------------------------------------------------------------------------------------------
const MongoClient = require('mongodb').MongoClient;
const mongodb = require('mongodb');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');


const session = require('express-session');
//-------------------------------------------------------------------------------------------
const { voitureGet, voiturePost, tacheDelete, tachePut, voitureDelete,contactPost,contactGet,contactDelete} = require('./pages/voiture-get');
const { signIn, login, logout, isConnected, getUser } = require('./pages/login-get');

//-------------------------------------------------------------------------------------------
const genererPageAccueil = require('./pages/index-get');
const genererPageContact = require('./pages/contact-get');
const genererPageAboutUS = require('./pages/aboutUs-get');
const genererPageLogin = require('./pages/login-get');
const generervoitureReprog = require('./pages/reprog-get');
//-------------------------------------------------------------------------------------------
app.use(cors({ credentials: true, origin: 'http://localhost:4200' }));
app.use(bodyParser.json());







app.use(express.static(__dirname + '/public'));

//--------------------------------------------------------------------------

app.use(session({
    secret: "chut, c'est un secret",
    name: "cookieTacheApplication"
}));

function checkSignIn(req, res, next) {
    if (req.session.user) {
        next(); //Si la session exist on passe au handler normal.
    } else {
        // res.status(401).send("Unauthorized");
        next();
    }
}

app.post('/login', login);

app.get('/reprogrammation', checkSignIn, voitureGet);
app.delete('/delete/:id', checkSignIn, voitureDelete);
// Endpoint pour recevoir la demande d'envoi d'e-mail
app.post('/sent-email', checkSignIn, contactPost);
app.get('/load-email',checkSignIn,contactGet)
app.delete('/delete-email/:id',checkSignIn,contactDelete)
app.post('/ajout', checkSignIn, voiturePost);


//app.get('/voiture', voitureGet);
//---------------------------------------------------------------

//--------------------------------------------------------------
app.listen(PORT,()=>{
    console.log(`L'application écoute le port ${PORT}`);
});
