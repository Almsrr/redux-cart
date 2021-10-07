import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import Modal from "../UI/Modal/Modal";
import { useSelector } from "react-redux";

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <Modal>
      <div className={classes.cart}>
        <h2>Your Shopping Cart</h2>
        <ul>
          {cartItems.map((item) => (
            <CartItem item={item} />
          ))}
        </ul>
      </div>
    </Modal>
  );
}

export default Cart;
