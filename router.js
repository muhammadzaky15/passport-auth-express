const router = require("express").Router();
const restrict = require('./middlewares/restrict')
const restrictJWT = require("./middlewares/restrictJWT");

const auth = require("./controllers/authController");
const passport = require("./lib/passport");

router.get("/", restrict, (req, res) => {
    console.log(req)
    res.render("index")
});
router.get("/register", (req, res) => res.render("register"));
router.post("/register", auth.register);

router.get("/login", (req, res) => res.render("login"));
router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true,
  })
);

router.get('/whoami', restrict, auth.whoami)

router.post('/api/v1/auth/login', auth.login)
router.get('/api/v1/auth/whoami', restrictJWT, auth.whoamiJWT)

module.exports = router;
