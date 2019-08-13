$("#apiSubmit").on("click", function() {
  var apiUserInput = $(".api")
    .val()
    .trim();
  console.log(apiUserInput);
  var queryURL =
    "https://api.co2signal.com/v1/latest?countryCode=" + apiUserInput;

  var apiKey = "83c13d239527c902";

  $.ajax({
    url: queryURL,
    method: "GET",
    dataType: "jsonp",
    headers: {
      "auth-token": apiKey
    }
  }).then(function(response) {
    console.log(response);
  });
});
