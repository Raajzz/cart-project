import React from "react";
import { BsFillCartFill } from "react-icons/bs";
import { BrowserRouter as Router, Link } from "react-router-dom";

const App = () => {
  const number = 10;

  return (
    <>
      {/* HEADER */}
      <div className=" bg-sky-500 h-20 flex items-center">
        <div className="relative max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl mx-auto w-full">
          <Router>
            <Link
              to="#"
              className=" text-white font-semibold mx-10 text-4xl md:text-5xl"
            >
              CARD
            </Link>
            <Link
              to="#" className=" z-0 absolute right-0 top-0 text-white font-semibold mx-10 text-4xl md:text-5xl">
              <BsFillCartFill />
              <span className="absolute right-2 top-0.5 md:top-2 md:right-3 z-10 text-sky-500 text-lg md:text-xl">
                {number}
              </span>
            </Link>
          </Router>
        </div>
      </div>
    </>
  );
};

export default App;
