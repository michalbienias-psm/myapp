const express = require("express");
const app = express();

// Use the port provided by Cloud Run
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello from Cloud Run!");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
