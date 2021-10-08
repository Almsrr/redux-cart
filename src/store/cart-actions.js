import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "sending",
        title: "Sending...",
        message: "Sending cart item... ",
      })
    );

    const sendItemData = async () => {
      await fetch(
        "https://react-http-18ddb-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
          }),
        }
      );
    };
    try {
      await sendItemData();
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Cart item sent",
          message: "Item sent successfully",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Something went wrong",
          message: error.message,
        })
      );
    }
  };
};

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://react-http-18ddb-default-rtdb.firebaseio.com/cart.json"
      );
      if (response.ok) {
        const data = await response.json();
        dispatch(
          cartActions.replaceCart({
            items: data.items || [],
            totalQuantity: data.totalQuantity || 0,
          })
        );
      } else {
        throw new Error("Something went wrong");
      }
    };
    try {
      await fetchData();
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Bad request",
          message: error.message,
        })
      );
    }
  };
};
