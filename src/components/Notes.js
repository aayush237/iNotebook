import React, { useContext, useEffect, useState } from "react";
import noteContext from "../context/notes/NoteContext";
import AddNotes from "./AddNotes";
import NoteItem from "./NoteItem";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const Notes = () => {
  const context = useContext(noteContext);
  const { notes, getNotes, editNote } = context;

  const [note, setNote] = useState({ id: "", etitle: "", edescription: "", etag: "" });

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    getNotes();
    //eslint-disable-next-line
  }, []);

  const updateNote = (currentNote) => {
    handleShow();
    setNote({id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag});
  }

  const handleClick = (e) => {
    e.preventDefault();
    editNote(note.id, note.etitle, note.edescription, note.etag);
    handleClose();
    console.log("editing");
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <>
      <AddNotes />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit note </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="etitle"
            title="etitle"
            value={note.etitle}
            onChange={onChange}
            minLength={5}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDesc">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            name="edescription"
            title="edescription"
            value={note.edescription}
            onChange={onChange}
            minLength={5}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicTag">
          <Form.Label>Tag</Form.Label>
          <Form.Control
            type="text"
            name="etag"
            title="etag"
            value={note.etag}
            onChange={onChange}
          />
        </Form.Group>
      </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button disabled={note.etitle.length<5 || note.edescription.length<5} variant="primary" onClick={handleClick}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="row my-3">
        <h2>Your Notes</h2>
        <div className="container mx-2">
          {notes.length===0 && "No notes to display" }
        </div>
        {notes.map((note) => {
          return (
            <NoteItem updateNote={updateNote} key={note._id} note={note} />
          );
        })}
      </div>
    </>
  );
};

export default Notes;
