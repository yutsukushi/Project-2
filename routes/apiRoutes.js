var db = require("../models/footprint");

module.exports = function (app) {
  //Get all examples
  app.get("/footprintstats/", function (req, res) {
    db.Footprint.findAll({}).then(function (dbRes) {
      res.render("index", { footprint: res });
      console.log("dbres:" + dbRes);
    });
  });

  app.get("/footprintstats/:country", function (req, res) {
    if (req.params.country) {
      Country.findOne({
        where: {
          routeName: req.params.country
        }
      })
    }
    // db.Footprint.findOne({ where: { country: req.params.country } }).then(function (footprints) {
    //   res.render("example", { footprints: footprints });
    //   console.log("db example: " + JSON.stringify(footprints));
    // });
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
