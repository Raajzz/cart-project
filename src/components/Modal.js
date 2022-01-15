import React from "react";

const Modal = ({ modalToBeShown }) => {
  return modalToBeShown === "above" ? (
    <div>Can't ship more than 50 item ♥ </div>
  ) : (
    <div> Can't ship 0 Item 😲</div>
  );
};

export default Modal;
