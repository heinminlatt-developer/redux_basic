import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators } from "../stores/actionCreators";
import { bindActionCreators } from "redux";

function Testtwo() {
  const account = useSelector((state) => state.account);
  const dispatch = useDispatch();
  const { add, remove } = bindActionCreators(actionCreators, dispatch);
  return (
    <div>
      <h1>Testtwo:{account}</h1>
      <button onClick={() => add(50)}>Add</button>
      <button onClick={() => remove(50)}>Remove</button>
    </div>
  );
}

export default Testtwo;
