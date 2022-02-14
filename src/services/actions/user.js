import mainApi from '../../utils/Api';

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

export const LOGOUT = 'LOGOUT';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILED = 'LOGOUT_FAILED';

export const setRegistrationLoading = () => ({ type: REGISTRATION });
export const setRegistrationLoadingSuccess = () => ({ type: REGISTRATION_SUCCESS });
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
export const setGetUserDataLoadingSuccess = () => ({ type: GET_USER_DATA_SUCCESS });
export const setGetUserDataLoadingFailed = () => ({ type: GET_USER_DATA_FAILED });

export const setLogoutLoading = () => ({ type: LOGOUT });
export const setLogoutLoadingSuccess = () => ({ type: LOGOUT_SUCCESS });
export const setLogoutLoadingFailed = () => ({ type: LOGOUT_FAILED });

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
        dispatch(setLoginLoadingSuccess(res.accessToken))
        localStorage.setItem('refreshToken', res.refreshToken)
      })
      .catch((err) => {
        dispatch(setLoginLoadingFailed())
        console.log(err)
      })
  }
}

export const getUserData = () => {
  return (dispatch) => {
    dispatch(setGetUserDataLoading())

    mainApi.login()
      .then(res => {
        dispatch(setGetUserDataLoadingSuccess())
        localStorage.setItem('refreshToken', res.refreshToken)
      })
      .catch((err) => {
        dispatch(setGetUserDataLoadingFailed())
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
      .then((res) => {
        setForgotPasswordLoadingSuccess()
      })
      .catch((err) => {
        setResetPasswordLoadingFailed();
        console.log(err)
      })
  }
}