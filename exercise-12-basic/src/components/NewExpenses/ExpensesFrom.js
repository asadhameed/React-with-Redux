import React, { useState } from "react";

import "./ExpensesFrom.css";

const ExpensesFrom = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  // const [state, setState] = useState({
  //   title: "",
  //   amount: "",
  //   date: "",
  //   count: 0,
  // });

  const titleChangeHandler = (e) => {
    // setState({
    //   ...state,
    //   title: e.target.value,
    //   count: state.count + 1,
    // });

    // //Better approach
    // setState(() => {
    //   return {
    //     ...state,
    //     title: e.target.value,
    //     count: state.count + 1,
    //   };
    // });
    setTitle(e.target.value);
  };

  const amountChangeHandler = (e) => {
    setAmount(e.target.value);
    // setState({
    //   ...state,
    //   amount: e.target.value,
    // });
    //  //Better approach
    //  setState(() => {
    //   return {
    //     ...state,
    //     title: e.target.value,
    //     count: state.count + 1,
    //   };
    // });
  };

  const dateChangeHandler = (e) => {
    setDate(e.target.value);
    // setState({
    //   ...state,
    //   date: e.target.value,
    // });
    //Better approach
    //  setState(() => {
    //   return {
    //     ...state,
    //     title: e.target.value,
    //     count: state.count + 1,
    //   };
    // });
  };

  const onSubmitHanlder = (e) => {
    e.preventDefault();

    setTitle("");
    setAmount("");
    setDate("");
    const expenseData = {
      title,
      amount,
      date: new Date(date),
    };

    props.onSaveExpensesData(expenseData);
  };

  return (
    <form onSubmit={onSubmitHanlder}>
      <div className="new-expense__controls ">
        <div className="new-expense__control ">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} value={title} />
        </div>
        <div className="new-expense__control ">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={amount}
            onChange={amountChangeHandler}
          />
        </div>

        <div className="new-expense__control ">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-0"
            max="2022-12-31"
            value={date}
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expenses</button>
        </div>
      </div>
    </form>
  );
};

export default ExpensesFrom;
