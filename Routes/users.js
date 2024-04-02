const express = require('express');
const Register = require('../Controllers/Register');
const Login = require('../Controllers/Login');
const router = express.Router();

router.post("/signup",Register)
router.post("/login",Login)


module.exports = router;