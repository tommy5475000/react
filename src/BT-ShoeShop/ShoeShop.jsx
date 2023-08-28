import React, { useState } from "react";
import ShoeList from "./ShoeList";
import data from "./data.json";
import Cart from "./Cart";

export default function ShoeShop() {
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseCart = () => {
    setIsOpen(false);
  };

  const [carts, setCart] = useState([]);

  const totalProduct = carts.reduce((result, item) => {
    return result + item.quantity;
  }, 0);

  const handleAddToCart = (product) => {
    const found = carts.find((item) => item.id === product.id);
    if (found) {
      const newCarts = carts.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      setCart(newCarts);
    } else {
      setCart([...carts, { ...product, quantity: 1 }]);
    }
  };

  const handleDeleleProductFromCart = (productID) => {
    const newCarts = carts.filter((item) => item.id !== productID);
    setCart(newCarts);
  };

  const handleChangeProductFromCart = (productID, quantity) => {
    const found = carts.find((item) => item.id === productID);
    if (found) {
      const newCarts = carts.map((item) => {
        if (item.id === productID) {
          return { ...item, quantity: item.quantity + quantity };
        }
        return item;
      });
      setCart(newCarts);
    }
  };

  return (
    <div className="container">
      <h1 className="text-center text-primary">Shoe Shop</h1>
      <div className="d-flex justify-content-end mb-3">
        <button className="btn btn-danger" onClick={() => setIsOpen(true)}>
          Cart({totalProduct})
        </button>
      </div>

      <ShoeList products={data} onAddProuctToCart={handleAddToCart} />

      {isOpen && (
        <Cart
          carts={carts}
          onCloseCart={handleCloseCart}
          onDeleteProductCart={handleDeleleProductFromCart}
          onChangeQuantityCart={handleChangeProductFromCart}
        />
      )}
    </div>
  );
}
