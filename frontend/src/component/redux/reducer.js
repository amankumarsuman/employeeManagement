const initialState = {
  employeeData: {},
  edit: false,
  adminData: {},
  userData: {},
};

export const employeeReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "EDIT_EMPLOYEE_DATA": {
      let { data } = payload;
      return {
        ...state,
        employeeData: {
          ...state.employeeData,
          data,
        },
        edit: true,
      };
    }

    default:
      return state;
  }
};
