import React, { useState } from "react";
import styled from "styled-components";

import Button from "../../UI/Button/Button";
import ButtonNew from "../../UI/Button/ButtonNew";
import "./CourseInput.css";

const FormControl = styled.div`
  margin: 0.5rem 0;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    color: ${({ invalid }) => (invalid ? "red" : "black")};
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid ${({ invalid }) => (invalid ? "red" : "#ccc")};
    background-color: ${(props) => (props.invalid ? "#f09696" : "transparent")};
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }

  // &.invalid input{
  //   border-color: red;
  //   background-color: #f09696;
  // }

  // &.invalid label{
  //   color: red;
  // }
`;

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

  /**************************
   *
   * This is inline style
   *
   ***************************/

  // return (
  //   <form onSubmit={formSubmitHandler}>
  //     <div className='form-control' >
  //        <label style={!isValid ? {  color:'red'}:{color:'black'}}>Course Goal</label>
  //       <input style={{background: !isValid ? 'pink' : 'white'}} type="text" value={enteredValue} onChange={goalInputChangeHandler} />

  //     </div>
  //     <Button type="submit">Add Goal</Button>
  //   </form>
  // );

  /*************************************
   * Style inside in CSS file
   *
   **********************************/
  // return (
  //   <form onSubmit={formSubmitHandler}>
  //     <div className={  `form-control ${!isValid ? 'invalid' :''} `} >
  //       <label>Course Goal</label>
  //       <input value={enteredValue} onChange={goalInputChangeHandler} />
  //     </div>
  //     <Button type="submit">Add Goal</Button>
  //   </form>
  // );

  /***************************
   * The Styled component
   *
   *  How Can pass dynamic props to styled component
   ****************************/

  return (
    <form onSubmit={formSubmitHandler}>
      {/* <FormControl className={!isValid && 'invalid'} > */}
      <FormControl invalid={!isValid}>
        <label>Course Goal</label>
        <input value={enteredValue} onChange={goalInputChangeHandler} />
      </FormControl>
      {/* <Button type="submit">Add Goal</Button> */}
      <ButtonNew type="submit">Add Goad</ButtonNew>
    </form>
  );
};

export default CourseInput;
