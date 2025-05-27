// import "./App.css";
import { useState } from "react";
import styles from "./App.module.css";
import ButtonsContainer from "./components/ButtonsContainer";
import Display from "./components/Display";

function App() {
  const [calVal, setCalVal] = useState("");
  const onButtonClickFn = (buttonText) => {
    console.log(buttonText);
  };

  return (
    <div className={styles.calculator}>
      <Display displayValue={calVal}></Display>
      <ButtonsContainer onButtonClick={onButtonClickFn}></ButtonsContainer>
    </div>
  );
}

export default App;
