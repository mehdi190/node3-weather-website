const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=120e4bf8f01733c3a0e77e9b6e072c15&query=" +
    latitude +
    "," +
    longitude;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather sservice!", undefined);
    } else if (body.error) {
      callback("Unable to find location of weather service!", undefined);
    } else {
      callback(
        undefined,
        `${body.current.weather_descriptions[0]}. it is currently ${body.current.temperature} degrees out. it feels like ${body.current.feelslike} degrees out.The humidity is ${body.current.humidity} %.`
      );
    }
  });
};

module.exports = forecast;
