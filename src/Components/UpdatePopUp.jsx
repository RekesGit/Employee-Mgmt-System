import { useEffect, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const UpdatePopUp = (props) => {
  let [updatee, setUpdatee] = useState({});

  useEffect(() => {
    setUpdatee(props.item);
  }, [props.item]);

  const handleClose = () => {
    props.setShowUpdatePopUp(false);
  };

  const handleChange = (event) => {
    console.log(event.target);
    setUpdatee({ ...updatee, [event.target.id]: event.target.value });
  };

  const update = () => {
    let options = {
      method: "PUT",
      body: JSON.stringify(updatee),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };
    fetch("/api/v1/update/" + updatee.id, options).then(async (response) => {
      console.log("update response", response);
      let res = await response.json();
      console.log("res", res);
      props.update(res.data);
      handleClose();
    });
  };

  return (
    <>
      <Modal show={props.show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="employee_name">
              <Form.Label>Employee Name</Form.Label>
              <Form.Control
                type="text"
                value={updatee.employee_name}
                onChange={handleChange}
                placeholder="Enter employee name"
              />
            </Form.Group>

            <Form.Group controlId="employee_salary">
              <Form.Label>Employee Salary</Form.Label>
              <Form.Control
                type="text"
                value={updatee.employee_salary}
                onChange={handleChange}
                placeholder="Enter employee salary"
              />
            </Form.Group>

            <Form.Group controlId="employee_age">
              <Form.Label>Employee Age</Form.Label>
              <Form.Control
                type="text"
                value={updatee.employee_age}
                onChange={handleChange}
                placeholder="Enter employee age"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={update}>
            Save Changes
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default UpdatePopUp;
