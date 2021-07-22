require('dotenv').config();

const express = require("express")
const app = express()
const guestsRoute = require("./routes/guests-route");

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use("/guests", guestsRoute)

//app.get("/", (req, res) => res.send("Hello from /"))

app.listen(PORT, () => console.log(`Server is running on ${PORT}`))

