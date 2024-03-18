import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notesFromJson from "../data/notes";

function App () {
    const [notes, setNotes] = useState(notesFromJson);
    const [note, setNote] = useState({"key": notes.length+1,"title": "", "content": ""});

    function handleInputChange (event) {
        const {name, value} = event.target;
        setNote(prevNote => ({...prevNote, [name]: value}));
        console.log(note);
    }

    function handleClick () {
        setNotes(prevNotes => [...prevNotes, note]);
        setNote({"key": notes.length+1, "title": "", "content": ""});
    }

    return <div>
        <Header/>
        <div className="note-container">
            {notes.map((note) => {
                return <Note key={note.key} title={note.title} content={note.content}/>
            })}
            <div className="note">
                <input onChange={handleInputChange} name="title" type="text" placeholder="Note title" value={note.title}/>
                <input onChange={handleInputChange} name="content" type="text" placeholder="Note description" value={note.desc}/>
                <button onClick={handleClick}>Add note</button>
            </div>
        </div>
        <Footer/>
    </div>
}

export default App;