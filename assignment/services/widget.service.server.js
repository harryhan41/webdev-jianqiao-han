var widgetModel = require("../model/widget/widget.model.server");

module.exports = function(app) {
  app.post("/api/page/:pageId/widget", createWidget);
  app.get("/api/page/:pageId/widget", findAllWidgetsForPage);
  app.get("/api/widget/:widgetId", findWidgetById);
  app.put("/api/widget/:widgetId", updateWidget);
  app.delete("/api/widget/:widgetId", deleteWidget);

  //var widgetModel = models.widgetModel;
  var multer = require("multer");
  var upload = multer({dest: __dirname + "/../../src/assets/uploads"});

  //UPLOAD
  app.post("/api/upload", upload.single("myFile"), uploadImage);

  //Recorder
  app.put("/api/page/:pid/widget", reorderWidgets);

  var widgets = [
    {_id: "1", widgetType: "Header", pageId: "123", size: "2", text: "GIZMODO"},
    {
      _id: "3",
      widgetType: "Image",
      pageId: "123",
      size: "2",
      text: "this is an image",
      width: "100%",
      url: "https://www.telegraph.co.uk/content/dam/gaming/2019/02/27/pokemon-sowrd-shield_trans_NvBQzQNjv4Bqt85Un3zb8EQZvOY5NOmHj8-O-K6X5VT_v7wRChyDYkI.jpg?imwidth=1400",
    },
    {_id: "4", widgetType: "HTML", pageId: "123", size: "2", text: "<p>This is a test for HTML</p>"},
    {
      _id: "2",
      widgetType: "YouTube",
      pageId: "123",
      size: "2",
      text: "text",
      width: "100%",
      url: "https://www.youtube.com/embed/Q97K6CDje3w",
    },
    {
      _id: "5",
      widgetType: "Text",
      pageId: "123",
      row: "2",
      text: "This a test for text",
      placeholder: "whatever",
      formatted: false,
    },
  ];

  function createWidget(req, res) {
    console.log("create widget");
    let pageId = req.params.pageId;
    let widget = req.body;
    widgetModel
      .createWidget(pageId, widget)
      .then(
        function(widget) {
          console.log("widget created!");
          res.json(widget);
        },
        function(error) {
          if (error) {
            console.log(error);
            res.statusCode(400).send(error);
          }
        },
      );
  }

  function findWidgetById(req, res) {

    let id = req.params.widgetId;

    console.log("find widget by id " + id);

    widgetModel.findWidgetById(id).exec(
      function(err, widget) {
        if (err) {
          return res.sendStatus(400).send(err);
        }
        return res.json(widget);
      },
    );
  }

  function findAllWidgetsForPage(req, res) {
    let id = req.params.pageId;
    widgetModel.findAllWidgetsForPage(id).exec(
      function(err, widget) {
        if (err) {
          return res.sendStatus(400).send(err);
        }
        return res.json(widget);
      },
    );
  }

  function updateWidget(req, res) {
    console.log("update widget");
    let widgetId = req.params.widgetId;
    let widget = req.body;
    widgetModel.updateWidget(widgetId, widget).exec(
      function(err, widget) {
        if (err) {
          return res.sendStatus(400).send(err);
        }
        return res.json(widget);
      },
    );
  }

  function deleteWidget(req, res) {
    console.log("delete widget");
    let widgetId = req.params.widgetId;
    widgetModel.deleteWidget(widgetId).exec(
      function(err, widget) {
        if (err) {
          return res.sendStatus(400).send(err);
        }
        return res.json(widget);
      },
    );
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
    widget.url = "uploads/" + filename;
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
  }

  function reorderWidgets(req, res) {

    var startIndex = parseInt(req.query.start);
    var endIndex = parseInt(req.query.end);

    array_swap(widgets, startIndex, endIndex);
    res.sendStatus(200);
  }
};
