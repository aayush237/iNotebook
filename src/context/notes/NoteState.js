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
        {
          "_id": "641174e578a4ea5ce091bb1",
          "user": "640f10977223206ceda5a518",
          "title": "ijkl",
          "description": "new note2",
          "tag": "personal",
          "date": "2023-03-15T07:33:57.161Z",
          "__v": 0
        }
      ]

    const [notes, setNotes] = useState(notesInitial)

    return (
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;