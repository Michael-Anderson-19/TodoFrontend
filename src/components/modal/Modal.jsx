import React from "react";
import Style from "./Modal.module.css";

const Modal = ({ onClose, title, children }) => {
  return (
    <div className={Style.modalBackground}>
      <div className={Style.modal}>
        <div className={Style.modalHeader}>
          <h2>{title}</h2>
          <button onClose={onClose}>X</button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
