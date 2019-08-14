var db = require("../models");

// this file should just display each page route on webpage

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.render("index", { footprints: [] });
  });

  // Load example page and pass in an example by id
  // app.get("/:country", function(req, res) {
  //   db.Footprint.findOne({ where: { country: req.params.country } }).then(
  //     function(dbFootprint) {
  //       res.render("index", {
  //         footprints: dbFootprint
  //       });
  //     }
  //   );
  // });

  // Posts requested user info on the table
  app.post("/search", function(req, res) {
    // console.log(req.body.country);
    db.Footprint.findOne({ where: { country: req.body.country } }).then(
      function(dbFootprint) {
        // console.log(dbFootprint.carbon);
        var carbonForCountry = dbFootprint.carbon;
      
        console.log(req.body.country, carbonForCountry);

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
    // app.post("/api/recentsearch", function(req, res) {
    db.RecentSearch.create({
      country: country,
      carbon: carbonForCountry
    }).then(function(dbSearchInfo) {
      console.log(dbSearchInfo);
    });
    // })
  }

  // gets the data that is available on RecentSearch DB
  // app.get("/recentSearches", function(req, res) {
  //   db.RecentSearch.findAll().then(function(tableRes) {
  //     res.render("index", {
  //       RecentSearches: [tableRes.dataValues]
  //     });
  //   });
  // });

  // API code
  // app.get("/api/electricFP", function(req, res) {
  //   console.log(res);
  // $.ajax({
  //   queryUrl: "https://api.co2signal.com/v1/latest?countryCode=FR",
  //   type: "GET",
  //   dataType: "json",
  //   headers: {
  //     "auth-token": "83c13d239527c902"
  //   }
  // }).then(function(response) {
  //   console.log(response);
  // });
  //  var queryURL =
  // axios.get(queryURL, function(data){
  // var requeredInfo = {
  //   averageFootPrint : data.data.avg,
  //   maxFootPrint: data.data.max,
  //   dbInfo: dataFromDB.country
  // }
  // res.render("index", {requeredInfo});
  // });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
