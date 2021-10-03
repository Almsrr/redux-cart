import React from "react";
import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

function ProductItem(props) {
  const dispatch = useDispatch();
  const { id, title, price, description } = props.product;

  const addItemHandler = () => {
    const itemToAdd = {
      id,
      title,
      price,
      quantity: 1,
    };
    dispatch(cartActions.addItem(itemToAdd));
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addItemHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
}

export default ProductItem;
