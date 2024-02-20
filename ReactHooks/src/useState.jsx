import { useState } from "react";
import './App.css'


function BasicReact(){
    let [valueNum, setValue] = useState(0)

    const addValue = () => {
        if (valueNum < 20){
            setValue(valueNum + 1);
        }
    }

    const subValue = () => {
        if (valueNum > 0){
            setValue(valueNum - 1);
        }
    }
    return (
        <>
        <h1>Program Counter: {valueNum}</h1>
        <button onClick={addValue}>Add</button>
        <button onClick={subValue}>Subtract</button>
        </>
    )
}

export default BasicReact