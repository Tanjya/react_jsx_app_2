import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./ShopAccess.css";
const ShopAccess = (props) => {
  const { name, img, ratings, price, seller } = props.eachProduct;

  const addToCart = props.addToCart;
  return (
    <div>
      <div className="product-card">
        <img src={img} alt="" />
        <div className="product-info">
          <h4 className="product-name">{name}</h4>
          <p>${price}</p>
          <p>{seller}</p>
          <p>{ratings} stars</p>
        </div>

        <button
          onClick={() => addToCart(props.eachProduct)}
          className="btn-cart"
        >
          Add to cart
          <FontAwesomeIcon icon={faShoppingCart} />
        </button>
      </div>
    </div>
  );
};

export default ShopAccess;
