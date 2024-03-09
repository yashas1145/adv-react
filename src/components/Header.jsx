import React, { useState } from "react";

const date = new Date();

function Header () {
    // let [count, setCount] = useState(0);
    let [time, setTime] = useState(date.toLocaleTimeString());

    // function increment () {
    //     setCount(count+1);
    // }

    // function decrement () {
    //     setCount(count-1);
    // }

    function updateTime () {
        setTime(new Date().toLocaleTimeString());
    }

    setInterval(updateTime, 1000);

    return <header>
        <p>Keeper</p>
        {/* <span id="count">{count}</span>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button> */}
        <span id="time">{time}</span>
    </header>
}

export default Header;