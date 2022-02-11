const passport = require('../lib/passportJWT')
module.exports = passport.authenticate('jwt', {
 session: false
})
