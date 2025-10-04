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

const create = async (req, res, next) => {
    const newContact = req.body;
    const result = await db().insertOne(newContact);
    res.status(201).json(result);
}

const updateOne = async (req, res, next) => {
    const idFromList = new ObjectId(req.params.id);
    const qry = {_id: idFromList};
    const vals = {$set: req.body};
    const result = await db().updateOne(qry, vals);
    res.status(204).json(result);
}

const deleteOne = async (req, res, next) => {
    const idFromList = new ObjectId(req.params.id);
    const qry = {_id: idFromList};
    const result = await db().deleteOne(qry);
    res.status(200).json(result);
}
module.exports = { getAllData, getOneFromData, create, updateOne, deleteOne };