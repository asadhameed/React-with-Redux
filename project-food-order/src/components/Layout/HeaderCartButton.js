import React, { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";
const HeaderCartButton = (props) => {
  const { items } = useContext(CartContext);
  const [btnIsHighlighted, setButtonHighlighted] = useState(false);
  useEffect(() => {
    if (items.length === 0) {
      return;
    }

    setButtonHighlighted(true);

    const timer = setTimeout(() => {
      setButtonHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);
  const btnClass = `${classes.button} ${btnIsHighlighted ? classes.bump : ""}`;
  return (
    <button className={btnClass} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>your cart </span>
      <span className={classes.badge}>{items.length}</span>
    </button>
  );
};

export default HeaderCartButton;
