module.exports = function (app) {
  app.post("/api/page/:pageId/widget", createWidget);
  app.get("/api/page/:pageId/widget", findAllWidgetsForPage);
  app.get("/api/widget/:widgetId", findWidgetById);
  app.put("/api/widget/:widgetId", updateWidget);
  app.delete("/api/widget/:widgetId", deleteWidget);

  //var widgetModel = models.widgetModel;
  var multer = require('multer');
  var upload = multer({dest: __dirname + '/../../src/assets/uploads'});

  //UPLOAD
  app.post("/api/upload", upload.single('myFile'), uploadImage);

  var widgets = [
    {_id: '1', widgetType: 'Header', pageId: '123', size: '2', text: 'GIZMODO'},
    {
      _id: '3',
      widgetType: 'Image',
      pageId: '123',
      size: '2',
      text: 'this is an image',
      width: '100%',
      url: 'https://www.telegraph.co.uk/content/dam/gaming/2019/02/27/pokemon-sowrd-shield_trans_NvBQzQNjv4Bqt85Un3zb8EQZvOY5NOmHj8-O-K6X5VT_v7wRChyDYkI.jpg?imwidth=1400'
    },
    {_id: '4', widgetType: 'HTML', pageId: '123', size: '2', text: '<p>This is a test for HTML</p>'},
    {
      _id: '2',
      widgetType: 'YouTube',
      pageId: '123',
      size: '2',
      text: 'text',
      width: '100%',
      url: 'https://www.youtube.com/embed/Q97K6CDje3w'
    },
    {
      _id: '5',
      widgetType: 'Text',
      pageId: '123',
      row: '2',
      text: 'This a test for text',
      placeholder: 'whatever',
      formatted: false,
    },
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

  function uploadImage(req, res) {
    var userId = req.body.userId;
    var websiteId = req.body.websiteId;
    var pageId = req.body.pageId;


    var widgetId = req.body.widgetId;
    var width = req.body.width;
    var myFile = req.file;

    if (myFile == null) {
      return;
    }


    var originalname = myFile.originalname; // file name on user's computer
    var filename = myFile.filename;     // new file name in upload folder
    var path = myFile.path;         // full path of uploaded file
    var destination = myFile.destination;  // folder where file is saved to
    var size = myFile.size;
    var mimetype = myFile.mimetype;


    var widget = {url: "assets/uploads/" + filename};

    for (var i = 0; i < widgets.length; i++) {
      if (widgets[i]._id === widgetId) {
        widget = widgets[i];
      }
    }
    widget.url = 'uploads/' + filename;
  }

  function array_swap(arr, old_index, new_index) {
    while (old_index < 0) {
      old_index += arr.length;
    }
    while (new_index < 0) {
      new_index += arr.length;
    }
    if (new_index >= arr.length) {
      var k = new_index - arr.length + 1;
      while (k--) {
        arr.push(undefined);
      }
    }
    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
  };

  function reorderWidgets(req, res) {

    var startIndex = parseInt(req.query["start"]);
    var endIndex = parseInt(req.query["end"]);

    array_swap(widgets, startIndex, endIndex);
    res.sendStatus(200);
  }
};
