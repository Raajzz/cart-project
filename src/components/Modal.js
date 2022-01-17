import React from "react";
import { AiFillHeart } from "react-icons/ai";

const Modal = ({ modalToBeShown }) => {
  return (
    <div className=" absolute top-[-3rem] left-0 right-0 mx-auto w-fit transition-all ease-in-out duration-700">
      {modalToBeShown === "above" ? (
        <span className=" rounded-3xl bg-green-300 py-1 px-5 opacity-75">
          Can't ship more than 50 items{" "}
          <AiFillHeart className=" mb-1 text-red-500 inline-block" />{" "}
        </span>
      ) : (
        <span className="rounded-3xl bg-red-300 py-1 px-5 opacity-75">
          {" "}
          Can't ship 0 Items 😲
        </span>
      )}
    </div>
  );
};

export default Modal;
