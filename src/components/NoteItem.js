import React from "react";
import Card from "react-bootstrap/Card";

const NoteItem = (props) => {
  const { note } = props;
  return (
    <div className="col-md-3">
      <div className="my-3">
        <Card>
          <Card.Body>
            <Card.Title>{note.title}</Card.Title>
            <Card.Text>{note.description}</Card.Text>
            <i className="fa-solid fa-trash mx-2"></i>
            <i className="fa-regular fa-pen-to-square mx-2"></i>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default NoteItem;
