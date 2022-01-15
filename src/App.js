import React, { useEffect, useReducer } from "react";
import { BsFillCartFill } from "react-icons/bs";
import { BrowserRouter as Router, Link } from "react-router-dom";
import ItemCardContent from "./components/ItemCardContent";
import { preDefItemFromAPI } from "./preDefItemFromAPI";
import Modal from "./components/Modal";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ELEMENT":
      return state;

    case "REMOVE_ELEMENT":
      return state;

    case "INCREASE_QUANTITY": {
      for (let counter = 0; counter < state.productDetails.length; counter++) {
        if (state.productDetails[counter].id === action.id) {
          if (state.productDetails[counter].amount < 50) {
            state.productDetails[counter].amount++;
            state.totalNumOfProducts++;
            state.totalPriceOfProducts += state.productDetails[counter].price;
          }
        }
      }
      return { ...state };
    }

    case "DECREASE_QUANTITY": {
      for (let counter = 0; counter < state.productDetails.length; counter++) {
        if (state.productDetails[counter].id === action.id) {
          if (state.productDetails[counter].amount > 0) {
            state.productDetails[counter].amount--;
            state.totalNumOfProducts--;
            state.totalPriceOfProducts -= state.productDetails[counter].price;
          }
        }
      }
      return { ...state };
    }

    default:
      throw new Error("NO MATCHING CASE FOR ACTION");
  }
};

// INITIAL STATE CONTAIN ONE STATEOBJECT, ONE STATEARRAY, ONE STATEVARIABLE

const initialState = {
  productDetails: preDefItemFromAPI,
  totalNumOfProducts: 1 * preDefItemFromAPI.length,
  totalPriceOfProducts: (() => {
    let price = 0;
    preDefItemFromAPI.forEach((item) => {
      price += item.price;
    });
    return price;
  })(),
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
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
              <div className="absolute right-2 top-0.5 md:top-2 md:right-3 z-10 text-sky-500 text-lg md:text-xl text-center">
                {state.totalNumOfProducts <= 9
                  ? `0${state.totalNumOfProducts}`
                  : `${state.totalNumOfProducts}`}
              </div>
            </Link>
          </Router>
        </div>
      </div>
      {/* HEADER-END */}

      {/* MODAL BEGIN */}
      {state.totalNumOfProducts === 50 ? (
        <Modal modalToBeShown={"above"} />
      ) : state.totalNumOfProducts === 0 ? (
        <Modal />
      ) : (
        ""
      )}

      {/* MODAL END */}

      {/* TITLE */}
      <div className=" text-center font-bold tracking-wider text-4xl sm:text-5xl mt-20 mb-10">
        YOUR BAG
      </div>
      {/* TITLE END */}

      {/* CART CONTENT */}
      {state.productDetails.map((item, index) => {
        return (
          <ItemCardContent
            item={item}
            state={state}
            dispatch={dispatch}
            key={item.id}
          />
        );
      })}
      {/* CART CONTENT END */}

      {/* TOTAL-START */}
      <div className="relative container text-2xl xl:text-3xl tracking-widest">
        <div className="rounded-full border-[0.25px] border-gray-500"></div>
        <div className="absolute left-0 mx-5 my-2 ">Total</div>
        <div className="absolute right-0 my-2 font-semibold">
          $ {Math.round(state.totalPriceOfProducts)}
        </div>
      </div>
      {/* TOTAL-END */}

      {/* OPTIONS */}

      <div className=" w-fit mx-auto mt-28 mb-10">
        {/* BUY-BUTTON-START */}
        <div
          className=" 
          inline-block 
          rounded-3xl 
          text-lg sm:text-3xl font-bold text-center 
          
          text-white bg-red-500 
          w-fit px-8 py-1 mx-5 
          hover:shadow-red-500/30 hover:shadow-xl hover:cursor-pointer duration-200"
        >
          BUY!
        </div>
        {/* BUY-BUTTON-END */}

        {/* ADD-BUTTON-START */}
        <div
          className=" 
          inline-block 
          rounded-3xl text-lg sm:text-3xl font-bold text-center  
          text-white 
          bg-sky-500 
          w-fit px-8 py-1 mx-5 
          hover:shadow-sky-500/30 hover:shadow-xl hover:cursor-pointer duration-200"
        >
          ADD!
        </div>
        {/* ADD-BUTTON-END */}
      </div>

      {/* OPTIONS-END */}
    </>
  );
};

export default App;