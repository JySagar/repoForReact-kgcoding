import styles from "./Item.module.css";

const Item = (props) => {
  const handleBuyButtonClicked = (foodItemPassed) => {
    console.log(event);
    console.log(`${foodItemPassed} is being bought`);
  };
  return (
    <>
      <li className={`${styles.jyItem} list-group-item`}>
        <spam className={`${styles.jySpan}`}>{props.foodItem}</spam>
        <button
          className={`${styles.jyButton} btn btn-info`}
          onClick={() => handleBuyButtonClicked(props.foodItem)}
        >
          Buy
        </button>
      </li>
    </>
  );
};

export default Item;
