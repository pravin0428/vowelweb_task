import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_ERROR,
  } from "./type";
  
  const initState = {
    loading: false,
    isRegister: false,
    isAuth: false,
    token: null,
    user: null,
    error: false,
    role : "",
    userEmail : ""
  };
  
  export const authReducer = (state = initState, { type, payload }) => {
    console.log(payload , "-_-_-_-_-paidLoad");
    switch (type) {
      case REGISTER_REQUEST: {
        return {
          ...state,
          loading: true,
          error: false,
          isRegister: false,
          user: null,
        };
      }
      case REGISTER_SUCCESS: {
        return {
          ...state,
          loading: false,
          error: false,
          isRegister: true,
          user: payload,
        };
      }
      case REGISTER_ERROR: {
        return {
          ...state,
          loading: false,
          error: true,
          isRegister: false,
          user: null,
        };
      }
      case LOGIN_REQUEST: {
        return {
          ...state,
          loading: true,
          error: false,
          isAuth: false,
          token: null,
          role : ""
        };
      }
      case LOGIN_SUCCESS: {
        return {
          ...state,
          loading: false,
          error: false,
          isAuth: true,
          token: payload.token,
          role : payload.role,
          userEmail : payload.email

        };
      }
      case LOGIN_ERROR: {
        return {
          ...state,
          loading: false,
          error: true,
          isAuth: false,
          token: null,
          role : ""
        };
      }
      default: {
        return state;
      }
    }
  };
  