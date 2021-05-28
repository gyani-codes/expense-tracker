import React, { useState } from "react";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense";
import { ExpenseContext } from "./context/ExpenseContext";
function App() {
  const dummyData = [
    {
      title: "Car Wash",
      amount: 270,
      date: new Date(2021, 3, 13),
      id: "e1",
    },
    {
      title: "Recharge",
      amount: 400,
      date: new Date(2020, 2, 13),
      id: "e2",
    },
    {
      title: "Vegetables",
      amount: 400,
      date: new Date(2020, 8, 13),
      id: "e4",
    },
  ];

  const [expenses, setExpenses] = useState(dummyData);

  return (
    <div>
      <ExpenseContext.Provider value={{ expenses, setExpenses }}>
        <NewExpense />
        <Expenses />
      </ExpenseContext.Provider>
    </div>
  );
}

export default App;
