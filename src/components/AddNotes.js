import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import noteContext from "../context/notes/NoteContext";

const AddNotes = () => {
  const context = useContext(noteContext);
  const { addNote } = context;

  const [note, setNote] = useState({ title: "", description: "", tag: "" });

  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <div className="container my-3">
      <h1>Add a note</h1>

      <Form>
        <Form.Group className="mb-3" controlId="formBasicTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            title="title"
            placeholder="Enter title"
            onChange={onChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDesc">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            name="description"
            title="description"
            placeholder="Description"
            onChange={onChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicTag">
          <Form.Label>Tag</Form.Label>
          <Form.Control
            type="text"
            name="tag"
            title="tag"
            placeholder="Tag"
            onChange={onChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleClick}>
          Add Note
        </Button>
      </Form>
    </div>
  );
};

export default AddNotes;
