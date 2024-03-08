import React from "react";
import style from "../styles.module.css";

function Note (props) {
    return <div className={style.note}>
        <h3>{props.noteTitle}</h3>
        <p>{props.noteDescription}</p>
    </div>
}

export default Note;