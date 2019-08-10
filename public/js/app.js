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

      $.ajax("/footprintstats/" + country,
        {
          type: "GET"
        }).then(function (results) {
          
          console.log("its working", results);
        })
      ;
    }
    //get request from the api and the data set
  });
// };
