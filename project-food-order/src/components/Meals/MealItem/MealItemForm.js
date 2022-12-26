import React, { useRef, useState } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";

const MealItemForm = (props) => {
  const amountInputRef = useRef();

  const [isFormValid, setFormValid] = useState(true);

  const submitHandlder = (event) => {
    event.preventDefault();
    const enterAmount = amountInputRef.current.value;
    const enterAmountNumber = +enterAmount;

    if (
      enterAmount.trim().length === 0 ||
      enterAmountNumber < 0 ||
      enterAmountNumber > 5
    ) {
      setFormValid(false);
      return;
    }

    props.onAddToCard(enterAmountNumber);
  };
  return (
    <form className={classes.form} onSubmit={submitHandlder}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
          type: "number",
        }}
      />
      <button>+ Add</button>
      {!isFormValid && <span>The From is not Valid</span>}
    </form>
  );
};

export default MealItemForm;
