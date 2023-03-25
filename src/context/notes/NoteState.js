import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) => {
    const notesInitial = [
        {
          "_id": "641174e578a4ea5ce91b5b1",
          "user": "640f10977223206ceda5a518",
          "title": "ijkl",
          "description": "new note2",
          "tag": "personal",
          "date": "2023-03-15T07:33:57.161Z",
          "__v": 0
        },
        {
          "_id": "641174e578a4ea5c091b5b1",
          "user": "640f10977223206ceda5a518",
          "title": "ijkl",
          "description": "new note2",
          "tag": "personal",
          "date": "2023-03-15T07:33:57.161Z",
          "__v": 0
        },
        {
          "_id": "641174e578a4eace091b5b1",
          "user": "640f10977223206ceda5a518",
          "title": "ijkl",
          "description": "new note2",
          "tag": "personal",
          "date": "2023-03-15T07:33:57.161Z",
          "__v": 0
        },
        {
          "_id": "641174e578aea5ce091b5b1",
          "user": "640f10977223206ceda5a518",
          "title": "ijkl",
          "description": "new note2",
          "tag": "personal",
          "date": "2023-03-15T07:33:57.161Z",
          "__v": 0
        },
        {
          "_id": "641174e57a4ea5ce091b5b1",
          "user": "640f10977223206ceda5a518",
          "title": "ijkl",
          "description": "new note2",
          "tag": "personal",
          "date": "2023-03-15T07:33:57.161Z",
          "__v": 0
        },
        {
          "_id": "641174e578a4ea5ce0915b1",
          "user": "640f10977223206ceda5a518",
          "title": "ijkl",
          "description": "new note2",
          "tag": "personal",
          "date": "2023-03-15T07:33:57.161Z",
          "__v": 0
        },
        
      ]

    const [notes, setNotes] = useState(notesInitial)

    // Add a note
    const addNote = (title, description, tag) => {
      let note = {
        "_id": "641174e578a4ea5ce091bb1",
        "user": "640f10977223206ceda5a518",
        "title": title,
        "description": description,
        "tag": tag,
        "date": "2023-03-15T07:33:57.161Z",
        "__v": 0
      }
      setNotes(notes.concat(note));
    }
    // Delete a note
    const deleteNote = (id) => {
      const newNotes = notes.filter((note) => { return note._id !== id})
      setNotes(newNotes);
    }
    // Edit a note
    const editNote = () => {
      
    }

    return (
        <NoteContext.Provider value={{notes, addNote, editNote, deleteNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;