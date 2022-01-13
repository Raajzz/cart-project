import React, { useEffect, useReducer } from "react";
import { BsFillCartFill } from "react-icons/bs";
import { BiUpArrow, BiDownArrow } from "react-icons/bi";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { data } from "./data";

// const CartContent = ({ item, productQuantity, state, dispatch }) => {
//   return (
//     <div className=" relative container w-full grid grid-cols-3 mb-10">
//       <div>
//         <img src={item.img} alt={item.title} className=" w-20 xl:w-24" />
//       </div>
//       <div className=" absolute inline-block h-full vert-center left-28 xl:text-lg ">
//         <div className=" tracking-widest font-base">{item.title}</div>
//         {/* state.projectDetails.title */}
//         <div className=" tracking-widest font-light mb-2">${item.price}</div>
//         {/* state.projectDetails.price */}
//         <button className=" tracking-widest text-sky-700">remove</button>
//       </div>
//       <div className="absolute right-4 top-3 bottom-0 xl:text-lg">
//         <div className=" w-fit mx-auto hover:text-green-500 duration-100 hover:cursor-pointer hover:scale-125">
//           <BiUpArrow
//             className=" "
//             onClick={() => {
//               dispatch({ type: "INCREASE_QUANTITY" });
//             }}
//           />
//         </div>
//         <div className=" text-center">1000000</div>
//         {/* state.productQuantity */}
//         <div className=" w-fit mx-auto hover:text-red-500 duration-300 hover:scale-125 hover:cursor-pointer">
//           <BiDownArrow
//             onClick={() => {
//               dispatch({ type: "DECREASE_QUANTITY" });
//             }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ELEMENT":
      break;

    case "REMOVE_ELEMENT":
      break;

    case "INCREASE_QUANTITY":
      console.log("Increase quantity");
      return state;
      
      case "DECREASE_QUANTITY":
      console.log("Decrease quantity");
      return state;

    default:
      return new Error("NO MATCHING CASE FOR ACTION");
    // break; -> unreachable
  }
};

// INITIAL STATE CONTAIN ONE STATEOBJECT, ONE STATEARRAY, ONE STATEVARIABLE

const initialState = {
  productDetails: data,
  // productQuantity: [10000, 10000, 10000, 10000, 10000, 10000],
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
              <div className="absolute right-2 top-0.5 md:top-2 md:right-3 z-10 text-sky-500 text-lg md:text-xl text-center">
                {state.totalProduct <= 9
                  ? `0${state.totalProduct}`
                  : `${state.totalProduct}`}
              </div>
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
      {state.productDetails.map((item, index) => {
        return (
          <div className=" relative container w-full grid grid-cols-3 mb-10">
            <div>
              <img src={item.img} alt={item.title} className=" w-20 xl:w-24" />
            </div>
            <div className=" absolute inline-block h-full vert-center left-28 xl:text-lg ">
              <div className=" tracking-widest font-base">{item.title}</div>
              {/* state.projectDetails.title */}
              <div className=" tracking-widest font-light mb-2">
                ${item.price}
              </div>
              {/* state.projectDetails.price */}
              <button className=" tracking-widest text-sky-700">remove</button>
            </div>
            <div className="absolute right-4 top-3 bottom-0 xl:text-lg">
              <div className=" w-fit mx-auto hover:text-green-500 duration-100 hover:cursor-pointer hover:scale-125">
                <BiUpArrow
                  className=" "
                  onClick={() => {
                    dispatch({ type: "INCREASE_QUANTITY" });
                  }}
                />
              </div>
              <div className=" text-center">1000000</div>
              {/* state.productQuantity */}
              <div className=" w-fit mx-auto hover:text-red-500 duration-300 hover:scale-125 hover:cursor-pointer">
                <BiDownArrow
                  onClick={() => {
                    dispatch({ type: "DECREASE_QUANTITY" });
                  }}
                />
              </div>
            </div>
          </div>
          // <CartContent
          //   item={item}
          //   productQuantity={state.productQuantity[index]}
          //   state={state}
          //   dispatch={dispatch}
          //   key={item.id}
          // />
        );
      })}
      {/* CART CONTENT END */}

      {/* TOTAL-START */}
      <div className="relative container text-2xl xl:text-3xl tracking-widest">
        <div className="rounded-full border-[0.25px] border-gray-500"></div>
        <div className="absolute left-0 mx-5 my-2 ">Total</div>
        <div className="absolute right-0 my-2 font-semibold">
          $ {Math.round(state.totalPrice)}
        </div>
      </div>

      {/* TOTAL-END */}

      {/* OPTIONS */}
      <div className=" w-fit mx-auto mt-28 mb-10">
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
      </div>
      {/* OPTIONS-END */}
    </>
  );
};

export default App;
