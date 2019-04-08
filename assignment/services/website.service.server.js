var websiteModel = require("../model/website/website.model.server");

module.exports = function(app) {
  app.post("/api/user/:userId/website", createWebsite);
  app.get("/api/user/:userId/website", findAllWebsitesForUser);
  app.get("/api/website/:websiteId", findWebsiteById);
  app.put("/api/website/:websiteId", updateWebsite);
  app.delete("/api/website/:websiteId", deleteWebsite);

  function createWebsite(req, res) {
    console.log("create website");

    let userId = req.params.userId;
    let website = req.body;
    websiteModel
      .createWebsite(userId, website)
      .then(
        function(website) {
          console.log("website created!");
          res.json(website);
        },
        function(error) {
          if (error) {
            console.log(error);
            res.statusCode(400).send(error);
          }
        },
      );
  }

  function findAllWebsitesForUser(req, res) {
    console.log("find websites for user");

    let dev_id = req.params.userId;
    console.log("developer id is " + dev_id);
    websiteModel.findAllWebsitesForUser(dev_id).exec(
      function(err, websites) {
        if (err) {
          return res.sendStatus(400).send(err);
        }
        return res.json(websites);
      },
    );
  }

  function findWebsiteById(req, res) {
    console.log("find website by id");

    let web_id = req.params.websiteId;

    console.log("website id is " + web_id);
    websiteModel.findWebsiteById(web_id).exec(
      function(err, website) {
        if (err) {
          return res.sendStatus(400).send(err);
        }
        return res.json(website);
      },
    );
  }

  function updateWebsite(req, res) {
    console.log("update website");

    let web_id = req.params.websiteId;
    let website = req.body;
    websiteModel.updateWebsite(web_id, website).exec(
      function(err, website) {
        if (err) {
          return res.sendStatus(400).send(err);
        }
        return res.json(website);
      },
    );
  }

  function deleteWebsite(req, res) {
    console.log("delete website");
    let web_id = req.params.websiteId;
    websiteModel.deleteWebsite(web_id).exec(
      function(err, website) {
        if (err) {
          return res.sendStatus(400).send(err);
        }
        return res.json(website);
      },
    );
  }
};
