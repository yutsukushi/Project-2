var db = require("../models");
require("../config/connection.js");
// this file should just display each page route on webpage

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.render("index", { footprints: [] });
  });

  // Posts requested user info on the table
  app.post("/search", function(req, res) {
    db.Footprint.findOne({ where: { country: req.body.country } }).then(
      function(dbFootprint) {
        var carbonForCountry = dbFootprint.carbon;

        addCountryToDB(req.body.country, carbonForCountry);

        db.RecentSearch.findAll().then(function(tableRes) {
          res.render("index", {
            footprints: [dbFootprint.dataValues],
            RecentSearches: tableRes
          });
        });
      }
    );
  });
  // creates a post on RecentSearch database on the most recent search a user has made.
  function addCountryToDB(country, carbonForCountry) {
    db.RecentSearch.create({
      country: country,
      carbon: carbonForCountry
    });
  }
  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
