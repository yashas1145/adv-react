import React from "react";

function Note (props) {
    return <div className="note">
        <h3 id="note-title">{props.title}</h3>
        <p>{props.content}</p>
    </div>
}

export default Note;