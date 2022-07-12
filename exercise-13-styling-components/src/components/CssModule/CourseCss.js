import React, { useState } from "react";

import ButtonNew from "../UI/Button/ButtonNew";
import styles from "./CourseCss.module.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log(enteredValue.trim().length);
    if (enteredValue.trim().length === 0) {
      setValid(false);
      return;
    }
    setValid(true);
    setEnteredValue("");
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={` ${styles['form-control']}  ${!isValid && styles.invalid} `}>
        <label>Course Goal</label>
        <input value={enteredValue} onChange={goalInputChangeHandler} />
      </div>

      <ButtonNew type="submit">Add Goad</ButtonNew>
    </form>
  );
};

export default CourseInput;
