import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const UidInputDialog = (props) => {
    let { showDialogBox,setUid,setShowDialogBox,uid } = props
//   const [uid, setUid] = useState("");

  const handleSave = (e) => {
    if(e.target.value){
        setUid(e.target.value)
        setShowDialogBox(false)
    }
  };

  return (
    <Modal show={showDialogBox}>
      <Modal.Header closeButton>
        <Modal.Title>Enter UID</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Control
          type="text"
          placeholder="UID"
          value={uid}
          onChange={(e) => setUid(e.target.value)}
        />
      </Modal.Body>
      <Modal.Footer>
        {/* <Button variant="secondary" onClick={handleClose}>
          Close
        </Button> */}
        <Button variant="primary" onClick={handleSave}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UidInputDialog;
