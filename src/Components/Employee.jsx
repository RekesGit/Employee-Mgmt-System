import { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import DeletePopUp from "./DeletePopUp";
import EmployeePopUp from "./EmployeePopUp";
import UpdatePopUp from "./UpdatePopUp";

const Employee = () => {
  let [employee, setEmployee] = useState([]);
  let [show, setShow] = useState(false);
  let [showUpdatePopUp, setShowUpdatePopUp] = useState(false);
  let [delShow, setDelShow] = useState(false);
  let [edit, setEdit] = useState([]);
  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/employee").then((response) => {
      response.json().then((data) => {
        console.log("data", data);
        setEmployee(data);
        // console.log("employee", employee);
      });
    });
  }, []);

  const handleClick = (e, item) => {
    if (item) {
      setEdit(item);
      setShowUpdatePopUp(true);
    } else {
      setShow(true);
      setEdit({});
    }
  };

  // const handleDelete = (e, item) => {
  //   setDelShow(true);
  // };

  const save = (newEmp) => {
    console.log("newEmp", newEmp);
    let newEmpList = [...employee, newEmp];
    console.log("newEmpList", newEmpList);
    setEmployee(newEmpList);
  };

  const del = (e) => {
    fetch(`/api/v1/delete/${deleteId}`, {
      method: "DELETE",
    }).then((response) => {
      let newPost = employee.filter((item) => {
        return item.id != deleteId;
      });
      setEmployee(newPost);
      setDelShow(false);
    });
  };

  const update = (updatedPost) => {
    var foundIndex = employee.findIndex((x) => x.id == updatedPost.id);
    employee[foundIndex] = updatedPost;
    setEmployee(employee);
  };

  return (
    <>
      {/* {JSON.stringify(employee)} */}
      <EmployeePopUp
        show={show}
        setShow={setShow}
        save={save}

        // item={edit}
      />
      <DeletePopUp delShow={delShow} setDelShow={setDelShow} onDelete={del} />
      <UpdatePopUp
        show={showUpdatePopUp}
        item={edit}
        update={update}
        setShowUpdatePopUp={setShowUpdatePopUp}
      />
      <h1 style={{ textAlign: "center" }}>Employee Detail List</h1>
      <div style={{ textAlign: "right" }}>
        <Button onClick={handleClick} variant="success">
          + Add Employee
        </Button>
      </div>
      <br />
      <Table striped bordered hover variant="light">
        <thead>
          <tr>
            <th>S.N</th>
            <th>Name</th>
            <th>Salary</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employee.map((item, index) => {
            let id = index + 1;
            return (
              <tr>
                <td>{id}</td>
                <td>{item.employee_name}</td>
                <td>{item.employee_salary}</td>
                <td>{item.employee_age}</td>
                <td>
                  <Button
                    onClick={(e) => handleClick(e, item)}
                    variant="primary"
                  >
                    Update
                  </Button>
                  <Button
                    onClick={() => {
                      setDeleteId(item.id);
                      setDelShow(true);
                    }}
                    variant="danger"
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default Employee;
