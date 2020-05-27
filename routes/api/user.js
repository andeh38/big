const express = require('express');
const {check} = require('express-validator');
const multer = require('multer');

const User = require('../../controlers/user');
const validate = require('../../middleware/validate');

const router = express.Router();

const upload = multer().single('profileImage');

//INDEX
router.get('/', User.index);

//STORE
router.post('/', [
], validate, User.store);

//SHOW
router.get('/:id',  User.show);

//UPDATE
router.put('/:id', upload, User.update);

//DELETE
router.delete('/:id', User.destroy);

module.exports = router;