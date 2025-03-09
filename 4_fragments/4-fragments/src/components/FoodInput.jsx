import styles from "./FoodInput.module.css";

const FoodInput = ({ handleInputFieldChange }) => {
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
      onChange={handleInputFieldChange}
    />
  );
};

export default FoodInput;
