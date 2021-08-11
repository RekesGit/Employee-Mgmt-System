import { Navbar, Nav } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const Header = () => {
  let user = localStorage.getItem("user");
  let history = useHistory();

  const logout = () => {
    localStorage.removeItem("user");
    history.push("/");
  };
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>EMS</Navbar.Brand>
        <Nav className="mr-auto">
          {user ? (
            <>
              <Nav.Link href="/employee">Employee</Nav.Link>
              <div style={{ marginLeft: "985px", textAlign: "right" }}>
                <Nav.Link href="/" onClick={logout}>
                  Welcome {user}, <b>LogOut</b>
                </Nav.Link>
              </div>
            </>
          ) : (
            <div></div>
          )}
        </Nav>
      </Navbar>
    </>
  );
};

//at start project runs home and when clicked on login part

// import { useState } from "react";
// import { Button, Navbar, Nav } from "react-bootstrap";
// import { useHistory } from "react-router-dom";
// import Login from "./Login/Login";

// const Header = () => {
//   let [user, setUser] = useState(null);
//   let [isLoggedIn, setLogin] = useState(false);
//   console.log("user", user);
//   let history = useHistory();

//   const showLogin = () => {
//     setLogin(true);
//     // let usr = localStorage.getItem("user");
//     // console.log("user in login", usr);
//     // setUser(usr);
//   };

//   const login = (user) => {
//     localStorage.setItem("user", user);
//     setUser(user);
//     setLogin(false);
//     history.push({ pathname: "aboutus", data: user });
//   };

//   const logout = () => {
//     localStorage.removeItem("user");
//     history.push("/");
//   };
//   return (
//     <>
//       <Navbar bg="dark" variant="dark">
//         <Navbar.Brand>EMS</Navbar.Brand>
//         <Nav className="mr-auto">
//           {user ? (
//             <>
//               <Nav.Link href="/">Home</Nav.Link>
//               <Nav.Link href="/aboutus">About Us</Nav.Link>
//               <Nav.Link href="/employee">Employee</Nav.Link>
//               <div style={{ marginLeft: "920px", textAlign: "right" }}>
//                 <Nav.Link href="/" onClick={logout}>
//                   Welcome {user}
//                   <br />
//                   LogOut
//                 </Nav.Link>
//               </div>
//             </>
//           ) : (
//             <div style={{ marginLeft: "1065px" }}>
//               <Button variant="outline-info" onClick={showLogin}>
//                 Login
//               </Button>
//             </div>
//           )}
//         </Nav>
//         {/* <Form inline>
//           <Button variant="outline-info" href="/login">
//             Login
//           </Button>
//         </Form> */}
//       </Navbar>
//       {isLoggedIn && <Login login={login} />}
//     </>
//   );
// };

export default Header;
