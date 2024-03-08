import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../data/notes";

function App () {
    return <div>
        <Header/>
        <div className="note-container">
            {notes.map((note) => {
                return <Note key={note.key} title={note.title} content={note.content}/>
            })}
        </div>
        <Footer/>
    </div>
}

export default App;