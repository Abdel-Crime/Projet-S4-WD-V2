const { readFile } = require('fs');
const {promisify} = require('util');
const readFileAsync = promisify(readFile);

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const url = "mongodb://127.0.0.1:27017/";

const READ_OPTION = { encoding: 'UTF-8'}

module.exports = async() => {
    const contenu = await readFileAsync('../HTML/login.html',READ_OPTION);


    return contenu;
}

exports.signIn = async function (req, res) {
    let utilisateur = req.body;
    console.log(req.body+"C'est le user crée")
    try {
        db = await MongoClient.connect(url);
        let dbo = db.db("taches");
        let erreur=false
        liste_user=await dbo.collection("utilisateur").find({}).toArray();
        liste_user.forEach(element => {
            if(element.login==utilisateur.login){
                erreur=true
            }
            
        });
        if(erreur===false){
            await dbo.collection("utilisateur").insertOne(utilisateur);
            res.status(200).send();
        }
        else{
            
            res.status(401).json({ message: 'Unauthorized' });
        }
        
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: err })
    }
}

exports.login = async function (req, res) {
    try {
        console.log("zerty")
        let utilisateur = req.body;
        db = await MongoClient.connect(url);
        let dbo = db.db("taches");
        let utilisateurs = await dbo.collection("utilisateur").find({ login: utilisateur.login, password: utilisateur.password }).toArray();
        if (utilisateurs.length > 0) {
            req.session.user = utilisateurs[0].login;
            res.status(200).send();
        } else {
            res.status(401).json({ message: 'Unauthorized' });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: err })
    }
}

exports.logout = async function (req, res) {
    if (req.session)
        await req.session.destroy();
    res.status(200).end();
}

exports.isConnected = async function (req, res) {
    res.status(200).end();
}