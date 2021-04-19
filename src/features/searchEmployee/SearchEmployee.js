import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Alert from "@material-ui/lab/Alert";

import {
  fetchEmployeeDetails,
  getEmployee,
  hasError,
} from "./searchEmployeeSlice";
import PageTitle from "../../components/pageTitle/PageTitle";
import styles from "./SearchEmployee.module.css";
import { ROUTES } from "../../constants/routes";
import TXT_INFO from "../../constants/textInfo";

const SearchEmployee = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [searchValue, setSearchValue] = useState(""); // Input serach value
  const [isSubmitTriggered, setIsSubmitTriggered] = useState(false); // To handle the submit button trigger
  const [isButtonDisabled, setIsButtonDisabled] = useState(true); // To handle the disable/enable the submit button
  const [isEmployeeAvailable, setIsEmployeeAvailable] = useState(true); // To identify whether the employee found or not

  const employee = useSelector(getEmployee);
  const isError = useSelector(hasError);

  /**
   * This method handle the input search value
   * @param evt event object
   * @returns empty
   */
  const handleChange = useCallback((evt) => {
    setSearchValue(evt.target.value);
    setIsButtonDisabled(false);
  }, []);

  /**
   * This method will trigger on click of search button or
   * after pressing the enter
   * @param evt event object
   */
  const handleSubmit = useCallback((evt) => {
    evt.preventDefault();
    setIsSubmitTriggered(true);
  }, []);

  /**
   * This useEffect method call the async function to get the reponse
   * from the backend and will disable the search button as soon as if
   * there is no text present
   */
  useEffect(() => {
    if (searchValue && isSubmitTriggered) {
      dispatch(fetchEmployeeDetails(searchValue));
      setIsSubmitTriggered(false);
    }
    if (!searchValue) {
      setIsButtonDisabled(true);
    }
  }, [searchValue, isSubmitTriggered, dispatch]);

  /**
   * This useEffect method helps to redirect to employee overview
   * page after the successful employee search
   */
  useEffect(() => {
    if (employee.name) {
      setIsEmployeeAvailable(true);
      history.push(ROUTES.EMPLOYEE_OVERVIEW);
    }
  }, [employee, history]);

  /**
   * This useEffect handles to show the error message if
   * there is no employee found
   */
  useEffect(() => {
    if (isError) {
      setIsEmployeeAvailable(false);
    } else {
      setIsEmployeeAvailable(true);
    }
  }, [isError]);

  return (
    <Container maxWidth="md" className={styles.containerStyle}>
      <PageTitle text={TXT_INFO.employeeExplorer} />
      <h3>{TXT_INFO.lookForAnEmployee}</h3>
      <form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <TextField
          id="searchEmployee"
          label={TXT_INFO.searchEmployee}
          variant="outlined"
          onChange={handleChange}
          className={`${styles.inputStyle} ${styles.marginRight20}`}
        />
        <Button
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          onClick={handleSubmit}
          className={styles.searchButton}
          disabled={isButtonDisabled}
        >
          {TXT_INFO.search}
        </Button>
      </form>
      {!isEmployeeAvailable && (
        <Alert className={styles.alertStyle} severity="error">
          {TXT_INFO.noEmployeeFound}
        </Alert>
      )}
    </Container>
  );
};

export default SearchEmployee;
