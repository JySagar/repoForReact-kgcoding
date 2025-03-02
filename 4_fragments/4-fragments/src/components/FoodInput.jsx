import styles from "./FoodInput.module.css";

const handleInputFieldChange = (inputChangePassed) => {
  return console.log(inputChangePassed.target.value);
};

const FoodInput = () => {
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
