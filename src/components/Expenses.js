import React, { useContext, useState } from "react";
import { ExpenseContext } from "../context/ExpenseContext";
import ExpenseItem from "./ExpenseItem";

import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2021");

  const { expenses } = useContext(ExpenseContext);

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expensesContent = <p>No expenses found.</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        id={expense.id}
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <div className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {expensesContent}
    </div>
  );
}

export default Expenses;
