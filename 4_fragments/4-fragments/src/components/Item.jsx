const Item = (props) => {
  return (
    <>
      <li className="list-group-item jyItem">
        <spam className="jySpan">{props.foodItem}</spam>
      </li>
    </>
  );
};

export default Item;
