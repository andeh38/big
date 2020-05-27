export default (state, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        message: null,
        user: action.payload.user,
        token: action.payload.token,
        error: null,
        isAuthenticated: true,
      };
    case "REGISTER_SUCCESS":
      return {
        ...state,
        message: action.payload,
        error: null,
      };
    case "ERROR_CLEAR":
      return {
        ...state,
        error: null,
      };
    case "AUTH_ERROR":
    case "LOGIN_FAIL":
    case "LOGOUT_SUCCESS":
    case "REGISTER_FAIL":
      localStorage.removeItem("token");
      return {
        ...state,
        message: null,
        error: action.payload,
        token: null,
        user: null,
        isAuthenticated: false,
      };
    case "DELETE FAIL":
      return {
        ...state,
        error: action.payload,
      };
    case "DELETE SUCCESS":
      localStorage.removeItem("token");
      return {
        ...state,
        message: action.payload,
        error: null,
        token: null,
        user: null,
        isAuthenticated: null,
      };
    default:
      return state;
  }
};
