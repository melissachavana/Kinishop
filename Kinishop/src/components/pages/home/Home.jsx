import "./Home.css";

import { useState } from "react";

export const Home = () => {
  const [counter, setCounter] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  const sumar = () => {
    setCounter(counter + 1);
  };

  const switchMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div>
      <h1 className="title">Este es el título de home</h1>
      <h4>{counter}</h4>
      <button onClick={sumar}>Agregar item</button>
      <button onClick={switchMode}>Cambiar modo</button>
    </div>
  );
};
