import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import noteContext from "../context/notes/NoteContext";

const NoteItem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;

  const { note, updateNote } = props;
  return (
    <div className="col-md-3">
      <div className="my-3">
        <Card>
          <Card.Body>
            <Card.Title>{note.title}</Card.Title>
            <Card.Text>{note.description}</Card.Text>
            <i className="fa-solid fa-trash mx-2" onClick={()=>{deleteNote(note._id)}}></i>
            <i className="fa-regular fa-pen-to-square mx-2" onClick={()=>{updateNote(note)}}></i>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default NoteItem;
