import styles from "./WelcomeMessage.module.css";

const WelcomeMessage = ({ todoItemsPassed }) => {
  return (
    todoItemsPassed.length === 0 && (
      <p className={styles.welcome}>Enjoy your day</p>
    )
  );
};

export default WelcomeMessage;
