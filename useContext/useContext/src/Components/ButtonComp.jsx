import React, { useContext } from "react";
import { DarkTheme } from "../App";

function ButtonComp() {
  const [toggleDark, setToggleDark] = useContext(DarkTheme);

  const ThemeToggle = () =>{
    setToggleDark((prevState) => !prevState)
  }
  return (
    <div>
      <button
        onClick={ThemeToggle}
        className="w-[150px] h-[80px]"
      >
        {toggleDark ? "Toggle Light" : "Toggle Dark"}
      </button>
    </div>
  );
}

export default ButtonComp;
