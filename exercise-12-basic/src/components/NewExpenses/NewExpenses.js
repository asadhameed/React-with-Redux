import React, { useState } from "react";
import ExpensesFrom from "./ExpensesFrom";
import "./NewExpenses.css";
const NewExpenses = (props) => {
  const [showFrom, SetShowFrom] = useState(false);
  const onSaveExpensesDataHandler = (expense) => {
    const expenseData = {
      ...expense,
      id: Math.random().toString(),
    };

    props.onAddExpenses(expenseData);
    SetShowFrom(false);
  };
  return (
    <div className="new-expense">
      {!showFrom && (
        <button type="submit" onClick={() => SetShowFrom(true)}>
          New Expense
        </button>
      )}{" "}
      {showFrom && (
        <ExpensesFrom onSaveExpensesData={onSaveExpensesDataHandler} />
      )}
    </div>
  );
};

export default NewExpenses;
