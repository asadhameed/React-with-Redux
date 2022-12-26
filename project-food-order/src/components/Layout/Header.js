import React, { useContext } from "react";
import classes from "./Header.module.css";
import HeaderImage from "../../assets/adrien-olichon-ZgREXhl8ER0-unsplash.jpg";
import HeaderCartButton from "./HeaderCartButton";
import CartContext from "../../store/cart-context";

const Header = (props) => {
  const context = useContext(CartContext);

  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1> React Meals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>

      <div className={classes["main-image"]}>
        <img src={HeaderImage} />
      </div>
    </React.Fragment>
  );
};

export default Header;
