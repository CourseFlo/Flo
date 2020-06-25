var express = require('express');
var router = express.Router();
let User = require('../models/users.model');

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

let users = [
  {
    id: '1',
    username: 'testusername',
    firstname: 'madman',
    lastname: 'naniiyeeet'
  }
];


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  res.send(users);
});

router.get('/:userId', function(req, res, next) {
  const foundUser = users.find(user => user.id === req.params.userId);
  res.setHeader('Content-Type', 'application/json');
  res.send(foundUser);
});

// // Straight from mongo
// router.route('/').get((req, res) => {
//   User.find()
//     .then(users => res.json(users))
//     .catch(err => res.status(400).json('Error: ' + err));
// });

router.route('/add').post((req, res) => {
  const username = req.body.username;

  const newUser = new User({username});

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
