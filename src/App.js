import React from "react";
import { BsFillCartFill } from "react-icons/bs";
import { BrowserRouter as Router, Link } from "react-router-dom";

const App = () => {
  const number = 10;

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
                {number}
              </span>
            </Link>
          </Router>
        </div>
      </div>
      {/* HEADER-END */}

      <div className=" text-center font-bold tracking-wider text-4xl sm:text-5xl">
        YOUR BAG
      </div>

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

      {/* CART CONTENT */}

      <div></div>

      {/* CART CONTENT END */}
    </>
  );
};

export default App;
