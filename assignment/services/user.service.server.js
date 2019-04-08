var userModel = require("../model/user/user.model.server");
var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var FacebookStrategy = require("passport-facebook").Strategy;
var bcrypt = require("bcrypt-nodejs");

passport.serializeUser(serializeUser);

function serializeUser(user, done) {
  done(null, user);
}

passport.deserializeUser(deserializeUser);

function deserializeUser(user, done) {
  userModel.findUserById(user._id).then(function (user) {
    done(null, user);
  }, function (err) {
    done(err, null);
  });
}

passport.use(new LocalStrategy(localStrategy));

function localStrategy(username, password, done) {
  userModel.findUserByUserName(username)
    .then(function (user) {
      console.log("check log in user name");
      console.log(bcrypt.compareSync(password, user.password));
      if (user && bcrypt.compareSync(password, user.password)) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    }, function (err) {
      if (err) {
        return done(err);
      }
    });
}

var facebookConfig = {
  clientID: process.env.FACEBOOK_CLIENT_ID,
  clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
  callbackURL: process.env.FACEBOOK_CALLBACK_URL,
};

passport.use(new FacebookStrategy(facebookConfig, facebookStrategy));

function facebookStrategy(token, refreshToken, profile, done) {
  userModel.findUserByFacebookId(profile.id).then(function (user) {
    if (user) {
      return done(null, user);
    } else {
      var names = profile.displayName.split(" ");
      var newFacebookUser = {
        lastName: names[1],
        firstName: names[0],
        email: profile.emails ? profile.emails[0].value : "",
        facebook: {id: profile.id, token: token, displayName: profile.displayName},
      };
      return userModel.createUser(newFacebookUser);
    }
  }, function (err) {
    if (err) {
      return done(err);
    }
  });
}

module.exports = function (app) {

  var users_pop = [
    {username: "alice", password: "alice", firstName: "Alice", lastName: "Wonderland"},
    {username: "bob", password: "bob", firstName: "Bob", lastName: "Marley"},
    {username: "charly", password: "charly", firstName: "Charly", lastName: "Garcia"},
    {username: "jannunzi", password: "jannunzi", firstName: "Jose", lastName: "Annunzi"},
  ];

  app.post("/api/user", createUser);
  app.get("/api/user", findUserByCredentials);
  app.get("/api/user", findUserByUsername);
  app.get("/api/user/:userId", findUserById);
  app.put("/api/user/:userId", updateUser);
  app.delete("/api/user/:userId", deleteUser);
  app.post("/api/login", passport.authenticate("local"), login);
  app.get('/facebook/login', passport.authenticate('facebook', {scope: 'email'}));
  app.get('/auth/facebook/callback', passport.authenticate('facebook', {failureRedirect: '/#/login'}),
    function (req, res) {
      // Successful authentication, redirect home.
      var uid = req.user._id;
      res.redirect('/user/' + uid);
    });
  app.post("/api/logout", logout);
  app.post("/api/register", register);
  app.get("/api/loggedin", loggedin);

  //delete me when push to heroku
  app.get("/api/populate", populateUsers);

  function createUser(req, res) {
    console.log("create user");
    var user = req.body;
    userModel
      .createUser(user)
      .then(
        function (user) {
          console.log("user created!");
          res.json(user);
        },
        function (error) {
          if (error) {
            console.log(error);
            res.statusCode(400).send(error);
          }
        },
      );
  }

  function populateUsers(req, res) {
    console.log("pop DB!");
    userModel.populateUsers(users_pop)
      .then(
        function (users) {
          console.log("users populated!");
          res.json(users);
        },
        function (error) {
          if (error) {
            console.log(error);
            res.statusCode(400).send(error);
          }
        },
      );
  }

  function findUserById(req, res) {

    console.log("param is " + req.params.userId);

    var id = req.params.userId;

    console.log("hit find user by id..." + id);

    userModel.findUserById(id).exec(
      function (err, user) {
        if (err) {
          return res.sendStatus(400).send(err);
        }
        return res.json(user);
      },
    );
  }

  function findUserByCredentials(req, res) {

    var username = req.query.username;
    var password = req.query.password;

    userModel.findByCredential(username, password).exec(
      function (err, user) {
        if (err) {
          return res.sendStatus(400).send(err);
        }
        return res.json(user);
      },
    );
  }

  function findUserByUsername(req, res) {
    console.log("find user by name...");

    var username = req.query.username;

    userModel.findUserByUserName(username).exec(
      function (err, user) {
        if (err) {
          return res.sendStatus(400).send(err);
        }
        return res.json(user);
      },
    );
  }

  function updateUser(req, res) {
    console.log("update user");

    let userId = req.params.userId;
    let user = req.body;
    userModel.updateUser(userId, user).exec(
      function (err, user) {
        if (err) {
          return res.sendStatus(400).send(err);
        }
        return res.json(user);
      },
    );
  }

  function deleteUser(req, res) {
    console.log("delete user");

    let userId = req.params["uid"];
    userModel.deleteUser(userId).exec(
      function (err, user) {
        if (err) {
          return res.sendStatus(400).send(err);
        }
        return res.json(user);
      },
    );
  }

  function login(req, res) {
    console.log("body is " + req.user);
    var user = req.user;
    res.json(user);
  }

  function logout(req, res) {
    req.logOut();
    res.send(200);
  }

  function register(req, res) {
    var user = req.body;
    console.log("user original password " + user.password);
    user.password = bcrypt.hashSync(user.password);
    console.log("user final password " + user.password);
    userModel.createUser(user).then(function (user) {
      if (user) {
        req.login(user, function (err) {
          if (err) {
            res.status(400).send(err);
          } else {
            res.json(user);
          }
        });
      }
    });
  }

  function loggedin(req, res) {
    res.send(req.isAuthenticated() ? req.user : "0");
  }
};
