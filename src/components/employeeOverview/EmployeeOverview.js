import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import { useHistory } from "react-router-dom";

import PageTitle from "../pageTitle/PageTitle";
import Title from "../title/Title";
import styles from "./EmployeeOverview.module.css";
import {
  fetchEmployeeDetails,
  getEmployee,
  resetEmployeeDetails
} from "../../features/searchEmployee/searchEmployeeSlice";
import TXT_INFO from '../../constants/textInfo';

const EmployeeOverview = () => {
  const dispatch = useDispatch();
  const employee = useSelector(getEmployee);
  const history = useHistory();
  const { name } = employee;

  /**
   * This method will trigger the backend api call with the respective selected name
   * and this will subsequently will update the employee overview of the selected employee
   * @param {string} name 
   */
  const showDetails = (name) => {
    if (name) {
      dispatch(fetchEmployeeDetails(name));
    }
  };

  /**
   * This method will display the subordinates of the selected employee
   * @param {string} param0 
   * @returns {ReactComponent}
   */
  const DisplaySubordinates = ({ name }) => {
    const employeeInfo = employee[name];
    return employeeInfo.map((employee, index) => {
      if (index === 1) {
        return (
          employee["direct-subordinates"] &&
          employee["direct-subordinates"].map((subordinate, index) => {
            return (
              <h4
                onClick={() => showDetails(subordinate)}
                className={styles.nameStyle}
                key={index}
              >
                {subordinate}
              </h4>
            );
          })
        );
      }
      return null;
    });
  };

  /**
   * This method is the fallback to redirect back to home page. Improvements can be
   * done in a way that not to reset the employee state rather handle in different way if we scale
   * the application further
   */
  const goBack = () => {
    dispatch(resetEmployeeDetails());
    history.goBack();
  };

  return (
    <Container maxWidth="md" className={styles.containerStyle}>
      <PageTitle text={TXT_INFO.employeeOverview} />
      <div className={styles.txtContainer}>
        <Title text={TXT_INFO.subordinatesOfEmployee} />
        {name && <span className={styles.nameColor}>{name}:</span>}
      </div>
      {employee[name] && <DisplaySubordinates name={name} />}
      <Link className={styles.linkButtonStyle} component="button" onClick={goBack}>
        {TXT_INFO.goBack}
      </Link>
    </Container>
  );
};

export default EmployeeOverview;
