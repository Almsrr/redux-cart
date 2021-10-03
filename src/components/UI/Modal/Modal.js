import ReactDOM from "react-dom";
import { Fragment } from "react";
import styles from "./Modal.module.css";
import { useDispatch } from "react-redux";
import { uiActions } from "../../../store/ui-slice";

function Modal(props) {
  const dispatch = useDispatch();

  const closeModalHandler = () => {
    dispatch(uiActions.toggle());
  };
  const modal = (
    <Fragment>
      <div className={styles.backdrop} onClick={closeModalHandler}></div>
      <div className={styles.modal}>{props.children}</div>
    </Fragment>
  );
  return ReactDOM.createPortal(modal, document.getElementById("modal-root"));
}

export default Modal;
