import React, { useState, useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";
import "./ExpenseForm.css";

const giveDate = () => {
  let expenseDate = new Date();
  const month = expenseDate.toLocaleString("en-Us", { month: "2-digit" });
  const day = expenseDate.toLocaleString("en-Us", { day: "2-digit" });
  const year = expenseDate.getFullYear();
  const todayDate = year + "-" + month + "-" + day;
  return todayDate;
};
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState(giveDate());

  const { setExpenses } = useContext(ExpenseContext);

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (enteredTitle === "" || enteredAmount === "") {
      // TODO
      console.log("Don't Add expense");
      return;
    }

    const expense = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
      id: Math.random().toString(),
    };

    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });

    // window.localStorage.removeItem("1");

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate(giveDate());
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
