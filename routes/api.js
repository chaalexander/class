const express = require("express");

const db = require("../models/index.js");

const app = express();

app.post("/newexpense", (req, res) => {
  db.User.create({ name: "Expenses" })
    .then((dbUser) => {
      console.log(dbUser);
    })
    .catch(({ message }) => {
      console.log(message);
    });
})


app.get("/dueDate", (req, res) => {
  db.Expense.find({})
    .then(dbExpense => {
      res.json(dbExpense);
    })
    .catch(err => {
      res.json(err);
    });
});

app.get("/user", (req, res) => {
  db.User.find({})
    .then(dbUser => {
      res.json(dbUser);
    })
    .catch(err => {
      res.json(err);
    });
});

app.post("/amount", ({ body }, res) => {
  db.Expense.create(body)
    .then(({ _id }) => db.User.findOneAndUpdate({}, { $push: { notes: _id } }, { new: true }))
    .then(dbUser => {
      res.json(dbUser);
    })
    .catch(err => {
      res.json(err);
    });
});

app.get("/populateduser", (req, res) => {
  db.User.find({})
    .populate("expenses")
    .then(dbUser => {
      res.json(dbUser);
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = app;