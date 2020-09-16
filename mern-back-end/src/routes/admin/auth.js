const express = require('express');
const { signup, signin } = require('../../controller/admin/auth');
const { isRequestValidated, validateSignUpRequest, validateSignInRequest } = require('../../validators/auth');
const router = express.Router();


router.post('/admin/signup', validateSignUpRequest, isRequestValidated,  signup);
router.post('/admin/signin', validateSignInRequest, isRequestValidated, signin);

module.exports = router;