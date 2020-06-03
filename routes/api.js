

const express = require('express');


const db = require('../models/index.js');

const app = express();

app.post('/expenses', ({ body }, res) => {
  const newExpense = new Expense(body);

  db.Expense.create(newExpense)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});


app.get('/expenses', (req, res) => {
  db.Expense.find({}).then(dbExpenses => {
    res.json(dbExpenses);
  }).catch(err => {
    res.json(err);
  });

});

app.delete('/expenses/:id', (req, res) => {
  db.Expense.findByIdAndDelete(req.params.id, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});

app.put('/expenses/:id', (req, res) => {
  db.Expense.findByIdAndUpdate(
    req.params.id,
    { paid: req.body.paid },
    { new: true },
    (err, data) => {
      if (err) {
        res.send(err);
      } else {
        res.send(data);
      }
    }
  );
});

// app.post("/amount", ({ body }, res) => {
//   db.Expense.create(body)
//     .then(({ _id }) => db.User.findOneAndUpdate({}, { $push: { expense: _id } }, { new: true }))
//     .then(dbUser => {
//       res.json(dbUser);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

// app.get("/populateduser", (req, res) => {
//   db.User.find({})
//     .populate("expenses")
//     .then(dbUser => {
//       res.json(dbUser);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

// app.delete("/expenses/:id", (req, res) => {
//   db.Expense.delete()
// })

// app.post("/amount", ({ body }, res) => {
//   db.Expense.create(body)
//     .then(({ _id }) => db.User.findOneAndUpdate({}, { $push: { expense: _id } }, { new: true }))
//     .then(dbUser => {
//       res.json(dbUser);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

// app.get("/populateduser", (req, res) => {
//   db.User.find({})
//     .populate("expenses")
//     .then(dbUser => {
//       res.json(dbUser);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

module.exports = app;
