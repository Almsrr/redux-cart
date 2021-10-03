import React from "react";
import classes from "./CartButton.module.css";
import { uiActions } from "../../store/ui-slice";
import { useDispatch, useSelector } from "react-redux";

function CartButton() {
  const itemsQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();
  const showCartHandler = () => {
    dispatch(uiActions.toggle());
  };
  return (
    <button className={classes.button} onClick={showCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{itemsQuantity}</span>
    </button>
  );
}

export default CartButton;
