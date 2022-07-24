import React from "react";
import Wrapper from "../helpers/Wrapper";
import classes from './Button.module.css'
const Button =(props)=>{
    return ( <Wrapper>
        <button type={props.type} onClick={props.onClick} className={classes.button}>{props.children}</button>
        </Wrapper>
    )
}

export default Button