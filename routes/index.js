const router = require("express").Router();
const User = require("../models/User.model");
const bcrypt = require("bcryptjs"); 

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/signup", (req, res, next) => {
  res.render("signup");
});

router.post("/signup", async (req, res, next) => {
  console.log(req.body);
  const { username, password } = req.body;

  const salt = await bcrypt.genSalt(12);
  const hash = await bcrypt.hash(password, salt);

  const user = {
    username,
    password: hash,
  }
  //after import user model
  await User.create(user);
  res.render('profile', {}) //send user data to profile welcome

});

module.exports = router;
