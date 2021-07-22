const express = require("express");
const router = express.Router();
const connection = require("../db/config");

router.get("/", (req, res) => {
  connection.query("SELECT * FROM guests", (err, results) => {
    if (err) {
      res.send("Error retrieving guests from the database");
    } else {
      res.send(results);
    }
  });
});

router.post("/", (req, res) => {
  const { name, age } = req.body;
  connection.query(
    "INSERT INTO guest (name, age) VALUES (?, ?)",
    [name, age],
    (err, results) => {
      if (err) {
        res.send("Error adding the new guest to your list");
      } else {
        res.json(req.body);
      }
    }
  );
});

router.put("/:id", (req, res) => {
  connection.query(
    "UPDATE guest SET name=? WHERE id=?",
    [req.body.name, req.params.id],
    (err, results) => {
      if (err) {
        res.send("Error trying to edit the guest");
      } else {
        res.send("Guest was edited");
      }
    }
  );
});

router.delete("/:id", (req, res) => {
  connection.query(
    "DELETE FROM guest WHERE id=?",
    [req.params.id],
    (err, results) => {
      if (err) {
        res.send("Error deleting guest from the list");
      } else {
        res.send("Guest deleted correctly from the list");
      }
    }
  );
});

module.exports = router;