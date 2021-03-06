import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpenses from "./components/NewExpenses/NewExpenses";
function App() {
  const [expenses, setExpenses] = useState([
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ]);
  const addExpensesHandler = (expense) => {
    setExpenses((prv) => [expense, ...prv]);
  };
  /**
   * you can write react component like this as well
   * But the JSX is the easy way to write a code
   */
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let start it"),
  //   React.createElement(Expenses, { items: expenses })
  // );
  console.log(expenses);
  return (
    <div>
      <NewExpenses onAddExpenses={addExpensesHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
