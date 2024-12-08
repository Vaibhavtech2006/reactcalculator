import React from "react";
import styles from "./ButtonsContainer.module.css";

const ButtonsContainer = ({ onButtonClick }) => {
  const buttonNames = ['C', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '=', '9', '0', '.'];

  return (
    <div className={styles.buttonsContainer}>
      {buttonNames.map((buttonName, index) => (  // Use 'index' here
        <button
          key={index}  // Use 'index' as the key
          className={styles.button}
          onClick={() => onButtonClick(buttonName)}  // Pass buttonName on click
        >
          {buttonName}
        </button>
      ))}
    </div>
  );
};

export default ButtonsContainer;

