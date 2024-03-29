require("dotenv").config()
const serverless = require("serverless-http");
const express = require("express");
const axios = require("axios")
const app = express();

app.use(express.json())

app.post("/", async (req, res) => {

  try {
    const apiKey = process.env.OPENWEATHER_KEY

    // console.log(req.body)
    // const { city } = req.body

    console.log(req.body.argument)
    const city = req.body.argument.parsed[0].location
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

    console.log("working...")

    const response = await axios.get(url)

    const weatherData = {
      city: response.data.name,
      description: response.data.weather[0].description,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
    };
    console.log(weatherData)

    return res.send(JSON.stringify({ response: `The weather information at ${weatherData.city} is ${weatherData.temperature} degrees temperature and ${weatherData.humidity} degrees humidity` }))

  } catch (err) {
    console.log(err)
    return res.status(500).send({
      message: err.message
    })
  }


});

module.exports.handler = serverless(app);
