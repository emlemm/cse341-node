const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const db = () => {
    return mongodb.getDb().db('CSE341W02Personal').collection('contacts')
}

const getAllData = async (req, res, next) => { 
    const result = await db().find();
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists);
    });
};

const getOneFromData = async (req, res, next) => {
    const idFromList = new ObjectId(req.params.id);
    const result = await db().find({_id: idFromList});
    result.toArray().then((item) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(item);
    });
};

module.exports = { getAllData, getOneFromData };