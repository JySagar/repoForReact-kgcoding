import { useRef } from "react";
import { useDispatch } from "react-redux";

const Controls = () => {
  // We don't need to do anything here useDispatch will know becoz there will only be one store so it will ask the provider(i.e. in main.jsx) about the values. and the value that will be dispatched will go to the reducer(i.e. in action parameter) bcoz it is connected. useDispatch() gives us a method to dispatch anything i.e. here an object.
  const dispatch = useDispatch();

  const inputElement = useRef();

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };

  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  const handleAdd = () => {
    dispatch({ type: "ADD", payload: { num: inputElement.current.value } });
    inputElement.current.value = "";
  };

  const handleSubtract = () => {
    dispatch({
      type: "SUBTRACT",
      payload: { num: inputElement.current.value },
    });
    inputElement.current.value = "";
  };

  return (
    <>
      <div className="gap-22 d-sm-flex justify-content-sm-center mb-2">
        <button
          type="button"
          className="btn btn-primary me-2"
          onClick={handleIncrement}
        >
          +1
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={handleDecrement}
        >
          -1
        </button>
      </div>
      <div className=" gap-22 d-sm-flex justify-content-sm-center control-row">
        <input
          type="text"
          placeholder="Enter number"
          className="number-input"
          ref={inputElement}
        ></input>
        <button type="button" class="btn btn-info me-2" onClick={handleAdd}>
          Add
        </button>
        <button type="button" class="btn btn-danger" onClick={handleSubtract}>
          Subtract
        </button>
      </div>
    </>
  );
};

export default Controls;
