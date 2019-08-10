var db = require("../models");

// this file should just display each page route on webpage

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Footprint.findAll({}).then(function(footprints) {
      res.render("index", { footprints: footprints });
      console.log("db example: " + JSON.stringify(footprints));
    });
    // res.render("index");
  });

  // Load example page and pass in an example by id
  // app.get("/example/:id", function(req, res) {
  //   db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.render("example", {
  //       example: dbExample
  //     });
  //   });
  // });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
