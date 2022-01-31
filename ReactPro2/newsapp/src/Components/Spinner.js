import React, { Component } from "react";
import loading from "/Users/adityakadlag/Desktop/React/ReactPro2/newsapp/src/loading.gif";

const Spinner = () => {
  return (
    <div className="text-center">
      <img src={loading} alt="Loading " height={30} width={30} />
    </div>
  );
};

export default Spinner;
