"use client"
import { useState, useEffect } from "react";
import css1 from "./file1.module.css";
import css2 from "./file2.module.css";

const CssFile = () => {
  const [buttonClass, setButtonClass] = useState(css2.button);
  const [intervalId, setIntervalId] = useState(null);

  const changeColor = () => {
    const rand = Math.floor(Math.random() * 500);

    if (rand % 4 === 0) setButtonClass(css1.button);
    if (rand % 4 === 1) setButtonClass(css1.buttonNext);
    if (rand % 4 === 2) setButtonClass(css2.button);
    if (rand % 4 === 3) setButtonClass(css2.buttonNext);
  };

  const startColorChange = () => {
    if (!intervalId) {
      const id = setInterval(changeColor, 150);
      setIntervalId(id);
    }
  };

  const stopColorChange = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  };

  return (
    <>
      <h2>CSS | Various Style</h2>
      <p>Click Second Button To Start Color Changing.</p>
      <p>Click First Button To Stop Color Changing.</p>
      <br/>
      <button 
        onClick={stopColorChange}
        className={css1.button}
      >
        First CSS File Button
      </button>
      <br /><br />
      <button
        onClick={startColorChange}
        className={buttonClass}
      >
        Click To Alter Color
      </button>
    </>
  );
};

export default CssFile;
