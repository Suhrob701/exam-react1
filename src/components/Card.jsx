import React from "react";

const Card = ({ product }) => {
  return (
    <div className="card">
      <img src={product.img} alt={product.title} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      {product.discount && <span className="badge">Sale</span>}
      <p>⭐️ {product.rating}</p>
    </div>
  );
};

export default Card;