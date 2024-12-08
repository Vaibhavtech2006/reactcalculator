import Display from './components/Display'
import styles from './App.module.css'
import ButtonsContainer from './components/ButtonsConatiner'
import React, { useState } from 'react';
function App() {
  let [calVal, setCalVal] = useState(""); // Initialize state for calculator value
  const onButtonClick =(buttonText) => {
    if(buttonText==="C"){
      setCalVal("");

    }
    else if(buttonText === "="){
      const result = eval(calVal)
      setCalVal(result);
    }
    else{
      const newDisplayValue=calVal+buttonText;
      setCalVal(newDisplayValue);
    }
  };

  

  return (
    <div className={styles.calculator}>
      <Display displayVal={calVal} /> {/* Pass calVal as display value */}
      <ButtonsContainer onButtonClick={onButtonClick} /> {/* Pass handleButtonClick to ButtonsContainer */}
    </div>
  );
}

export default App
