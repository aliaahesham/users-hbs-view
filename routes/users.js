var express = require('express');
var router = express.Router();

const users = [
  {
    id: 1,
    name: "Aliaaa",
    age: 23,
  },
  {
    id: 2,
    name: "Mariam",
    age: 22,
  },
  {
    id: 3,
    name: "Ahmed",
    age: 19,
  },
];

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.render('users', { users });
});

router.get('/create', function (req, res, next) {
  res.render('createUsers');
});

router.post('/create', function (req, res, next) {
  users.push(req.body);
  res.redirect('/users');
});

router.get('/edit/:userId', function (req, res, next) {
  debugger;
  console.log(req.params.userId);
  res.render('editUser', {
    user: users[req.params.userId - 1],
  });
});

router.post('/edit/:userId', function (req, res, next) {
  users[req.params.userId - 1] = req.body;
  res.redirect('/users');
});

module.exports = router;
