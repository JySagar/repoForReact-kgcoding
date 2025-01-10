const ErrorMsg = ({ itemsProps }) => {
  // let foodItems = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk", "Ghee"];

  return <>{itemsProps.length === 0 && <h3>I am still Hungry</h3>}</>;
};

export default ErrorMsg;
