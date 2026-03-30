const express = require('express');
const router = express.Router();

const { getUsers, registerUser, loginUser } = require('../Controllers/userauth.Controller');

router.get('/', getUsers);
router.post('/register', registerUser);
router.post('/login', loginUser);


module.exports = router;
