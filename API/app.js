const express = require('express');
const app = express();
const PORT = 4200;
const cors = require('cors');
//-------------------------------------------------------------------------------------------
const MongoClient = require('mongodb').MongoClient;
const mongodb = require('mongodb');
const bodyParser = require('body-parser');
const signIn = require('./pages/login-get');
const login = require('./pages/login-get');
const logout = require('./pages/login-get');
const isConnected = require('./pages/login-get');
const getUser = require('./pages/login-get');
const session = require('express-session');
//-------------------------------------------------------------------------------------------
const voitureGet = require('./pages/voiture-get');
const voiturePost = require('./pages/voiture-get');
const voitureDelete = require('./pages/voiture-get');
const voiturePut = require('./pages/voiture-get');
//-------------------------------------------------------------------------------------------
const genererPageAccueil = require('./pages/index-get');
const genererPageContact = require('./pages/contact-get');
const genererPageAboutUS = require('./pages/aboutUs-get');
const genererPageLogin = require('./pages/login-get');
//-------------------------------------------------------------------------------------------
app.use(cors({ credentials: true, origin: 'http://localhost:4200' }));


app.get('/index.html', async(req, res) => {
    const indexHtml = await genererPageAccueil();
    res.send(indexHtml);
});

app.get('/contact.html', async(req, res) => {
    const contact = await genererPageContact();
    res.send(contact);
});

app.get('/aboutUs.html', async(req, res) => {
    const aboutUs = await genererPageAboutUS();
    res.send(aboutUs);
});

app.get('/login.html', async(req, res) => {
    const login = await genererPageLogin();
    res.send(login);
});

app.use('/CSS',express.static('../CSS'));
app.use('/ADD',express.static('../ADD'));
app.use('/IMG',express.static('../IMG'));

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
app.post('/signIn',signIn)
app.post('/logout', logout);
//---------------------------------------------------------------
app.get('/voiture.component.html',checkSignIn,async(req, res) => {
    const voitureGet = await voitureGet.voitureGet();
    res.send(voitureGet);
});
app.post('/voiture', checkSignIn, async(req, res) => {
    const voiturePost = await voitureGet.voiturePost();
    res.send(voiturePost);
});
app.delete('/voiture/:id', checkSignIn, async(req, res) => {
    const voitureDelete = await voitureGet.voitureDelete();
    res.send(voitureDelete);
});
app.put('/voiture/:id', checkSignIn, async(req, res) => {
    const voiturePut = await voitureGet.voiturePut();
    res.send(voiturePut);
});
//--------------------------------------------------------------
app.listen(PORT,()=>{
    console.log(`L'application écoute le port ${PORT}`);
});
