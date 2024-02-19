import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
//import notes from "../notes";
import Note from "./Note";
import CreateArea from "./CreateArea";

// function createNotes(noteItem){
//     return(
//         <Note
//         key = {noteItem.key}
//         title={noteItem.title}
//         content ={noteItem.content}
//          />
//     )
// }
// 
function App() {
    const [notes,setNotes]= useState([]);
    //to add a note from the create Area passed as a prop
    //function addNote(note) note can be called anything
    function addNote(newNote){
    console.log(newNote);
    /*{title: 'www', content: 'www'}content: "www"title: "www"[[Prototype]]: Object */
    //step 3 add note in an array,that aray would need a state  const [notes,setNotes]= useState([]);
    setNotes(prevNotes =>{
        return [...prevNotes,newNote];
    });
    }
    //function to delete node of respoective id sent from props
    function deleteNote(id){
      console.log("Delete was triggerd",id);
      //delete the note using filter function
      setNotes(prevNotes => {
        return prevNotes.filter((noteItem,index)=>{
         return index!==id;
        });
      });
    }
    return ( 
        <div>
           <Header/>
          {/* step: 2 trigger a function  that pass the note back to app via props */}
          <CreateArea onAdd={addNote}/>
         {/* {notes.map(createNotes)} */}
        {/* {notes.map(noteItem => 
            <Note
            key = {noteItem.key}
            title={noteItem.title}
            content ={noteItem.content}
            /> )}  */}
            {/* step4: use the notes array to map and new note component for each note items, map works similar to filter so we can access index value */}
            {notes.map((noteItem,index)=>{
                return <Note key = {index}
                id ={index}
                 title={noteItem.title} 
                 content ={noteItem.content}
                onDelete={deleteNote} />
            })}
            {/*<Note key={1} title="Note title" content="Note content" />*/}
           <Footer/>
        </div>
    );
}
export default App;