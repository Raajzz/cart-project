import React from "react";
import { BiUpArrow, BiDownArrow } from "react-icons/bi";

const ItemCardContent = ({ item, dispatch }) => {

  const removeClickHandler = () => {
    dispatch({ type: "REMOVE_ELEMENT", id: item.id });
    console.log(item.id);
  };

  return (
    <div className=" relative container w-full grid grid-cols-3 mb-10">
      <div>
        <img src={item.img} alt={item.title} className=" w-20 xl:w-24" />
      </div>
      <div className=" absolute inline-block h-full vert-center left-28 xl:text-lg ">
        <div className=" tracking-widest font-base">{item.title}</div>
        {/* state.projectDetails.title */}
        <div className=" tracking-widest font-light mb-2">${item.price}</div>
        {/* state.projectDetails.price */}
        <button
          className=" tracking-widest text-sky-700"
          onClick={removeClickHandler}
        >
          remove
        </button>
      </div>
      <div className="absolute right-4 top-3 bottom-0 xl:text-lg">
        <div className=" w-fit mx-auto hover:text-green-500 duration-100 hover:cursor-pointer hover:scale-125">
          <BiUpArrow
            className=" "
            onClick={() => {
              dispatch({ type: "INCREASE_QUANTITY", id: item.id });
            }}
          />
        </div>
        <div className=" text-center">{item.amount}</div>
        {/* state.item.amount */}
        <div className=" w-fit mx-auto hover:text-red-500 duration-300 hover:scale-125 hover:cursor-pointer">
          <BiDownArrow
            onClick={() => {
              dispatch({ type: "DECREASE_QUANTITY", id: item.id });
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ItemCardContent;
