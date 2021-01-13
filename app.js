const ZOOM_BASE_URL = "https://api.zoom.us/v2/";
require("dotenv").config();
const app = require("express")();

app.get("/createMeeting", (req, res) => {
  var options = {
    uri: `${ZOOM_BASE_URL}/users/${process.env.USER_ID}/meetings`,
    body: {
      topic: "first test meeting",
      type: "2",
      start_time: "2021-01-13T18:00:00Z",
      duration: "10",
      password: "test12345",
      agenda: "appointment for consultation",
    },
    auth: {
      bearer: process.env.ZOOM_TOKEN,
    },
    headers: {
      "User-Agent": "Zoom-api-Jwt-Request",
      "content-type": "application/json",
    },
    json: true, //Parse the JSON string in the response
  };

  //Use request-promise module's .then() method to make request calls.
  rp(options)
    .then(function (response) {
      res.status(200).send(response);
    })
    .catch(function (err) {
      // API call failed...
      res.status(501).send("API call failed, reason ", err);
    });
});
