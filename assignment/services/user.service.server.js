module.exports = function (app) {

  var users = [
    {_id: "123", username: "alice", password: "alice", firstName: "Alice", lastName: "Wonderland"},
    {_id: "234", username: "bob", password: "bob", firstName: "Bob", lastName: "Marley"},
    {_id: "345", username: "charly", password: "charly", firstName: "Charly", lastName: "Garcia"},
    {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose", lastName: "Annunzi"}
  ];

  app.post("/api/user", createUser);
  app.get("/api/user", findUserByCredentials);
  app.get("/api/user", findUserByUsername);
  app.get("/api/user/:userId", findUserById);
  app.put("/api/user/:userId", updateUser);
  app.delete("/api/user/:userId", deleteUser);

  function createUser(req, res) {
    // this.users.push(new User(user._id, user.username, user.password, user.firstName, user.lastName, user.email));
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

  function updateUser() {
  }

  function deleteUser() {
  }

};
