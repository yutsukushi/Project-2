// inputs and button functions
module.exports = function() {
  $("#submit").on("click", function(event) {
    event.preventDefault;

    valid = true;

    //form validation function
    if ($(".country").val() === "" || $(".year").val() === "") {
      valid = false;
      alert("Please enter search criteria.");
    } else {
      //input values of the date range and country
      $(".country")
        .val()
        .trim();
      $(".year")
        .val()
        .trim();
    }

    //get request from the api and the data set
    $.get(
      "/footprintstats/",
      function(res) {
        console.log(res);

        $(".country").prepend(res.country);
        $(".year").prepend(res.year);
        $(".carbon").prepend(res.carbon);
      }.then(function(results) {
        console.log("its working", results);
      })
    );
  });
};
