import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
function CreateArea(props) {
  //to show some animations
  const [isExpanded,setExpanded] = useState(false);
  const [note,setNote] = useState({
    title:"",
    content:""
  });
  //step 1 to add note
  function handleChange(event){
    const {name,value}= event.target;
    setNote(prevNote =>{
      return{
        ...prevNote,//will spread all the existing key value pairs existing inside note add it to final object 
        [name]: value // turns name key to just the string name for the key to actual value of name constant
      };
    });
  }
  function submitNote(event){
    props.onAdd(note);
    setNote({
    title:"",
    content:""
    });
    event.preventDefault();
    //to clear the note once added

  }
   //to show some animations
  function expand(){
    setExpanded(true);
  }
  return (
    <div>
      <form className="create-note">
      {isExpanded &&
        <input name="title" onChange={handleChange} value={note.title} placeholder="Title" />} 
        <textarea name="content" onClick=
        {expand}onChange={handleChange} value ={note.content} placeholder="Take a note..." rows={isExpanded? 3:1} />
        {/*<button onClick={submitNote}><AddIcon/></button>*/}
        {/*adding floating ui button from material UI for animations */}
        <Zoom in={isExpanded}>
        <Fab onClick={submitNote}>
        <AddIcon/>
        </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;