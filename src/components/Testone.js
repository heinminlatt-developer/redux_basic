import React from "react";
import { useSelector } from "react-redux";
import Testtwo from "./Testtwo";

function Testone() {
  const account = useSelector((state) => state.account);
  return (
    <div>
      <h1>Testone:{account}</h1>

      <Testtwo />
    </div>
  );
}

export default Testone;
