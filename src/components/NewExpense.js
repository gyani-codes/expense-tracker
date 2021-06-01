import React from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const giveDate = () => {
  let expenseDate = new Date();
  const month = expenseDate.toLocaleString("en-Us", { month: "long" });
  const day = expenseDate.toLocaleString("en-Us", { day: "2-digit" });
  const year = expenseDate.getFullYear();
  const todayDate = month + " " + day + " " + year;
  return todayDate;
};
const NewExpense = () => {
  return (
    <div className="new-expense">
      <h1>Expense Tracker</h1>
      <h1>{giveDate()}</h1>
      <ExpenseForm />
    </div>
  );
};

export default NewExpense;
