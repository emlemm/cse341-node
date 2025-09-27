const express = require('express');
const router = express.Router();

const contactsController = require('../controllers/contacts');

router.get('/', contactsController.getAllData);
router.get('/:id', contactsController.getOneFromData);

module.exports = router;