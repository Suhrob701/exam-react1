import React, { useEffect, useState } from "react";
import Card from "./Card";

const Main = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="product-list">
      {products.map((item) => (
        <Card key={item.id} product={item} />
      ))}
    </div>
  );
};

export default Main;