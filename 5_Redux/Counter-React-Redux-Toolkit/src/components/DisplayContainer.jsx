import { useSelector } from "react-redux";

const DisplayContainer = () => {
  // Whenever the value of counter changes it will cause re render.
  // Here instead of .counter we can also use whole store. But the issue will be whenever anything changes in the store this component will re render. But since we here used only .counter so it will only re-render when the counter object changes.
  const counter = useSelector((store) => store.counter);
  return <p className="lead mb-4">Counter current value : {counter} </p>;
};

export default DisplayContainer;
