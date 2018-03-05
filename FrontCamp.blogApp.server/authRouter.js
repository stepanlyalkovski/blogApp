const express = require('express');
const authRouter = express.Router();
const jwt = require('jsonwebtoken');
let User = require('./models/user');

authRouter.post('/register', function(req, res, next) {
  console.log(req.body);
  var newUser = new User();
  if(!req.body.author) {
    return res.status(400).send({
      message: 'no body'
    });
  }

  newUser.author = req.body.author;
  newUser.email = req.body.email;
  newUser.hash_password = bcrypt.hashSync(req.body.password, 10);
  newUser.save(function(err, user) {
    if (err) {
      return res.status(400).send({
        message: err
      });
    } else {
      user.hash_password = undefined;
      return res.json({author: user.author, isRegistered: true});
    }
  });
});

authRouter.post('/login', function(req, res, next) { 
  User.findOne({
    email: req.body.email
  }, function(err, user) {
    if (err) throw err;
    if (!user) {
      res.status(401).json({ message: 'Authentication failed. User not found.' });
    } else if (user) {
      if (!user.comparePassword(req.body.password)) {
        res.status(401).json({ message: 'Authentication failed. Wrong password.' });
      } else {
        return res.json({
          token: jwt.sign({ email: user.email, author: user.author, _id: user._id}, 'frontcamp', {expiresIn: '240m'}),
          author: user.author
        });
      }
    }
  });
});

module.exports = authRouter;