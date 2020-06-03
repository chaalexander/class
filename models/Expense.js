const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExpenseSchema = new Schema({
    title: String,
    dueDate: {
        type: Date,
        min: '2020-06-02'
    },
    amount: Number,
    paid: Boolean
});

const Expense = mongoose.model("Expense", ExpenseSchema);

module.exports = Expense;