const express = require("express");
const { EnkaClient } = require("enka-network-api");
const app = express();
const enka = new EnkaClient();

app.get("/api", async (req, res) => {
    try {
        const data = await enka.fetchUser(825436941);
        console.log("Data: ", data._data);
        return res.status(200).json(data._data);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: "server shat itself" });
    }
});

app.listen(5000, () => {
    console.log("Server started on port: 5000");
});
