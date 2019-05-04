var axios = require("axios");

app.get("/stocks/:id", function(req, res) {
  var ticker = req.body;

  var getStocks = function(ticker) {
    var queryURL =
      "https://api.iextrading.com/1.0/stock/" + ticker + "/chart/ytd";
    axios.get(queryURL).then(function(response) {
      var jsonData = response.data;

      for (var i = 0; i < jsonData.length; i++) {
        var stock = jsonData[i];

        console.log(stock);
      }
    });
  };
});
