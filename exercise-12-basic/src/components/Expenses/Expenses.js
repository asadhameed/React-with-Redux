import ExpensesItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (year) => {
    setFilteredYear(year);
  };

  const filterData = props.items.filter(
    (item) => item.date.getFullYear() == filteredYear
  );
  console.log("-------item", filterData);
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {filterData.map((item) => {
          return (
            <ExpensesItem
              key={item.id}
              title={item.title}
              amount={item.amount}
              date={item.date}
            />
          );
        })}
      </Card>
    </div>
  );
};

export default Expenses;
