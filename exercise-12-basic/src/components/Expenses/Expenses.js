import ExpensesItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
const Expenses = (props) => {
  console.log(props);
  return (
    <Card className="expenses">
      <ExpensesItem
        title={props.items[0].title}
        date={props.items[0].date}
        amount={props.items[0].amount}
      />
      <ExpensesItem
        title={props.items[1].title}
        date={props.items[1].date}
        amount={props.items[1].amount}
      />
      <ExpensesItem
        title={props.items[2].title}
        date={props.items[2].date}
        amount={props.items[2].amount}
      />
      <ExpensesItem
        title={props.items[3].title}
        date={props.items[3].date}
        amount={props.items[3].amount}
      />
    </Card>
  );
};

export default Expenses;
