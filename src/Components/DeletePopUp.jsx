import { Button, Modal } from "react-bootstrap";

const DeletePopUp = (props) => {
  const handleClose = () => {
    props.setDelShow(false);
  };

  const del = () => {
    props.onDelete();
  };

  return (
    <>
      <Modal show={props.delShow} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Notice</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete ?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={del}>
            Delete
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeletePopUp;
