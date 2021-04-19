import { fetchJSON } from "../../utils/fetchUtils";

const BASE_URL = "http://api.additivasia.io/api/v1/assignment/employees/";

/**
 * This method will help to returns the data based on the response
 * from the backend url
 * @param {string} employeeName 
 * @returns {object}
 */
export const getEmployeeInfo = (employeeName = "") => {
  const options = {
    method: "GET",
  };
  return fetchJSON(`${BASE_URL}${employeeName}`, options)
    .then((data) => data)
    .catch((error) => { throw Error(error) });
};
