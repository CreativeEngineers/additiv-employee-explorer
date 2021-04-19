import searchEmployeeReducer, {
  fetchEmployeeDetailsError,
  resetEmployeeDetails,
} from "./searchEmployeeSlice";

describe("search employee reducer", () => {
  const initialState = {
    employee: {
      name: "",
    },
    loading: false,
    hasErrors: false,
  };
  it("should handle initial state", () => {
    expect(searchEmployeeReducer(undefined, { type: "unknown" })).toEqual({
      employee: {
        name: "",
      },
      loading: false,
      hasErrors: false,
    });
  });

  it("should handle error response", () => {
    const actual = searchEmployeeReducer(initialState, fetchEmployeeDetailsError());
    expect(actual.hasErrors).toEqual(true);
  });

  it("should reset the employee info", () => {
      const actual = searchEmployeeReducer(initialState, resetEmployeeDetails());
      expect(actual.employee).toEqual({});
  });
});
