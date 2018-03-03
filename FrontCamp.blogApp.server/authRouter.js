const express = require('express');
const authRouter = express.Router();
const jwt = require('jsonwebtoken');

authRouter.post('/login', function(req, res, next) {
  // Mock user
  const user = {
    id: 1, 
    username: 'brad',
    email: 'brad@gmail.com'
  }

  jwt.sign({user}, 'secretkey', (err, token) => {
    res.json({
      token
    });
  });
});

module.exports = authRouter;