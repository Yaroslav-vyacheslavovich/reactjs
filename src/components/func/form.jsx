import React, { useState } from "react";
import { Button } from "./button";
import { Input } from "./input";

export const Form =() => { 
    const [name, setName] = useState("!!!")
    const [value, setValue] = useState("")
    const [messages, setMessages] = useState([])

    const handleClick = () => {
        setMessages([...messages, value])
        setValue("")
    }
    const handleChange = (ev) => {
        setValue(ev.target.value)
    }
     
    return<>
        <Input change={handleChange} value={value }/>
        <Button name={name} click={handleClick}/>
            <ul>
                { messages.map(message =>
                    <li>{message}</li>)}
            </ul>
    </>
}