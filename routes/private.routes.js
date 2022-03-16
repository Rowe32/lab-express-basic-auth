const router = require("express").Router();
const User = require("../models/User.model");
const bcrypt = require("bcryptjs"); 
const requireLogin = require("../middleware/routeGuard");

router.use(requireLogin);

router.get("/profile", (req, res) => {
  res.render('profile', {user: req.session.currentUser});
})

router.get("/main", (req, res) => {
    res.render('main');
  })

router.get("/private", (req, res) => {
res.render('private');
})
  
module.exports = router;