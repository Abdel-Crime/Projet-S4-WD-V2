const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const url = "mongodb://127.0.0.1:27017/";

exports.voitureGet = async function(req, res) {
    try {
        db = await MongoClient.connect(url);
        let dbo = db.db("voiture");
        let datas = await dbo.collection("voiture").find({}).toArray();
        res.status(200).json(datas);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: err })
    }
};

exports.voiturePost = async function(req, res) {
    let tache = req.body;
    try {
        db = await MongoClient.connect(url);
        let dbo = db.db("voiture");
        await dbo.collection("voiture").insertOne(voiture);
        res.status(200).json(voiture);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: err })
    }
};

exports.voitureDelete = async function(req, res) {
    try {
        db = await MongoClient.connect(url);
        let dbo = db.db("voiture");
        await dbo.collection("voiture").deleteOne({ _id: new mongodb.ObjectId(req.params.id) });
        res.status(200).send();
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: err })
    }
};

exports.voiturePut = async function(req, res) {
    try {
        db = await MongoClient.connect(url);
        let dbo = db.db("voiture");
        await dbo.collection("voiture").updateOne({ _id: new mongodb.ObjectId(req.params.id) }, { $set: { titre: req.body.titre, termine: req.body.termine , statut: req.body.statut} });
        res.status(200).send();
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: err })
    }
};