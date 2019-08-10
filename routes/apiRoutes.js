var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/footprintstats/", function(req, res) {
    db.Footprint.findAll({}).then(function(dbRes) {
      res.render("index", { footprint: res });
      console.log("dbres:" + dbRes);
    });
  });

  // Create a new example
  // app.post("/footprintstats/", function(req, res) {
  //   db.Footprint.create(req.body).then(function(dbExample) {
  //     res.json(dbExample);
  //   });
  // });

  // Delete an example by id
  // app.delete("/api/examples/:id", function(req, res) {
  //   db.Footprint.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.json(dbExample);
  //   });
  // });
};
