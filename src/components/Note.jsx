import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';


function Note(props) {

    function handleClick(){
        props.onDelete(props.id);// this will trigger funtion delteNote from APP
    }
    return ( 
    <div className="note">
    <h1>{props.title}</h1>
    <p>{props.content}</p> 
    {/* to handle delete 
    <button onClick ={handleClick}>DELETE</button>*/}
    <button onClick ={handleClick}><DeleteIcon/></button>
    </div>
    );
    }

    export default Note;