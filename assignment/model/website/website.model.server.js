var userModel = require("../user/user.model.server");
var mongoose = require("mongoose");
var websiteSchema = require("./website.schema.server");

var websiteModel = mongoose.model("Website", websiteSchema);

websiteModel.createWebsite = createWebsite;
websiteModel.findAllWebsitesForUser = findAllWebsitesForUser;
websiteModel.findWebsiteById = findWebsiteById;
websiteModel.updateWebsite = updateWebsite;
websiteModel.deleteWebsite = deleteWebsite;

module.exports = websiteModel;

//helper function
function createWebsite(userId, website) {
  website.userId = userId;
  return websiteModel.create(website).then(
    function (newWebsite) {
      userModel.findUserById(userId)
        .then(
          function (user) {
            user.websites.push(newWebsite);
            return user.save();
          },
        );
      return website;
    },
  );
}

function findAllWebsitesForUser(userId) {
  return websiteModel.find({"developerId": userId});
}

function findWebsiteById(websiteId) {
  return websiteModel.findOne({_id: websiteId});
}

function updateWebsite(websiteId, website) {
  return websiteModel.findOneAndUpdate({_id: websiteId}, website);
}

function deleteWebsite(websiteId) {
  return websiteModel.findOneAndDelete({_id: websiteId});
}
