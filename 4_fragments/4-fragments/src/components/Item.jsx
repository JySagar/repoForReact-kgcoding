import style from "./Item.module.css";

const Item = (props) => {
  return (
    <>
      <li className={`${style.jyItem} list-group-item`}>
        <spam className={`${style.jySpan}`}>{props.foodItem}</spam>
      </li>
    </>
  );
};

export default Item;
