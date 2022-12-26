import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
const Cart = (props) => {
  const { items, totalAmount, addItem, removeItem } = useContext(CartContext);
  const onAddItemHandler = (item) => {
    const newItem = { ...item };
    newItem.amount = 1;
    addItem(newItem);
  };
  const onRemoveItemHanlder = (id) => {
    removeItem(id);
  };
  const hasItem = items.length > 0;
  const amount = `$${totalAmount.toFixed(2)}`;
  const cartItem = (
    <ul className={classes.cart}>
      {items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onRemove={onRemoveItemHanlder.bind(null, item.id)}
          onAdd={onAddItemHandler.bind(null, item)}
        ></CartItem>
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onHideCart}>
      {cartItem}
      <div className={classes.total}>
        <span>Total amount</span>

        <span>{amount}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onHideCart} className={classes["button--alt"]}>
          Close
        </button>
        {hasItem && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
