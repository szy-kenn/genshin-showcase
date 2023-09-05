const express = require("express");
const app = express();
const cors = require("cors");
const axios = require("axios");

app.use(cors());

// enable cors
const port = process.env.port || 5000;

// basic string route to prevent Glitch error
app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/api", (req, res) => {
    const backendUrl = "https://enka.network/api/uid/618285856/";
    axios.get(backendUrl).then((response) => res.send(response.data));
});

app.listen(port, () => {
    console.log(`Server is listening at port ${port}`);
});
