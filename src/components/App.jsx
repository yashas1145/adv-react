import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../data/notes";
import Login from "./Login";

var loggedIn = true;
var registered = false;

function renderNote () {
    return <div className="note-container">
        {notes.map((note) => {
            return <Note key={note.key} title={note.title} content={note.content}/>
        })}
    </div>
}

function renderForm() {
    return <div>
        <Login registered={registered}/>
    </div>
}

function App () {
    return <div>
        <Header/>
        {loggedIn ? renderNote() : renderForm()}
        <Footer/>
    </div>
}

export default App;