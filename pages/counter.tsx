import React from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { incremented,amountAdded } from "../app/counter_slice";
interface Props {}

export const counter = (props: Props) => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  const handlerClic = () => {
    // dispatch(incremented());
    dispatch(amountAdded(5))
  };
  return (
    <div className="container">
      <button className="btn btn-primary" onClick={handlerClic}>
        {" "}
        <label htmlFor="counter">
          {" "}
          counter is: <strong>{count}</strong>
        </label>
      </button>
    </div>
  );
};

export default counter;
