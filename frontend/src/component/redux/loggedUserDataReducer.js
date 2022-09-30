const initialState = {
  LoggedUserData: {},
  status: false,
};

export const loggedInReducer = (state = initialState, action) => {
  const { type, payload } = action;
  console.log(payload);
  switch (type) {
    case "LOGGED_USER_DATA": {
      return {
        ...state,
        LoggedUserData: {
          ...state.LoggedUserData,
          LoggedUserData: payload?.data?.userData,
        },
      };
    }
    case "UPDATE_USER_DETAILS": {
      return {
        ...state,
        LoggedUserData: {
          ...state.LoggedUserData,
          LoggedUserData: payload,
        },
      };
    }

    default:
      return state;
  }
};
