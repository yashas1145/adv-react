import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
// eslint-disable-next-line
import style from "../styles.module.css";
import notes from "./data/notes";

function App () {
    return <div>
        <Header/>
        <div className={style.noteContainer}>
            {notes.map(note => {
                return <Note key={note.key} noteTitle={note.title} noteDescription={note.content}/>
            })}
        </div>
        <Footer/>
    </div>
}

export default App;