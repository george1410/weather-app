const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// console log that we are running
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

// get route
app.get('/api/daily', (req, res) => {
    res.send({express: 'YOU ARE CONNECTED TO EXPRESS'});
})