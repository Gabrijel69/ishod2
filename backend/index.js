const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

// Parser za JSON podatke
app.use(bodyParser.json());
// CORS
app.use(cors({origin: '*'}))


app.post("/api/ime", (req, res) => {
    const data = req.body;
    const results="Ispiši ime:"+data.ime;
    console.log(results);
    res.send("Ime je:"+data.ime);
});

app.listen(port, function () {
    console.log('Node app is running on port '+ port);
});

