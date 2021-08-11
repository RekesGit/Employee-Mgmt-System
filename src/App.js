import "./App.css";
import Header from "./Components/Header";
import Login from "./Components/Login/Login";
import AboutUs from "./Components/AboutUs";
import { Route, Switch } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Employee from "./Components/Employee";
import NotFound from "./Components/NotFound";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Login} />
        <ProtectedRoute path="/employee" exact component={Employee} />
        <ProtectedRoute path="/aboutus" component={AboutUs} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

export default App;
