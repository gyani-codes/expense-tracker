import React, { useContext } from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import "./ExpenseForm.css";
import { ExpenseContext } from "../context/ExpenseContext";
function ExpenseItem(props) {
  const { expenses, setExpenses } = useContext(ExpenseContext);

  const deleteButtonHandler = () => {
    let expenseId = props.id;
    setExpenses((prevExpenses) => {
      console.log("Main dabta hai");

      return prevExpenses.filter((item) => item.id !== expenseId);
      // return [];
    });
    window.localStorage.setItem("1", JSON.stringify(expenses));
  };
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">
          <span>&#8377;</span>
          {props.amount}
        </div>
        <button className="expense-item__price" onClick={deleteButtonHandler}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default ExpenseItem;
