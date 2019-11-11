const router = require('express').Router();
const bcrypt = require('bcryptjs')
const Users = require('../users/users-model')

const authRouter = require('../auth/auth-router.js');
const usersRouter = require('../users/users-router.js');

router.use('/auth', authRouter);
router.use('/users', usersRouter);

router.get('/', (req, res) => {
  res.json({ api: "It's alive" });
});

router.post('/hash', ( req, res ) => {
  // read password from body
  // hash password 
  // return it to the user in an object
  let user = req.body
  const hash = bcrypt.hashSync(user.password, 12)
  user.password = hash;

  Users.add(user)
    .then(user => {
      res.status(201).json(user);
    })
    .catch(error => {
      res.status(500).json(error);
    });
})

module.exports = router;
