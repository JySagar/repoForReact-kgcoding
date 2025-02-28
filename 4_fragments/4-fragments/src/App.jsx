import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./components/FoodItems";
import ErrorMsg from "./components/ErrorMsg";
import Container from "./components/Container";

function App() {
  let foodItems = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk", "Ghee"];
  // let foodItems = [];

  // The below "if-else" will work but it will replace all so below we will see another option of doing it i.e. using "ternary operators"
  // if (foodItems.length === 0) {
  //   return <h3>I am still hungry</h3>;
  // }

  // This is done using "ternary operators" it is good but there is still a shortcut we can use i.e. using "logical operators"
  // let emptyMsg = foodItems.length === 0 ? <h3>I am still Hungry</h3> : null;

  return (
    <>
      {/* Here we added react freagment bcoz App can render only one element so
      since here are two i.e. h1 an ul so used to wrap them in a div but since
      it will add another node to the DOM which is here div so we add react
      fragment which doesnot affect the DOM. We can also do it by only using the
      angular braces. */}
      <Container>
        <h1 className="jyFoodHeading">Healthy Food</h1>
        {/* {emptyMsg} */}

        {/* commented out the upper line, here below we will use the logical operators which will do the work in one line : Here acc to && operator if both sides are true then only it will return, here if left side is true then right side is already true so it will execute it so right will get print as it is inside heading tags. But in case of false if the left side is false the control will not go the right side the condition will be ignored which will remove unnecessary rendering as it is not executed instead of keeping it there but not showing it to the client/user but what it does is add extra structure to DOM which will after the browser performance and control will go to the next line. */}

        {/* {foodItems.length === 0 && <h3>I am still Hungry</h3>} */}
        <ErrorMsg itemsProps={foodItems} />
        <FoodItems itemsProps={foodItems} />

        {/* <ul className="list-group">
        {foodItems.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul> */}
      </Container>
      <Container>
        <p>Above is the list of healthy foods that are good for our health</p>
      </Container>
    </>
  );
}

export default App;

// 9126548094
