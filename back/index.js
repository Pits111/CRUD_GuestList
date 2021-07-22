require('dotenv').config();

const express = require("express")
const app = express()
const guestsRoute = require("./routes/guests-route");

app.use(express.json());
app.use("/guests", guestsRoute)

app.listen(5000, () => console.log("Server is running on port 5000"))

