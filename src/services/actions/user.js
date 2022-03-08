import mainApi from '../../utils/Api.ts';
import { tokenExpiredError, unauthorizedError } from '../../utils/constants.ts';

export const REGISTRATION = 'REGISTRATION';
export const REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS';
export const REGISTRATION_FAILED = 'REGISTRATION_FAILED';

export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';

export const FORGOT_PASSWORD = 'FORGOT_PASSWORD';
export const FORGOT_PASSWORD_SUCCESS = 'FORGOT_PASSWORD_SECCESS';
export const FORGOT_PASSWORD_FAILED = 'FORGOT_PASSWORD_FAILED';

export const RESET_PASSWORD = 'RESET_PASSWORD';
export const RESET_PASSWORD_SUCCESS = 'RESET_PASSWORD_SUCCESS';
export const RESET_PASSWORD_FAILED = 'RESET_PASSWORD_FAILED';

export const GET_USER_DATA = 'GET_USER_DATA';
export const GET_USER_DATA_SUCCESS = 'GET_USER_DATA_SUCCESS';
export const GET_USER_DATA_FAILED = 'GET_USER_DATA_FAILED';

export const SEND_USER_DATA = 'SEND_USER_DATA';
export const SEND_USER_DATA_SUCCESS = 'SEND_USER_DATA_SUCCESS';
export const SEND_USER_DATA_FAILED = 'SEND_USER_DATA_FAILED';

export const LOGOUT = 'LOGOUT';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILED = 'LOGOUT_FAILED';

export const REFRESH_TOKEN = 'REFRESH_TOKEN';
export const REFRESH_TOKEN_SUCCESS = 'REFRESH_TOKEN_SUCCESS';
export const REFRESH_TOKEN_FAILED = 'REFRESH_TOKEN_FAILED';

export const SET_FORGOT_PASSWORD_STATE = 'SET_FORGOT_PASSWORD_STATE';

export const setRegistrationLoading = () => ({ type: REGISTRATION });
export const setRegistrationLoadingSuccess = (token) => ({ type: REGISTRATION_SUCCESS, payload: token });
export const setRegistrationLoadingFailed = () => ({ type: REGISTRATION_FAILED });

export const setLoginLoading = () => ({ type: LOGIN });
export const setLoginLoadingSuccess = (token) => ({ type: LOGIN_SUCCESS, payload: token });
export const setLoginLoadingFailed = () => ({ type: LOGIN_FAILED });

export const setForgotPasswordLoading = () => ({ type: FORGOT_PASSWORD });
export const setForgotPasswordLoadingSuccess = () => ({ type: FORGOT_PASSWORD_SUCCESS });
export const setForgotPasswordLoadingFailed = () => ({ type: FORGOT_PASSWORD_FAILED });

export const setResetPasswordLoading = () => ({ type: RESET_PASSWORD });
export const setResetPasswordLoadingSuccess = () => ({ type: RESET_PASSWORD_SUCCESS });
export const setResetPasswordLoadingFailed = () => ({ type: RESET_PASSWORD_FAILED });

export const setGetUserDataLoading = () => ({ type: GET_USER_DATA });
export const setGetUserDataLoadingSuccess = (userData) => ({ type: GET_USER_DATA_SUCCESS, payload: userData });
export const setGetUserDataLoadingFailed = () => ({ type: GET_USER_DATA_FAILED });

export const setSendUserDataLoading = () => ({ type: SEND_USER_DATA });
export const setSendUserDataLoadingSuccess = (userData) => ({ type: SEND_USER_DATA_SUCCESS, payload: userData });
export const setSendUserDataLoadingFailed = () => ({ type: SEND_USER_DATA_FAILED });

export const setLogoutLoading = () => ({ type: LOGOUT });
export const setLogoutLoadingSuccess = () => ({ type: LOGOUT_SUCCESS });
export const setLogoutLoadingFailed = () => ({ type: LOGOUT_FAILED });

export const setRefreshTokenLoading = () => ({ type: REFRESH_TOKEN });
export const setRefreshTokenLoadingSuccess = (token) => ({ type: REFRESH_TOKEN_SUCCESS, payload: token });
export const setRefreshTokenLoadingFailed = () => ({ type: REFRESH_TOKEN_FAILED });

export const setForgotPasswordState = (state) => ({ type: SET_FORGOT_PASSWORD_STATE, payload: state });

export const registration = (email, name, password) => {
  return (dispatch) => {
    dispatch(setRegistrationLoading())

    mainApi.register(email, name, password)
      .then(res => {
        dispatch(setRegistrationLoadingSuccess(res.accessToken))
        localStorage.setItem('refreshToken', res.refreshToken)
      })
      .catch((err) => {
        dispatch(setRegistrationLoadingFailed())
        console.log(err)
      })
  }
}

export const login = (email, password) => {
  return (dispatch) => {
    dispatch(setLoginLoading())

    mainApi.login(email, password)
      .then(res => {
        dispatch(setLoginLoadingSuccess(res))
        localStorage.setItem('refreshToken', res.refreshToken)
      })
      .catch((err) => {
        dispatch(setLoginLoadingFailed())
        console.log(err)
      })
  }
}

export const getUserData = (accessToken) => {
  return (dispatch) => {
    dispatch(setGetUserDataLoading())

    mainApi.getUserData(accessToken)
      .then((res) => {
        dispatch(setGetUserDataLoadingSuccess(res.user))
      })
      .catch((err) => {
        dispatch(setGetUserDataLoadingFailed())

        if (err.status === tokenExpiredError || err.status === unauthorizedError) {
          dispatch(refreshToken(localStorage.getItem('refreshToken'), 'getUserData'))
        }

        console.log(err)
      })
  }
}

export const sendUserData = (accessToken, name, email, password) => {
  return (dispatch) => {
    dispatch(setSendUserDataLoading())

    mainApi.sendUserData(accessToken, name, email, password)
      .then((res) => {
        dispatch(setSendUserDataLoadingSuccess(res.user))
      })
      .catch((err) => {
        console.log(err)

        if (err.status === tokenExpiredError) {
          dispatch(refreshToken(localStorage.getItem('refreshToken')))
        }

        dispatch(setSendUserDataLoadingFailed())
      })
  }
}

const refreshToken = (refreshToken) => {
  return (dispatch) => {
    dispatch(setRefreshTokenLoading())

    mainApi.refreshToken(refreshToken)
      .then((res) => {
        localStorage.setItem('refreshToken', res.refreshToken)
        dispatch(setRefreshTokenLoadingSuccess(res.accessToken))
      })
      .catch((err) => {
        dispatch(setRefreshTokenLoadingFailed())
        console.log(err)
      })
  }
}

export const forgotPassword = (email) => {
  return (dispatch) => {
    dispatch(setForgotPasswordLoading())

    mainApi.sendEmail(email)
      .then(() => {
        setForgotPasswordLoadingSuccess()
      })
      .catch((err) => {
        setForgotPasswordLoadingFailed()
        console.log(err)
      })
  }
}

export const resetPassword = (password, code) => {
  return (dispatch) => {
    dispatch(setResetPasswordLoading())

    mainApi.resetPassword(password, code)
      .then(() => {
        setResetPasswordLoadingSuccess()
      })
      .catch((err) => {
        setResetPasswordLoadingFailed();
        console.log(err)
      })
  }
}

export const logout = (refreshToken) => {
  return (dispatch) => {
    dispatch(setLogoutLoading())

    mainApi.logout(refreshToken)
      .then(() => {
        localStorage.removeItem('refreshToken')
        dispatch(setLogoutLoadingSuccess())
      })
      .catch((err) => {
        dispatch(setLoginLoadingFailed())
        console.log(err)
      })
  }
}