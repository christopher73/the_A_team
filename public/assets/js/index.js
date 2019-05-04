$(document).ready(function(e) {
  $("#btn-l").on("click", function() {
    $("#id01").show();
  });
  $(".pie").hide();
  $("#pie").hide();

  $("#btn-s").on("click", function() {
    $("#id02").show();
  });
  $("#btn-m").on("click", function() {
    $("#id02").show();
  });

  //==================
  $("#login-btn").on("click", function(e) {
    e.preventDefault();

    var new_user = {
      email: $("#inputEmail").val(),

      password: $("#inputPassword").val()
    };
    console.log(new_user);
    $.ajax({
      type: "POST", //GET, POST, PUT
      url: "/user_auth", //the url to call
      data: new_user, //Data sent to server
      success: function(response) {
        console.log("Response was " + response);
      }
    }).then(function() {
      $("#id01").hide();
      $(".upb").hide();
      //   console.log(localStorage.getItem("token"));
      $.ajax({
        type: "GET", //GET, POST, PUT
        url: "/my_info", //the url to call
        headers: {
          "X-Auth-Token": localStorage.getItem("token")
        },
        success: function(resultData) {
          console.log(resultData);
          $("#mainpage").hide();
          $(".pie").show();
          var ctx1 = document.getElementById("chart-0").getContext("2d");
          var ctx = document.getElementById("chart-1").getContext("2d");
          var myChart1 = new Chart(ctx1, {
            type: "pie",
            data: {
              labels: [
                "monthly_salary",
                "total_expenses",
                "housing",
                "utilities",
                "food",
                "debts"
              ],
              datasets: [
                {
                  label: "# your finances",
                  data: [
                    resultData[0].monthly_salary,
                    resultData[0].total_expenses,
                    resultData[0].housing,
                    resultData[0].utilities,
                    resultData[0].food,
                    resultData[0].debts
                  ],
                  backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                    "rgba(255, 159, 64, 0.2)"
                  ],
                  borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(255, 159, 64, 1)"
                  ],
                  borderWidth: 1
                }
              ]
            },
            options: {
              scales: {
                yAxes: [
                  {
                    ticks: {
                      max: 10000,
                      beginAtZero: true
                    }
                  }
                ],
                xAxes: [
                  {
                    ticks: {
                      beginAtZero: false
                    }
                  }
                ]
              }
            }
          });
          var myChart = new Chart(ctx, {
            type: "line",
            data: {
              labels: ["housing", "utilities", "food", "debts"],
              datasets: [
                {
                  label: "# your finances",
                  data: [
                    resultData[0].housing,
                    resultData[0].utilities,
                    resultData[0].food,
                    resultData[0].debts
                  ],
                  backgroundColor: [
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                    "rgba(255, 159, 64, 0.2)"
                  ],
                  borderColor: [
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(255, 159, 64, 1)"
                  ],
                  borderWidth: 1
                }
              ]
            },
            options: {
              scales: {
                yAxes: [
                  {
                    ticks: {
                      max: 1000,
                      beginAtZero: true
                    }
                  }
                ],
                xAxes: [
                  {
                    ticks: {
                      beginAtZero: false
                    }
                  }
                ]
              }
            }
          });
        }
      });
    });
  });

  //==================

  $("#signup-btn").on("click", function(e) {
    e.preventDefault();

    var new_user = {
      name: $("#user-name").val(),

      email: $("#user-email").val(),

      password: $("#input-password").val()
    };
    console.log(new_user);
    $.ajax({
      type: "POST", //GET, POST, PUT
      url: "/users", //the url to call
      data: new_user, //Data sent to server
      success: function(resultData) {
        // console.log(resultData.token);
        localStorage.setItem("token", resultData.token);
      }
    }).then(function() {
      $("#id02").hide();
      $(".upb").hide();

      //   console.log(localStorage.getItem("token"));
      $.ajax({
        type: "GET", //GET, POST, PUT
        url: "/my_info", //the url to call
        headers: {
          "X-Auth-Token": localStorage.getItem("token")
        },
        success: function(resultData) {
          console.log(resultData);
          $("#mainpage").hide();
          $("#form1").show();
          var ctx = document.getElementById("chart-0").getContext("2d");
          var myChart = new Chart(ctx, {
            type: "line",
            data: {
              labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
              datasets: [
                {
                  label: "# of Votes",
                  data: [12, 19, 3, 5, 2, 3],
                  backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                    "rgba(255, 159, 64, 0.2)"
                  ],
                  borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(255, 159, 64, 1)"
                  ],
                  borderWidth: 1
                }
              ]
            },
            options: {
              scales: {
                yAxes: [
                  {
                    ticks: {
                      beginAtZero: true
                    }
                  }
                ]
              }
            }
          });
        }
      });
    });
  });
});
