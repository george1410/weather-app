const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const fetch = require('node-fetch')

// console log that we are running
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

// get route
app.get('/api/daily', (req, res) => {
  let apiKey = '5c20581741eb67dad9ec2cd48f4cee5b';
  let lat = '51.4462';
  let long = '-0.2169';
  let url = `https://api.darksky.net/forecast/${apiKey}/${lat},${long}?exclude=currently,minutely,hourly,alerts&units=uk2`;
  fetch(url)
    .then (response => response.json())
    .then (data => {
      data.daily.data = data.daily.data.slice(0,7);
      res.json(data);
    })
    .catch ((e) => {
      console.log(e);
    })
})