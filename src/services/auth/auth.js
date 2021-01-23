const fs = require('fs');
const path  = require('path');
const passport = require('passport');
var BearerStrategy = require('passport-http-bearer').Strategy;

const config = require('../config');

/**
 * @type {Array.<object>}
 */
const users = JSON.parse(fs.readFileSync(
  path.resolve(config.assetsDirectory, 'users.json'),
));

const parseBearer = (token) => {
  const decoded = Buffer.from(token, 'base64').toString();
  const [username, password] = decoded.split(':');
  return { username, password };
};


passport.use(new BearerStrategy(
  function(token, done) {
    const pToken = parseBearer(token);
    const user = users.find(
      (curr) => pToken.username === curr.username && pToken.password === curr.password,
    );
    if (!user) {
      return done(null, false);
    }
    return done(null, user, { scope: 'all' });
  }
));


const initializeMiddleware = passport.initialize();

const authorizeMiddleware = passport.authenticate('bearer', { session: false });

const middleware = (req, res, next) => {
  const next1 = (err) => {
    if (err) {
      return next(err);
    }
    return process.nextTick(() => authorizeMiddleware(req, res, next));
  }
  initializeMiddleware(req, res, next1);
}

module.exports = {
  initializeMiddleware,
  authorizeMiddleware,
  middleware,
}
