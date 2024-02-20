import { useCallback, useEffect, useRef, useState } from "react"

function Password() {
    const [lengthNum, setLengthNum] = useState('16')
    const [numberAllow, setNumberAllow] = useState(false)
    const [charAllow, setCharAllow] = useState(false)
    const [password, setPassword] = useState('sfsfsadfgdfvdfger')

    const passwordRef = useRef(null)

    let passwordGen = useCallback(() => {
        let pass=""
        let string="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

        if (numberAllow) string += "0123456789"

        if (charAllow) string += "+=-_@$%&^!*"

        for (let i = 1; i<= lengthNum; i++){
            let charIndex = Math.floor(Math.random() * string.length + 1)
            pass += string.charAt(charIndex)
        }
        // console.log(pass)
        setPassword(pass)
    }, [lengthNum, numberAllow, charAllow, setPassword])

    useEffect(() => {
        passwordGen()
    }, [lengthNum, numberAllow, charAllow, passwordGen])

    const copyPassword = useCallback(() => {
        passwordRef.current?.select();
        passwordRef.current?.setSelectionRange(0, 101)
        window.navigator.clipboard.writeText(password)
    }, [password])

    return (
        <div className="w-full h-screen bg-cyan-700 p-0 m-0 ">
            <div className="flex flex-col bg-black text-white w-[500px] mx-auto my-0  rounded-lg drop-shadow-lg">
                <h1 className="text-center p-3 text-xl">Password Generator</h1>
                <form>
                    <div className=" flex flex-row mx-auto justify-center">
                        <input 
                        type="text"
                        className="w-[70%] outline-none rounded-l-lg p-2 text-black" 
                        value={password}
                        ref={passwordRef}
                        readOnly/>
                        <button 
                        onClick={copyPassword}
                        type="submit"
                        className="w-[60px] bg-cyan-700 rounded-r-lg">Copy</button>
                    </div>
                    <div className="flex flex-row m-2 gap-2 justify-center">
                        <input 
                        type="range" 
                        min={1} 
                        max={100} 
                        value={lengthNum}
                        onChange={(e) => {setLengthNum(e.target.value)}}
                        className="accent-cyan-700 w-[140px] cursor-pointer"/>
                        <label>Length({lengthNum})</label>
                        <input 
                        type="checkbox" 
                        value={numberAllow}
                        onChange= {() => {
                            setNumberAllow((prev) => !prev)
                            }}/>
                        <label>Numbers</label>
                        <input 
                        type="checkbox" 
                        value={charAllow}
                        onChange= {() => {
                            setCharAllow((prev) => !prev)
                        }}/>
                        <label>Characters</label>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Password