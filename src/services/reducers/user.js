import {
  REGISTRATION,
  REGISTRATION_SUCCESS,
  REGISTRATION_FAILED,
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  FORGOT_PASSWORD,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAILED,
  RESET_PASSWORD,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILED,
  GET_USER_DATA,
  GET_USER_DATA_SUCCESS,
  GET_USER_DATA_FAILED,
  LOGOUT,
  LOGOUT_SUCCESS,
  LOGOUT_FAILED,
} from '../actions/user';

const initialState = {
  registrationRequest: false,
  registrationRequestFailed: false,
  loginRequest: false,
  loginRequestFailed: false,
  forgotPasswordRequest: false,
  forgotPasswordRequestFailed: false,
  resetPasswordRequest: false,
  resetPasswordRequestFailed: false,
  getUserDataRequest: false,
  getUserDataRequestFailed: false,
  logoutRequest: false,
  logoutRequestFailed: false,
};

export const userReducer = (state = initialState, action) => {

  switch (action.type) {
    case REGISTRATION: {
      return {
        ...state,
        registrationRequest: true,
        registrationRequestFailed: false,
      };
    }
    case REGISTRATION_SUCCESS: {
      return {
        ...state,
        registrationRequest: false,
      };
    }
    case REGISTRATION_FAILED: {
      return {
        ...state,
        registrationRequest: false,
        registrationRequestFailed: true,
      };
    }
    case LOGIN: {
      return {
        ...state,
        loginRequest: true,
        loginRequestFailed: false,
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        loginRequest: false,
      };
    }
    case LOGIN_FAILED: {
      return {
        ...state,
        loginRequest: false,
        loginRequestFailed: true,
      };
    }
    case FORGOT_PASSWORD: {
      return {
        ...state,
        forgotPasswordRequest: true,
        forgotPasswordRequestFailed: false,
      };
    }
    case FORGOT_PASSWORD_SUCCESS: {
      return {
        ...state,
        forgotPasswordRequest: false,
      };
    }
    case FORGOT_PASSWORD_FAILED: {
      return {
        ...state,
        forgotPasswordRequest: false,
        forgotPasswordRequestFailed: true,
      };
    }
    case RESET_PASSWORD: {
      return {
        ...state,
        resetPasswordRequest: true,
        resetPasswordRequestFailed: false,
      };
    }
    case RESET_PASSWORD_SUCCESS: {
      return {
        ...state,
        resetPasswordRequest: false,
      };
    }
    case RESET_PASSWORD_FAILED: {
      return {
        ...state,
        resetPasswordRequest: false,
        resetPasswordRequestFailed: true,
      };
    }
    case GET_USER_DATA: {
      return {
        ...state,
        getUserDataRequest: true,
        getUserDataRequestFailed: false,
      };
    }
    case GET_USER_DATA_SUCCESS: {
      return {
        ...state,
        getUserDataRequest: false,
      };
    }
    case GET_USER_DATA_FAILED: {
      return {
        ...state,
        getUserDataRequest: false,
        getUserDataRequestFailed: true,
      };
    }
    case LOGOUT: {
      return {
        ...state,
        logoutRequest: true,
        logoutRequestFailed: false,
      };
    }
    case LOGOUT_SUCCESS: {
      return {
        ...state,
        logoutRequest: false,
      };
    }
    case LOGOUT_FAILED: {
      return {
        ...state,
        logoutRequest: false,
        logoutRequestFailed: true,
      };
    }
    default: {
      return state;
    }
  }
};