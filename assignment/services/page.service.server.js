module.exports = function (app) {
  app.post("/api/website/:websiteId/page", createPage);
  app.get("/api/website/:websiteId/page", findAllPagesForWebsite);
  app.get("/api/page/:pageId", findPageById);
  // app.put("/api/page/:pageId", updatePage);
  // app.delete("/api/page/:pageId", deletePage);

  var pages = [
    {_id: '123', name: 'page123', websiteId: '123', description: 'test page 123'},
    {_id: '456', name: 'page423', websiteId: '123', description: 'test page 123'},
    {_id: '567', name: 'page321', websiteId: '23', description: 'test page 232'},
    {_id: '678', name: 'page109', websiteId: '13', description: 'test page 142'},
    {_id: '789', name: 'page444', websiteId: '12', description: 'test page 099'},
  ];

  function createPage(req, res) {
    console.log('create website');
    let page = req.body;
    page._id = Math.round(Math.random() * 1000).toString();
    page.websiteId = req.param.websiteId;
    pages.push(page);
    res.send(page);
  }

  function findAllPagesForWebsite(req, res) {
    console.log('find pages for website');
    let websiteId = req.param.websiteId;
    let list = [];
    for (var i in pages) {
      if (pages[i].websiteId === websiteId) {
        list.push(pages[i]);
      }
    }
    res.send(list);
  }

  function findPageById(req, res) {
    console.log('find website by id');
    let page_id = req.param._id;
    for (var i in pages) {
      if (pages[i]._id === page_id) {
        res.send(page[i]);
      }
    }
    res.send({});
  }
};
