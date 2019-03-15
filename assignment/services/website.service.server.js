module.exports = function (app) {
  app.post("/api/user/:userId/website", createWebsite);
  app.get("/api/user/:userId/website", findAllWebsitesForUser);
  app.get("/api/website/:websiteId", findWebsiteById);
  app.put("/api/website/:websiteId", updateWebsite);
  app.delete("/api/website/:websiteId", deleteWebsite);

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
    website.developerId = req.params.userId;
    websites.push(website);
    res.send(website);
  }

  function findAllWebsitesForUser(req, res) {
    console.log('find websites for user');

    let dev_id = req.params.userId;
    console.log('developer id is ' + dev_id);
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

    let web_id = req.params.websiteId;

    console.log('website id is ' + web_id);
    for (var i in websites) {
      if (websites[i]._id === web_id) {
        res.send(websites[i]);
      }
    }
    // res.send({});
  }

  function updateWebsite(req, res) {
    console.log('update website');

    console.log("req params are " + req.params.toString());

    let web_id = req.params.websiteId;
    let website = req.body;
    for (var i in websites) {
      if (websites[i]._id === web_id) {
        websites[i] = website;
      }
    }

    res.send(website);
  }

  function deleteWebsite(req, res) {
    console.log('delete website');
    let web_id = req.params.websiteId;
    let index;
    for (var i in websites) {
      if (websites[i]._id === web_id) {
        index = i;
        break;
      }
    }
    let website = websites[index];
    websites.splice(index, 1);
    res.send(website);
  }
};
