module.exports = function (app) {

  var users = [
    {_id: "1", username: "alice", password: "alice", firstName: "Alice", lastName: "Wonderland"},
    {_id: "2", username: "bob", password: "bob", firstName: "Bob", lastName: "Marley"},
    {_id: "3", username: "charly", password: "charly", firstName: "Charly", lastName: "Garcia"},
    {_id: "4", username: "jannunzi", password: "jannunzi", firstName: "Jose", lastName: "Annunzi"}
  ];

  app.post("/api/user", createUser);
  app.get("/api/user", findUserByCredentials);
  app.get("/api/user", findUserByUsername);
  app.get("/api/user/:userId", findUserById);
  app.put("/api/user/:userId", updateUser);
  app.delete("/api/user/:userId", deleteUser);

  function createUser(req, res) {
    console.log("create user");
    let user = req.body;
    user._id = Math.round(Math.random() * 1000).toString();
    users.push(user);
    res.send(user);
  }

  function findUserById(req, res) {

    console.log("hit find user by id...");

    var id = req.params.userId;

    for (var i in users) {
      if (users[i]._id === id) {
        res.send(users[i]);
        return;
      }
    }
    res.send({});
  }

  function findUserByCredentials(req, res) {

    var username = req.query['username'];
    var password = req.query['password'];

    for (var i in users) {
      if (users[i].username === username && users[i].password === password) {
        res.send(users[i]);
        return;
      }
    }
    res.send({});
  }

  function findUserByUsername(req, res) {
    console.log("hit find user by name...");

    var username = req.query['username'];

    for (var i in users) {
      if (users[i].username === username) {
        res.send(users[i]);
        return;
      }
    }
    res.send({});
  }

  function updateUser(req, res) {
    console.log("update user");

    let userId = req.params._id;
    let index;
    for (let i = 0; i < users.length; i++) {
      if (users[i]._id === userId) {
        index = i;
      }
    }
    let user = req.body;
    users[index] = user;
    res.send(user);
  }

  function deleteUser(req, res) {
    console.log("delete user");

    let userId = req.params.userId;
    let index;
    for (let i = 0; i < users.length; i++) {
      if (users[i]._id === userId) {
        index = i;
      }
    }
    let user = users[index];
    users.splice(i, 1);
    res.send(user);
  }
};
