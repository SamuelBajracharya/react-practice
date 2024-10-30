import { useRef, useState } from "react"


export default function UseRefUse() {
    const [name, setName] = useState('')
    const fieldSet = useRef()

    function setField() {
        fieldSet.current.focus()
    }
    return (
        <>
            <input type="text" ref={fieldSet} onChange={(e) => setName(e.target.value)}/>
            <h1>My name is {name}.</h1>
            <button onClick={setField}>Name</button>
        </>
    )
}