// inputs and button functions
// module.exports = function () {
  $("#submit").on("click", function (event) {
    event.preventDefault;
    valid = true;

    //form validation function
    if ($(".country").val() !== ""){
      valid = true;
    //   alert("Please enter search criteria.");
    // } else if(true) {
      //input values of the country
      var country = $(".country").val().trim();
      console.log("country", country);
      // $(".year").val().trim();
      //var country = $(this).data("country");
      var unRegion = $(this).data("unRegion");
      var year = $(this).data("year");
      var carbon = $(this).data("carbon");
      var perCapitaGDP = $(this).data("perCapitaGDP");
      var populations = $(this).data("populations");

      var countrySelect = {
        country: country,
        unRegion: unRegion,
        year: year,
        carbon: carbon,
        perCapitaGDP: perCapitaGDP,
        population: populations
      }
      console.log(countrySelect);
      $.ajax("/footprintstats/" + country,
        {
          type: "GET",
          data: countrySelect

        }.then(function (results) {
          console.log(countrySelect);
          console.log("its working", results);
        })
      );
    }
    //get request from the api and the data set
  });
// };
