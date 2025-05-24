import styles from "./FoodInput.module.css";

const FoodInput = ({ handleKeyDown }) => {
  // const handleInputFieldChange = (event) => {
  //   return console.log(event.target.value);
  // };
  return (
    <input
      type="text"
      placeholder="Enter Food Item here"
      className={styles.foodInput}
      // onChange={(event) => {
      //   handleInputFieldChange(event);
      // }}
      // onChange={handleInputFieldChange}
      onKeyDown={handleKeyDown}
    />
  );
};

export default FoodInput;
