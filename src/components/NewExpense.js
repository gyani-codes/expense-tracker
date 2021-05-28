import React from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = () => {
  return (
    <div className="new-expense">
      <h1>Expense Tracker</h1>
      <ExpenseForm />
    </div>
  );
};

export default NewExpense;
