const express = require('express');
const router = express.Router();

const contactsController = require('../controllers/contacts');

router.get('/', contactsController.getAllData);
router.get('/:id', contactsController.getOneFromData);
router.post('/', contactsController.create);
router.put('/:id', contactsController.updateOne);
router.delete('/:id', contactsController.deleteOne);

module.exports = router;