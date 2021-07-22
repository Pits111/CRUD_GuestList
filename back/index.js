const express = require("express")
const app = express()
//const connection = require("./db/config")
const guestsRoute = require("./routes/guests-route");

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use("/guests", guestsRoute)

// app.get("/", (req, res) => res.send("Hello from /"))

// app.get("/guests", (req, res) => {
//     connection.query("SELECT * FROM guests", (err, results) => {
//         if (err) {
//             res.status(500).send("error retrieving from db")
//         } else {
//             res.json(results);
//         }
//     } )

// })

app.listen(PORT, () => console.log(`Server is running on ${PORT}`))

