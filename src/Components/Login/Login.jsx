import logo from "./user.svg";
import "./Login.css";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const Login = () => {
  let [user, setUser] = useState({
    login: "",
    password: "",
  });

  const history = useHistory();

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(event);
    // console.log(user);
    localStorage.setItem("user", user.login);
    history.push({ pathname: "employee", data: user });
  };

  useEffect(() => {
    if (localStorage.getItem("user")) {
      history.push("employee");
    }
  }, [history]);

  return (
    <>
      <div class="wrapper fadeInDown">
        <div id="formContent">
          <div class="fadeIn first">
            <img src={logo} id="icon" alt="User Icon" />
          </div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id="login"
              class="fadeIn second"
              name="login"
              placeholder="login"
              onChange={handleChange}
              value={user.login}
            />
            <input
              type="password"
              id="password"
              class="fadeIn third"
              name="password"
              placeholder="password"
              onChange={handleChange}
              value={user.password}
            />
            <input type="submit" class="fadeIn fourth" value="Log In" />
          </form>

          <div id="formFooter">
            <a class="underlineHover" href="#">
              Forgot Password?
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
