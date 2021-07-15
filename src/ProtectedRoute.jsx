import { Route, useHistory } from "react-router-dom";

const ProtectedRoute = (props) => {
  let history = useHistory();
  return (
    <>
      {localStorage.getItem("user") ? (
        <Route path={props.path} component={props.component} />
      ) : (
        history.push("/")
      )}
    </>
  );
};

export default ProtectedRoute;
