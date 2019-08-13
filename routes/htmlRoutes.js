var db = require("../models");

// this file should just display each page route on webpage

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.render("index", { footprints: [] });
  });

  // Load example page and pass in an example by id
  app.get("/:country", function(req, res) {
    db.Footprint.findOne({ where: { country: req.params.country } }).then(
      function(dbFootprint) {
        res.render("index", {
          footprints: dbFootprint
        });
      }
    );
  });

  app.post("/", function(req, res) {
    console.log(req.body.country);
    db.Footprint.findOne({ where: { country: req.body.country } }).then(
      function(dbFootprint) {
        console.log(dbFootprint);
        res.render("index", {
          footprints: [dbFootprint.dataValues]
        });
      }
    );
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
