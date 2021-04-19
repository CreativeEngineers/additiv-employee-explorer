import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import SearchEmployee from "./features/searchEmployee/SearchEmployee";
import EmployeeOverview from "./components/employeeOverview/EmployeeOverview";
import { ROUTES } from "./constants/routes";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path={ROUTES.EMPLOYEE_OVERVIEW}>
            <EmployeeOverview />
          </Route>
          <Route path={ROUTES.DEFAULT}>
            <SearchEmployee />
          </Route>
          <Redirect to={ROUTES.DEFAULT} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
