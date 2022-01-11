import React, { useEffect, useReducer } from "react";
import { BsFillCartFill } from "react-icons/bs";
import { BiUpArrow, BiDownArrow } from "react-icons/bi";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { data } from "./data";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ELEMENT":
      break;

    case "REMOVE_ELEMENT":
      break;

    case "INCREASE_QUANTITY":
      break;

    case "DECREASE_QUANTITY":
      break;

    default:
      throw new Error("NO MATCHING CASE FOR ACTION");
    // break; -> unreachable
  }
};

// INITIAL STATE CONTAIN ONE STATEOBJECT, ONE STATEARRAY, ONE STATEVARIABLE

const initialState = {
  productDetails: data,
  productQuantity: (() => {
    let array = [];
    for (let counter = 0; counter < data.length; counter++) {
      array.push(1);
    }
    return array;
  })(),
  totalProduct: 1 * data.length,
  totalPrice: (() => {
    let price = 0;
    data.forEach((item) => {
      price += item.price;
    });
    return price;
  })(),
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  let temp_click = 1;
  return (
    <>
      {/* HEADER */}
      <div className=" bg-sky-500 h-20 flex items-center">
        <div className="relative container">
          <Router>
            <Link
              to="#"
              className=" text-white font-semibold mx-10 text-4xl md:text-5xl"
            >
              CART
            </Link>
            <Link
              to="#"
              className="text-white z-0 absolute right-0 top-0 font-semibold mx-10 text-4xl md:text-5xl"
            >
              <BsFillCartFill />
              <span className="absolute right-2 top-0.5 md:top-2 md:right-3 z-10 text-sky-500 text-lg md:text-xl">
                {state.totalProduct}
              </span>
            </Link>
          </Router>
        </div>
      </div>
      {/* HEADER-END */}

      {/* TITLE */}

      <div className=" text-center font-bold tracking-wider text-4xl sm:text-5xl mt-20 mb-10">
        YOUR BAG
      </div>

      {/* TITLE END */}

      {/* CART CONTENT */}

      <div className=" relative container border-2 border-black w-full grid grid-cols-3">
        <div className=" inline-block w-fit vert-center">
          <img
            src="https://res.cloudinary.com/diqqf3eq2/image/upload/v1583368215/phone-2_ohtt5s.png"
            alt="Samsung Galaxy S7"
            className=" w-20 "
          />
        </div>
        <div className=" absolute inline-block h-full vert-center left-24">
          <div>Samsung Galaxy S7</div>
          <div>$599.99</div>
          <button>remove</button>
        </div>
        <div className="absolute right-4 top-3 bottom-0">
          <div className=" w-fit mx-auto">
            <BiUpArrow className=" shadow-2xl hover:shadow-green-900 hover:text-green-500 duration-150 hover:cursor-pointer hover:scale-125" />
          </div>
          <div className="">100</div>
          <div className=" w-fit mx-auto hover:text-red-500 duration-150 hover:scale-125 hover:cursor-pointer">
            <BiDownArrow />
          </div>
        </div>
      </div>

      {/* CART CONTENT END */}

      {/* OPTIONS */}
      <div className=" w-fit mx-auto">
        <div
          className=" 
        inline-block 
        rounded-3xl 
        text-lg sm:text-3xl font-bold text-center 
        mt-20 mb-10 
        text-white bg-red-500 
        w-fit px-8 py-1 mx-5 
        hover:shadow-red-500/30 hover:shadow-xl hover:cursor-pointer duration-200"
        >
          BUY!
        </div>
        <div
          className=" 
        inline-block 
        rounded-3xl text-lg sm:text-3xl font-bold text-center 
        mt-20 mb-10 
        text-white 
        bg-sky-500 
        w-fit px-8 py-1 mx-5 
        hover:shadow-sky-500/30 hover:shadow-xl hover:cursor-pointer duration-200"
        >
          ADD!
        </div>
      </div>
      {/* OPTIONS-END */}
    </>
  );
};

export default App;
