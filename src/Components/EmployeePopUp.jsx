import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const EmployeePopUp = (props) => {
  let [addemp, setAddemp] = useState({
    id: "",
    employee_name: "",
    employee_salary: "",
    employee_age: "",
  });

  // if (props.item && props.item.id != addemp.id) {
  //   setAddemp(props.item);
  // }

  const handleClose = () => {
    props.setShow(false);
  };

  const handleChange = (event) => {
    console.log(event.target);
    setAddemp({ ...addemp, [event.target.id]: event.target.value });
  };

  const save = () => {
    let options = {
      method: "POST",
      body: JSON.stringify(addemp),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };
    fetch("http://localhost:3001/employee", options).then(async (response) => {
      console.log("response save", response);
      let res = await response.json();
      console.log(res);
      props.save(res);
      handleClose();
    });
  };

  return (
    <>
      <Modal show={props.show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="employee_name">
              <Form.Label>Employee Name</Form.Label>
              <Form.Control
                type="text"
                value={addemp.employee_name}
                onChange={handleChange}
                placeholder="Enter employee name"
              />
            </Form.Group>

            <Form.Group controlId="employee_salary">
              <Form.Label>Employee Salary</Form.Label>
              <Form.Control
                type="text"
                value={addemp.employee_salary}
                onChange={handleChange}
                placeholder="Enter employee salary"
              />
            </Form.Group>

            <Form.Group controlId="employee_age">
              <Form.Label>Employee Age</Form.Label>
              <Form.Control
                type="text"
                value={addemp.employee_age}
                onChange={handleChange}
                placeholder="Enter employee age"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={save}>
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

export default EmployeePopUp;
