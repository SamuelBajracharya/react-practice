import React, { createContext, useState } from "react";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";

export const DarkTheme = React.createContext();

function App() {
  const [toggleDark, setToggleDark] = useState(false);

  return (
    <DarkTheme.Provider value={[toggleDark, setToggleDark]}>
      <BrowserRouter>
        {/* <NavBar /> */}
        <div
          className={`${toggleDark ? "bg-black text-white" : "bg-white text-black"} h-screen
        `}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/about" element={<About />} /> */}
          </Routes>
        </div>
      </BrowserRouter>
    </DarkTheme.Provider>
  );
}

export default App;
