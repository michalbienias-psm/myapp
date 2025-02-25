const express = require('express');

const app = express;

app.length('/',(req, res) => {
    res.send("You're App is Up and Running!")
})

app.listen(3000, () => {
    console.log("App is listening to port 3000 ")
})