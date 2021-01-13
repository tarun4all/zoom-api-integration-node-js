const axios = require("axios");
const ZOOM_BASE_URL = "https://api.zoom.us/v2/";

require("dotenv").config();

function request(options) {
  const headers = {
    "Content-Type": "application/json",
    "User-Agent": "Zoom-api-Jwt-Request",
    Authorization: `Bearer ${process.env.ZOOM_TOKEN}`,
  };
  const client = axios.create({
    baseURL: ZOOM_BASE_URL,
    headers,
  });

  const onSuccess = function (response) {
    console.debug("Request Successful!", response.data);
    return response.data;
  };

  const onError = function (error) {
    if (error.response) {
      console.debug("Status:", error.response.status);
      console.debug("Data:", error.response.data);
      console.debug("Headers:", error.response.headers);
    } else {
      console.debug("Error Message:", error.message);
    }

    return Promise.reject(error);
  };

  return client(options).then(onSuccess).catch(onError);
}

const getRequest = (url) => {
  return request({
    url,
    method: "GET",
    crossDomain: true,
  });
};

const postRequest = (url, body) => {
  return request({
    url,
    method: "POST",
    crossDomain: true,
    data: body,
  });
};

postRequest("users/userID/meetings", {
  topic: "first test meeting",
  type: "2",
  start_time: "2021-01-13T18:00:00Z",
  duration: "10",
  password: "test12345",
  agenda: "appointment for consultation",
});

getRequest("users/userID/meetings");
