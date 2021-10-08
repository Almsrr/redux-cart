import { useEffect, Fragment } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { sendCartData } from "./store/cart-actions";
import Notification from "./components/UI/Notification/Notification";
import { fetchCartData } from "./store/cart-actions";

let firstTime = true;

function App() {
  const cart = useSelector((state) => state.cart);
  const showCart = useSelector((state) => state.ui.cartVisibility);
  const notification = useSelector((state) => state.ui.notification);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (firstTime) {
      firstTime = false;
      return;
    }
    if (cart.updated) dispatch(sendCartData(cart));
  }, [cart, dispatch]);
  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
