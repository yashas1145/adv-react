import React from "react";

function Input (props) {
    return <input type={props.type || null} id={props.id || null} placeholder={props.placeholder || null} value={props.value || null}/>
}

export default Input;