const express = require("express");
const { LHOST, LPORT } = require("../config/config.json");
const Router = require("./routes/Router.js");
const app = express();
const cors = require("cors");

//middlewares
app.use(express.json());
app.use(cors());
app.use("/api/", Router);

app.listen(LPORT, LHOST, () => console.log("Listening on port " + LPORT));
