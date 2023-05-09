const express = require('express');
const app = express();
const PORT = 3000;
const genererPageAccueil = require('./pages/index-get');
const genererPageContact = require('./pages/contact-get');
const genererPageAboutUS = require('./pages/aboutUs-get');
const genererPageLogin = require('./pages/login-get');

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

app.listen(PORT,()=>{
    console.log(`L'application écoute le port ${PORT}`);
});
