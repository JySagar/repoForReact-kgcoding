import styles from "./Item.module.css";

const Item = ({ foodItem, bought, handleBuyButton }) => {
  // const handleBuyButtonClicked = (foodItemPassed) => {
  // console.log(event);
  // console.log(`${foodItemPassed} is being bought`);
  // };
  return (
    <>
      <li className={`${styles.jyItem} list-group-item ${bought && "active"}`}>
        <span className={`${styles.jySpan}`}>{foodItem}</span>
        <button
          className={`${styles.jyButton} btn btn-info`}
          // onClick={() => handleBuyButtonClicked(props.foodItem)}
          onClick={handleBuyButton}
        >
          Buy
        </button>
      </li>
    </>
  );
};

export default Item;
