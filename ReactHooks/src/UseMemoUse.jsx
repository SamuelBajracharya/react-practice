import { useMemo, useState } from "react"

export default function UseMemoUse() {
    const [number, setNumber] = useState(1)
    const [dark, setDark] = useState(false)
    const setColor = {
        backgroundColor: dark ? 'black' : 'white',
        color: dark ? 'white' : 'black'
    }
    const doubleNumber = useMemo(() => {
        return doubleNum(number)
    },[number])
    return(
        <>
            <input type="number" value={number} 
            onChange={(e) => {
                setNumber(parseInt(e.target.value))
            }}/>
            <button onClick={() => setDark((prev) => !prev)}>Theme</button>
            <h1 style={setColor}>{doubleNumber}</h1>
        </>
    )
}
const doubleNum = (num) => {
    for (let i = 0; i < 100000000; i++) {}
    return num*2
}