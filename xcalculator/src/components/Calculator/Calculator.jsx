import React, { useState } from 'react';
import { evaluate } from "mathjs";
import styles from "./Calculator.module.css";

const Calculator = () => {
  const [result, setResult] = useState("");
  const [value, setValue] = useState("");

  const handleClick = (event) => {
    const val = event.target.value;
    if (val === "C") {
      setValue("");
      setResult("");
    } else if(val === "=") {
      try {
        const res = evaluate(value);
        setResult(res !== undefined ? res.toString() : "Error");
      } catch (error) {
        setResult("Error");
      }
    } else {
      setValue((prevState) => prevState + val);
    }
  }

  const handleChange = (event) => {
    setValue((prevState) => prevState + event.target.value);
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.appName}>React Calculator</h2>
      <input type="text" name="display" value={value} id={styles.display} onChange={handleChange}/>
      {!!result && (
        <div className={styles.result}>{result}</div>
      )}
      <div className={styles.grid}>
        <button type="button" className={styles.button} value="7" onClick={handleClick}>7</button>
        <button type="button" className={styles.button} value="8" onClick={handleClick}>8</button>
        <button type="button" className={styles.button} value="9" onClick={handleClick}>9</button>
        <button type="button" className={styles.button} value="+" onClick={handleClick}>+</button>
        <button type="button" className={styles.button} value="4" onClick={handleClick}>4</button>
        <button type="button" className={styles.button} value="5" onClick={handleClick}>5</button>
        <button type="button" className={styles.button} value="6" onClick={handleClick}>6</button>
        <button type="button" className={styles.button} value="-" onClick={handleClick}>-</button>
        <button type="button" className={styles.button} value="1" onClick={handleClick}>1</button>
        <button type="button" className={styles.button} value="2" onClick={handleClick}>2</button>
        <button type="button" className={styles.button} value="3" onClick={handleClick}>3</button>
        <button type="button" className={styles.button} value="*" onClick={handleClick}>*</button>
        <button type="button" className={styles.button} value="C" onClick={handleClick}>C</button>
        <button type="button" className={styles.button} value="0" onClick={handleClick}>0</button>
        <button type="button" className={styles.button} value="=" onClick={handleClick}>=</button>
        <button type="button" className={styles.button} value="/" onClick={handleClick}>/</button>
      </div>
    </div>
  )
}

export default React.memo(Calculator);