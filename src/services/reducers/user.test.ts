import {userReducer} from './user';
import {IUserState} from "../types/types";
import {
  FORGOT_PASSWORD,
  FORGOT_PASSWORD_FAILED,
  FORGOT_PASSWORD_SUCCESS,
  GET_USER_DATA,
  GET_USER_DATA_FAILED,
  GET_USER_DATA_SUCCESS,
  LOGIN,
  LOGIN_FAILED,
  LOGIN_SUCCESS, LOGOUT, LOGOUT_FAILED, LOGOUT_SUCCESS, REFRESH_TOKEN, REFRESH_TOKEN_FAILED, REFRESH_TOKEN_SUCCESS,
  REGISTRATION,
  REGISTRATION_FAILED,
  REGISTRATION_SUCCESS,
  RESET_PASSWORD,
  RESET_PASSWORD_FAILED,
  RESET_PASSWORD_SUCCESS, SEND_USER_DATA, SEND_USER_DATA_FAILED, SEND_USER_DATA_SUCCESS, SET_FORGOT_PASSWORD_STATE
} from "../actions/user";

describe('user reducer', () => {
  const initialState: IUserState = {
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
    refreshTokenRequest: false,
    refreshTokenRequestFailed: false,
    sendUserDataRequest: false,
    sendUserDataRequestFailed: false,
    isPasswordForgot: false,
    accessToken: null,
    userData: null
  };

  it('should return the initial state', () => {
    // @ts-ignore
    expect(userReducer(undefined, {})).toEqual(initialState)
  })

  it('should handle REGISTRATION', () => {
    const action = {
      type: REGISTRATION,
    }

    expect(
      // @ts-ignore
      userReducer(initialState, action)
    ).toEqual({
      ...initialState,
      registrationRequest: true,
      registrationRequestFailed: false,
    })
  })

  it('should handle REGISTRATION_SUCCESS', () => {
    const prevState = {
      ...initialState,
      registrationRequest: true,
    };

    const action = {
      type: REGISTRATION_SUCCESS,
      payload: 'accessToken'
    }

    expect(
      // @ts-ignore
      userReducer(prevState, action)
    ).toEqual({
      ...prevState,
      registrationRequest: false,
      accessToken: action.payload,
    })
  })

  it('should handle REGISTRATION_FAILED', () => {
    const prevState = {
      ...initialState,
      registrationRequest: true
    };

    const action = {
      type: REGISTRATION_FAILED,
    }

    expect(
      // @ts-ignore
      userReducer(prevState, action)
    ).toEqual({
      ...prevState,
      registrationRequest: false,
      registrationRequestFailed: true,
    })
  })

  it('should handle LOGIN', () => {
    const action = {
      type: LOGIN,
    }

    expect(
      // @ts-ignore
      userReducer(initialState, action)
    ).toEqual({
      ...initialState,
      loginRequest: true,
      loginRequestFailed: false,
    })
  })

  it('should handle LOGIN_SUCCESS', () => {
    const prevState = {
      ...initialState,
      loginRequest: true
    };

    const action = {
      type: LOGIN_SUCCESS,
      payload: {
        accessToken: 'accessToken',
        user: {}
      }
    }

    expect(
      // @ts-ignore
      userReducer(prevState, action)
    ).toEqual({
      ...prevState,
      loginRequest: false,
      accessToken: action.payload.accessToken,
      userData: action.payload.user,
    })
  })

  it('should handle LOGIN_FAILED', () => {
    const prevState = {
      ...initialState,
      loginRequest: true
    };

    const action = {
      type: LOGIN_FAILED,
    }

    expect(
      // @ts-ignore
      userReducer(prevState, action)
    ).toEqual({
      ...prevState,
      loginRequest: false,
      loginRequestFailed: true,
    })
  })

  it('should handle FORGOT_PASSWORD', () => {
    const action = {
      type: FORGOT_PASSWORD,
    }

    expect(
      // @ts-ignore
      userReducer(initialState, action)
    ).toEqual({
      ...initialState,
      forgotPasswordRequest: true,
      forgotPasswordRequestFailed: false,
    })
  })

  it('should handle FORGOT_PASSWORD_SUCCESS', () => {
    const prevState = {
      ...initialState,
      forgotPasswordRequest: true
    };

    const action = {
      type: FORGOT_PASSWORD_SUCCESS,
    }

    expect(
      // @ts-ignore
      userReducer(prevState, action)
    ).toEqual({
      ...prevState,
      forgotPasswordRequest: false,
    })
  })

  it('should handle FORGOT_PASSWORD_FAILED', () => {
    const prevState = {
      ...initialState,
      forgotPasswordRequest: true
    };

    const action = {
      type: FORGOT_PASSWORD_FAILED,
    }

    expect(
      // @ts-ignore
      userReducer(prevState, action)
    ).toEqual({
      ...prevState,
      forgotPasswordRequest: false,
      forgotPasswordRequestFailed: true,
    })
  })

  it('should handle RESET_PASSWORD', () => {
    const action = {
      type: RESET_PASSWORD,
    }

    expect(
      // @ts-ignore
      userReducer(initialState, action)
    ).toEqual({
      ...initialState,
      resetPasswordRequest: true,
      resetPasswordRequestFailed: false,
    })
  })

  it('should handle RESET_PASSWORD_SUCCESS', () => {
    const prevState = {
      ...initialState,
      resetPasswordRequest: true,
    };

    const action = {
      type: RESET_PASSWORD_SUCCESS,
    }

    expect(
      // @ts-ignore
      userReducer(prevState, action)
    ).toEqual({
      ...prevState,
      resetPasswordRequest: false,
    })
  })

  it('should handle RESET_PASSWORD_FAILED', () => {
    const prevState = {
      ...initialState,
      resetPasswordRequest: true,
    };

    const action = {
      type: RESET_PASSWORD_FAILED,
    }

    expect(
      // @ts-ignore
      userReducer(prevState, action)
    ).toEqual({
      ...prevState,
      resetPasswordRequest: false,
      resetPasswordRequestFailed: true,
    })
  })

  it('should handle GET_USER_DATA', () => {
    const action = {
      type: GET_USER_DATA,
    }

    expect(
      // @ts-ignore
      userReducer(initialState, action)
    ).toEqual({
      ...initialState,
      getUserDataRequest: true,
      getUserDataRequestFailed: false,
    })
  })

  it('should handle GET_USER_DATA_SUCCESS', () => {
    const prevState = {
      ...initialState,
      getUserDataRequest: true,
    };

    const action = {
      type: GET_USER_DATA_SUCCESS,
      payload: {}
    }

    expect(
      // @ts-ignore
      userReducer(prevState, action)
    ).toEqual({
      ...prevState,
      getUserDataRequest: false,
      userData: action.payload
    })
  })

  it('should handle GET_USER_DATA_FAILED', () => {
    const prevState = {
      ...initialState,
      getUserDataRequest: true,
    };

    const action = {
      type: GET_USER_DATA_FAILED,
    }

    expect(
      // @ts-ignore
      userReducer(prevState, action)
    ).toEqual({
      ...prevState,
      getUserDataRequest: false,
      getUserDataRequestFailed: true,
    })
  })

  it('should handle LOGOUT', () => {
    const action = {
      type: LOGOUT,
    }

    expect(
      // @ts-ignore
      userReducer(initialState, action)
    ).toEqual({
      ...initialState,
      logoutRequest: true,
      logoutRequestFailed: false,
    })
  })

  it('should handle LOGOUT_SUCCESS', () => {
    const prevState = {
      ...initialState,
      logoutRequest: true,
      userData: {},
      accessToken: 'accessToken',
    };

    const action = {
      type: LOGOUT_SUCCESS,
    }

    expect(
      // @ts-ignore
      userReducer(prevState, action)
    ).toEqual({
      ...prevState,
      logoutRequest: false,
      userData: null,
      accessToken: null,
    })
  })

  it('should handle LOGOUT_FAILED', () => {
    const prevState = {
      ...initialState,
      logoutRequest: true,
    };

    const action = {
      type: LOGOUT_FAILED,
    }

    expect(
      // @ts-ignore
      userReducer(prevState, action)
    ).toEqual({
      ...prevState,
      logoutRequest: false,
      logoutRequestFailed: true,
    })
  })

  it('should handle REFRESH_TOKEN', () => {
    const action = {
      type: REFRESH_TOKEN,
    }

    expect(
      // @ts-ignore
      userReducer(initialState, action)
    ).toEqual({
      ...initialState,
      refreshTokenRequest: true,
      refreshTokenRequestFailed: false,
    })
  })

  it('should handle REFRESH_TOKEN_SUCCESS', () => {
    const prevState = {
      ...initialState,
      refreshTokenRequest: true,
    };

    const action = {
      type: REFRESH_TOKEN_SUCCESS,
      payload: 'accessToken'
    }

    expect(
      // @ts-ignore
      userReducer(prevState, action)
    ).toEqual({
      ...prevState,
      refreshTokenRequest: false,
      accessToken: action.payload,
    })
  })

  it('should handle REFRESH_TOKEN_FAILED', () => {
    const prevState = {
      ...initialState,
      refreshTokenRequest: true,
    };

    const action = {
      type: REFRESH_TOKEN_FAILED,
    }

    expect(
      // @ts-ignore
      userReducer(prevState, action)
    ).toEqual({
      ...prevState,
      refreshTokenRequest: false,
      refreshTokenRequestFailed: true,
    })
  })

  it('should handle SEND_USER_DATA', () => {
    const action = {
      type: SEND_USER_DATA,
    }

    expect(
      // @ts-ignore
      userReducer(initialState, action)
    ).toEqual({
      ...initialState,
      sendUserDataRequest: true,
      sendUserDataRequestFailed: false,
    })
  })

  it('should handle SEND_USER_DATA_SUCCESS', () => {
    const prevState = {
      ...initialState,
      sendUserDataRequest: true,
    };

    const action = {
      type: SEND_USER_DATA_SUCCESS,
      payload: {}
    }

    expect(
      // @ts-ignore
      userReducer(prevState, action)
    ).toEqual({
      ...prevState,
      sendUserDataRequest: false,
      userData: action.payload,
    })
  })

  it('should handle SEND_USER_DATA_FAILED', () => {
    const prevState = {
      ...initialState,
      sendUserDataRequest: true,
    };

    const action = {
      type: SEND_USER_DATA_FAILED,
    }

    expect(
      // @ts-ignore
      userReducer(prevState, action)
    ).toEqual({
      ...prevState,
      sendUserDataRequest: false,
      sendUserDataRequestFailed: true,
    })
  })

  it('should handle SET_FORGOT_PASSWORD_STATE', () => {
    const action = {
      type: SET_FORGOT_PASSWORD_STATE,
      payload: true
    }

    expect(
      // @ts-ignore
      userReducer(initialState, action)
    ).toEqual({
      ...initialState,
      isPasswordForgot: action.payload,
    })
  })
})