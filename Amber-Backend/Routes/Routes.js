const express = require('express');

const userControllers = require("../Controllers/user-controllers");

const router = express.Router();

router.post('/signup', userControllers.signup);

router.post('/login', userControllers.login);

router.post('/selectDetails', userControllers.selectDetails);

router.post('/payment', userControllers.payment);

module.exports = router;    