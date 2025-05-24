import { useState } from "react";
import Item from "./Item";

// let foodItems = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk", "Ghee"];
// let foodItems = [];

function FoodItems({ itemsProps }) {
  let [activeItems, setActiveItems] = useState([]);
  let onBuyButton = (itemPassed, eventPassed) => {
    let newItems = [...activeItems, itemPassed];
    setActiveItems(newItems);
  };
  return (
    <>
      <ul className="list-group">
        {itemsProps.map((item) => (
          // Here below we used foodItem var as an attribute and sent "item" through it, it will go in reverse i.e. Item.jsx will catch it using props. This is how props works.
          <Item
            key={item}
            foodItem={item}
            // bought={true}
            bought={activeItems.includes(item)}
            // handleBuyButton={() => console.log(`${item} being brought`)}
            handleBuyButton={(event) => {
              onBuyButton(item, event);
            }}
          ></Item>
          // <li key={item} className="list-group-item">
          //   {item}
          // </li>
        ))}
      </ul>
    </>
  );
}

export default FoodItems;
