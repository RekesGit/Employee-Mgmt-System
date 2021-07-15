import "./App.css";
import Header from "./Components/Header";
import Login from "./Components/Login/Login";
import AboutUs from "./Components/AboutUs";
import { Route, Switch } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Employee from "./Components/Employee";
import Home from "./Components/Home";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" exact component={Home} />
        <Route path="/employee" exact component={Employee} />
        <Route path="/aboutus" component={AboutUs} />
      </Switch>
    </>
  );
}

export default App;
