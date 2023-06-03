import React, { useEffect, useState } from "react";
import ShopAccess from "../ShopAccess/ShopAccess";
import "./Shop.css";
import Cart from "../Cart/Cart";

const Shop = () => {
  const [products, setProducts] = useState([]);
  //number of clicks
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const addToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };

  return (
    <div className="products">
      <div className="product_info">
        {products.map((product) => (
          <ShopAccess
            key={product.id}
            eachProduct={product}
            addToCart={addToCart}
          ></ShopAccess>
        ))}
      </div>

      <div className="product_sum">
        <Cart cartInfo={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
