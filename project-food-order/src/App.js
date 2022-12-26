import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
function App() {
  const [cartIsShow, setCartShow] = useState(false);
  const showCartHandler = () => {
    setCartShow(true);
  };
  const hiderCartHandler = () => {
    setCartShow(false);
  };
  return (
    <CartProvider>
      {cartIsShow && <Cart onHideCart={hiderCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
