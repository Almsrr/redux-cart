import React from "react";
import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const products = [
  { id: "p1", title: "Product 1", description: "Delicious", price: 16.3 },
  { id: "p3", title: "Product 2", description: "Sweet", price: 89.4 },
];

const Products = () => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {products.map((product, index) => (
          <ProductItem key={index} product={product} />
        ))}
      </ul>
    </section>
  );
};

export default Products;
