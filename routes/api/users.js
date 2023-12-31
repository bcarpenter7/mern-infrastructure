const express = require('express')
const router = express.Router();
const usersCtrl = require('../../controllers/api/users')
const ensureLoggedIn = require('../../config/ensureLoggedIn')


// All paths start with '/api/users'

// POST /api/users
router.post('/', usersCtrl.create);

router.post('/login', usersCtrl.login)
///api/users/checktoken
router.get('/check-token', usersCtrl.checkToken)

module.exports = router;