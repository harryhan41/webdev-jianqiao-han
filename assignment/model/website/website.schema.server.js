var mongoose = require("mongoose");
var pageSchema = require("../page/page.schema.server");

var websiteSchema = new mongoose.Schema({
  developerId: {type: mongoose.Schema.ObjectId, ref: "userModel"},
  name: String,
  description: String,
  pages: [pageSchema],
  dateCreate: {type: Date, default: Date.now()},
}, {collection: "Websites"});

module.exports = websiteSchema;
