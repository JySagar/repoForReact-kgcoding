import { useContext } from "react";
import styles from "./WelcomeMessage.module.css";
import { todoItemsContext } from "../store/todoItemsStore";

const WelcomeMessage = () => {
  const todoItemsPassed = useContext(todoItemsContext);
  return (
    // Below we had to put ".length" with todoItemsPassed because alone todoItemsPassed is an empty array and empty array is also a true value. so we checked for its length which means if length is 0 i.e. no todoItemsPassed then it becomes equale to zero and it becomes true.
    todoItemsPassed.length === 0 && (
      <p className={styles.welcome}>Enjoy your day</p>
    )
  );
};

export default WelcomeMessage;
