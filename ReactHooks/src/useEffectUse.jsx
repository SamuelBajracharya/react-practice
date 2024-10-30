import { useEffect, useState } from "react"


export default function UseEffectUse() {
    const [properties, setProperties] = useState('Posts')
    const [data, setData] = useState([])
    const [windowScreen, setWindowScreen] = useState(window.innerWidth)

    useEffect(() => {
        window.addEventListener('resize', () => {
            setWindowScreen(window.innerWidth)
        })
    },[])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${properties}`)
        .then((res) => res.json())
        .then((data) => setData(data))
    },[properties])
    return(
        <>
        <h2>{windowScreen}</h2>
        <button onClick={() => setProperties('Posts')}>Posts</button>
        <button onClick={() => setProperties('Users')}>Users</button>
        <button onClick={() => setProperties('Comments')}>Comments</button>
        <h1>{properties}</h1>
        {data.map(data => {
            return(
                <pre>
                    {JSON.stringify(data)}
                </pre>
            )
        })}
        </>
    )
}