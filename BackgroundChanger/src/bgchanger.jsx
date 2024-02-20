import { useState } from "react"

function BgChanger() {
  let [colors, setcolors] = useState('White')
  return (
    <div className=" w-full h-screen"
    style={{backgroundColor: colors}}>
      <div className=" w-full flex justify-center pt-12 flex-col items-center">
        <img src="https://cdn-icons-png.flaticon.com/512/189/189298.png"
        className=" w-28"/>
        <h2 className=" text-2xl font-bold p-4 text-gray-400 shadow-2xl">BACKGROUND CHANGER</h2>
      </div>
      <div className=" fixed flex bg-slate-400 bottom-12 w-10/12 items-center flex-col inset-x-28 rounded-xl">
        <div className=" flex justify-around p10 gap-4 items-center w-full justify-self-center rounded-xl h-16 ">
            <button 
            onClick={() => setcolors("red")}
            className=" rounded-2xl border border-black w-16 p-2"
            style={{backgroundColor: "red"}}>Red</button>
            <button 
            onClick={() => setcolors("blue")}
            className=" rounded-2xl border border-black w-16 p-2"
            style={{backgroundColor: "blue"}}>Blue</button>
            <button 
            onClick={() => setcolors("green")}
            className=" rounded-2xl border border-black w-16 p-2"
            style={{backgroundColor: "green"}}>Green</button>
            <button 
            onClick={() => setcolors("yellow")}
            className=" rounded-2xl border border-black w-16 p-2"
            style={{backgroundColor: "yellow"}}>Yellow</button>
            <button 
            onClick={() => setcolors("pink")}
            className=" rounded-2xl border border-black w-16 p-2"
            style={{backgroundColor: "Pink"}}>Pink</button>
            <button 
            onClick={() => setcolors("purple")}
            className=" rounded-2xl border border-black w-16 p-2"
            style={{backgroundColor: "Purple"}}>Purple</button>
            <button 
            onClick={() => setcolors("orange")}
            className=" rounded-2xl border border-black w-16 p-2"
            style={{backgroundColor: "orange"}}>Orange</button>
            <button 
            onClick={() => setcolors("brown")}
            className=" rounded-2xl border border-black w-16 p-2"
            style={{backgroundColor: "Brown"}}>Brown</button>
            <button 
            onClick={() => setcolors("black")}
            className=" rounded-2xl border border-white w-16 p-2 text-white"
            style={{backgroundColor: "Black"}}>Black</button>
            <button 
            onClick={() => setcolors("white")}
            className=" rounded-2xl border border-black w-16 p-2"
            style={{backgroundColor: "White"}}>White</button>
           
        </div>
      </div>
    </div>
  )
  
}

export default BgChanger
