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

app.get("/api/:uid", (req, res) => {
    const backendUrl = `https://enka.network/api/uid/${req.params.uid}/`;
    axios
        .get(backendUrl)
        .then((response) => {
            res.json(response.data);
        })
        .catch((error) => {
            if (error.response) {
                res.send(error.response.status);
            } else {
                res.send(error.request);
            }
        });
});

app.listen(port, () => {
    console.log(`Server is listening at port ${port}`);
});
