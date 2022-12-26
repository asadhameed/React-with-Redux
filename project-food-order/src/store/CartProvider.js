import React, { useReducer } from "react";
import CartContext from "./cart-context";
// const CartContext = React.createContext({
//   items: [],
//   totalAmount: 0,
//   addItem: (item) => {},
//   removeItem: (item) => {},
// });

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  let updateItems;
  switch (action.type) {
    case "ADD":
      const totalAmount =
        state.totalAmount + action.item.amount * action.item.price;
      const indexItem = state.items.findIndex(
        (item) => item.id === action.item.id
      );

      const existItem = state.items[indexItem];

      if (existItem) {
        const updateItem = {
          ...existItem,
          amount: existItem.amount + action.item.amount,
        };

        updateItems = [...state.items];
        updateItems[indexItem] = updateItem;
      } else {
        updateItems = state.items.concat(action.item);
      }

      return { items: updateItems, totalAmount };
    case "REMOVE":
      const existingCartindex = state.items.findIndex(
        (item) => item.id === action.id
      );

      const exitingItem = state.items[existingCartindex];
      const updateTotal = state.totalAmount - exitingItem.price;

      if (exitingItem.amount === 1) {
        updateItems = state.items.filter((item) => item.id !== action.id);
      } else {
        const upDateItem = { ...exitingItem, amount: exitingItem.amount - 1 };
        updateItems = [...state.items];
        updateItems[existingCartindex] = upDateItem;
      }
      return { items: updateItems, totalAmount: updateTotal };
    default:
      return state;
  }
};

const CartProvider = (props) => {
  const [state, disptachCartItem] = useReducer(cartReducer, defaultCartState);
  const addItemHandler = (item) => {
    disptachCartItem({ type: "ADD", item: item });
  };
  const removeItemHanlder = (id) => {
    disptachCartItem({ type: "REMOVE", id: id });
  };

  const value = {
    items: state.items,
    totalAmount: state.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHanlder,
  };
  return (
    <CartContext.Provider value={value}>{props.children}</CartContext.Provider>
  );
};

export default CartProvider;
