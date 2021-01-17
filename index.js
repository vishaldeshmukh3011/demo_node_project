const express = require("express");
global.app = express();

// const bodyParser = require("body-parser");
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

app.get("/api/test", (req, res) => {
    res.send("api test route");
});

app.listen(4001, () => {
    console.log("running on 4001")
});