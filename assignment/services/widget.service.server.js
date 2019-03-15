module.exports = function (app) {
  app.post("/api/page/:pageId/widget", createWidget);
  app.get("/api/page/:pageId/widget", findAllWidgetsForPage);
  app.get("/api/widget/:widgetId", findWidgetById);
  app.put("/api/widget/:widgetId", updateWidget);
  app.delete("/api/widget/:widgetId", deleteWidget);

  var widgets = [
    {_id: '1', widgetType: 'Header', pageId: '123', size: '2', text: 'GIZMODO'},
    // {
    //   _id: '3',
    //   widgetType: 'Image',
    //   pageId: '321',
    //   size: '2',
    //   text: 'text',
    //   width: '100%',
    //   url: 'http://lorempixel.com/400/200/'
    // },
    // {_id: '2', widgetType: 'HTML', pageId: '123', size: '2', text: '<p>blalbla</p>'},
    {
      _id: '2',
      widgetType: 'YouTube',
      pageId: '123',
      size: '2',
      text: 'text',
      width: '100%',
      url: 'https://www.youtube.com/embed/Q97K6CDje3w'
    }
  ];

  function createWidget(req, res) {
    console.log("create widget");
    let pageId = req.params.pageId;
    let widget = req.body;
    widget._id = Math.round(Math.random() * 1000).toString();
    widget.pageId = pageId;
    widgets.push(widget);
    res.send(widget);
  }


  function findWidgetById(req, res) {

    let id = req.params.widgetId;

    console.log("find widget by id " + id);

    for (var i in widgets) {
      if (widgets[i]._id === id) {
        res.send(widgets[i]);
      }
    }
    // res.send({});
  }

  function findAllWidgetsForPage(req, res) {
    let id = req.params.pageId;
    let list = [];
    for (var i in widgets) {
      if (widgets[i].pageId === id) {
        list.push(widgets[i]);
      }
    }
    res.send(list);
  }

  function updateWidget(req, res) {
    console.log("update widget");
    let widgetId = req.params.widgetId;
    let index;
    for (let i = 0; i < widgets.length; i++) {
      if (widgets[i]._id === widgetId) {
        index = i;
      }
    }
    let widget = req.body;
    widgets[index] = widget;
    res.send(widget);
  }

  function deleteWidget(req, res) {
    console.log("delete widget");
    let widgetId = req.params.widgetId;
    let index;
    for (let i = 0; i < widgets.length; i++) {
      if (widgets[i]._id === widgetId) {
        index = i;
      }
    }
    let widget = widgets[index];
    widgets.splice(index, 1);
    res.send(widget);
  }
};
