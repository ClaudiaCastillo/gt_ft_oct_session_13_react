const express = require('express');
const router = express.Router();
const User = require('../models/User');

// User.find({}).then(users => console.log(users));

router.post('/users', function(req, res, next) {
  let user = new User(req.body);
	user.save().then(user => {
		res.send(user);
	});
});

module.exports = router;
