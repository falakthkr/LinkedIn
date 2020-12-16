import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "./actionTypes";

export const initstate = {
  token: "",
  isAuth: false,
  isLoading: false,
  isError: false,
  userData :[]
};

const loginReducer = (state = initstate, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        isError: false,
        userData : payload.userData
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isError: true
      };
    default:
      return state;
  }
};

export default loginReducer;
