module.exports = function (app) {
  app.post("/api/user/:userId/website", createWebsite);
  app.get("/api/user/:userId/website", findAllWebsitesForUser);
  app.get("/api/website/:websiteId", findWebsiteById);
  // app.put("/api/website/:websiteId", updateWebsite);
  // app.delete("/api/website/:websiteId", deleteWebsite);

  var websites = [
    {_id: "123", name: "Facebook", developerId: "456", description: "Lorem"},
    {_id: "234", name: "Tweeter", developerId: "456", description: "Lorem"},
    {_id: "456", name: "Instagram", developerId: "456", description: "Lorem"},
    {_id: "890", name: "Google", developerId: "123", description: "Lorem"},
    {_id: "567", name: "Tic Tac Toe", developerId: "123", description: "Lorem"},
  ];

  function createWebsite(req, res) {
    console.log('create website');
    let website = req.body;
    website._id = Math.round(Math.random() * 1000).toString();
    website.developerId = req.param.userId;
    website.push(website);
    res.send(website);
  }

  function findAllWebsitesForUser(req, res) {
    console.log('find websites for user');
    let dev_id = req.param.userId;
    let list = [];
    for (var i in websites) {
      if (websites[i].developerId === dev_id) {
        list.push(websites[i]);
      }
    }
    res.send(list);
  }

  function findWebsiteById(req, res) {
    console.log('find website by id');
    let web_id = req.param.websiteId;
    for (var i in websites) {
      if (websites[i]._id === web_id) {
        res.send(websites[i]);
      }
    }
    res.send({});
  }
};
