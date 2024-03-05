import React from "react";
import style from "../styles.module.css";

function Note () {
    return <div className={style.note}>
        <h3>This is the note title</h3>
        <p>This is the note description</p>
    </div>
}

export default Note;