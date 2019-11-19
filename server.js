const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const fetch = require('node-fetch');

const weatherApiKey = '9ef0b79ec80be3a0c89aa8c1be09e5cc';
const locationApiKey = 'c9a95164f1ba471cae4b3ff047009bc9';

// console log that we are running
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

// get routes
app.get('/api/weather/daily', (req, res) => {
  let url = `https://api.darksky.net/forecast/${weatherApiKey}/${req.query.lat},${req.query.long}?exclude=currently,minutely,hourly,alerts&units=uk2`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      res.json(data);
    })
    .catch(e => {
      console.log(e);
    });
});

app.get('/api/weather/hourly', (req, res) => {
  let url = `https://api.darksky.net/forecast/${weatherApiKey}/${req.query.lat},${req.query.long},${req.query.time}?exclude=currently,minutely,daily,alerts&units=uk2`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      res.json(data);
    })
    .catch(e => {
      console.log(e);
    });
});

app.get('/api/location', (req, res) => {
  let url = `https://api.opencagedata.com/geocode/v1/json?q=${req.query.q}&key=${locationApiKey}&no_annotations=1`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      res.json(data);
    })
    .catch(e => {
      console.log(e);
    });
});
