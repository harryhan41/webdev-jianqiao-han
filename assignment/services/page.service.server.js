var pageModel = require("../model/page/page.model.server");

module.exports = function(app) {
  app.post("/api/website/:websiteId/page", createPage);
  app.get("/api/website/:websiteId/page", findAllPagesForWebsite);
  app.get("/api/page/:pageId", findPageById);
  app.put("/api/page/:pageId", updatePage);
  app.delete("/api/page/:pageId", deletePage);

  function createPage(req, res) {
    let page = req.body;
    let websiteId = req.params.websiteId;
    pageModel.createPage(websiteId, page).then(
      function (page) {
        console.log("page created");
        res.json(page);
      },
      function (error) {
        if (error) {
          console.log(error);
          res.statusCode(400).send(error);
        }
      },
    );
  }

  function findAllPagesForWebsite(req, res) {
    console.log("find pages for website");
    let websiteId = req.params.websiteId;
    pageModel.findAllPagesForWebsite(websiteId).exec(
      function (err, pages) {
        if (err) {
          return res.sendStatus(400).send(err);
        }
        return res.json(pages);
      },
    );
  }

  function findPageById(req, res) {
    console.log("find website by id");
    let page_id = req.params.pageId;
    pageModel.findPageById(page_id).exec(
      function (err, page) {
        if (err) {
          return res.sendStatus(400).send(err);
        }
        return res.json(page);
      },
    );
  }

  function updatePage(req, res) {
    console.log("update page");
    let page_id = req.params.pageId;
    let page = req.body;
    pageModel.updatePage(page_id, page).exec(
      function (err, page) {
        if (err) {
          return res.sendStatus(400).send(err);
        }
        return res.json(page);
      },
    );
  }

  function deletePage(req, res) {
    console.log("delete page");
    let page_id = req.params.pageId;
    pageModel.updatePage(page_id).exec(
      function (err, page) {
        if (err) {
          return res.sendStatus(400).send(err);
        }
        return res.json(page);
      },
    );
  }
};
