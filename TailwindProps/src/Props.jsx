import { useState } from "react";
import React from "react";
import './App.css';

function PropDemo(props) {
    return (
        <>
            <h1>{props.heading}</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste odio impedit, ea architecto expedita quos ratione a modi? Illo explicabo velit tempore facilis enim dolorem ratione modi blanditiis quo voluptatibus.</p>
        </>
    )
}

export default PropDemo