// import mainApi from '../../utils/Api';

// export const SAVE_NEW_PASSWORD = 'SAVE_NEW_PASSWORD';
// export const SAVE_NEW_PASSWORD_SUCCESS = 'SAVE_NEW_PASSWORD_SUCCESS';
// export const SAVE_NEW_PASSWORD_FAILED = 'SAVE_NEW_PASSWORD_FAILED';
// export const SEND_EMAIL = 'SEND_EMAIL';
// export const SEND_EMAIL_SUCCESS = 'SEND_EMAIL_SUCCESS';
// export const SEND_EMAIL_FAILED = 'SEND_EMAIL_FAILED';

// export const setSaveNewPasswordLoading = () => ({ type: SAVE_NEW_PASSWORD })
// export const setSaveNewPasswordSuccess = (data) => ({ type: SAVE_NEW_PASSWORD_SUCCESS, payload: data })
// export const setSaveNewPasswordFailed = () => ({ type: SAVE_NEW_PASSWORD_FAILED })
// export const setSendEmailLoading = () => ({ type: SEND_EMAIL })
// export const setSendEmailSuccess = (data) => ({ type: SEND_EMAIL_SUCCESS, payload: data })
// export const setSendEmailFailed = () => ({ type: SEND_EMAIL_FAILED })

// export const passwordSave = (password) => {
//   return function (dispatch) {
//     dispatch(setSaveNewPasswordLoading())

//     mainApi.resetPassword(password)
//       .then(res => {
//         if (res.token) {
//           dispatch(setSaveNewPasswordLoading(res))
//         }
//       })
//       .catch(() => {
//         dispatch(setSaveNewPasswordLoading())
//       })
//   }
// }

// export const passwordForgot = (email) => {
//   return function (dispatch) {
//     dispatch(setSendEmailLoading())

//     mainApi.sendEmail(email)
//       .then(res => {
//         if (res.token) {
//           dispatch(setSendEmailSuccess())
//         }
//       })
//       .catch(() => {
//         dispatch(setSendEmailFailed())
//       })
//   }
// }