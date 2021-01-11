import userTypes from "./user.types";


export const emailSignInStart = userCredential => ({
  type: userTypes.EMAIL_SIGN_IN_START,
  payload: userCredential
})

export const signInSuccess = user => ({
  type: userTypes.SIGN_IN_SUCCESS,
  payload: user
})

export const checkUserSession = () =>  ({
  type: userTypes.CHECK_USER_SESSION
})

export const signOutUserStart = () => ({
  type: userTypes.SIGN_OUT_USER_START
})

export const signOutUserSuccess = () => ({
  type: userTypes.SIGN_OUT_USER_SUCCESS
})

export const signUpUserStart = userCredential => ({
  type: userTypes.SIGN_UP_USER_START,
  payload: userCredential
})

export const userError = err => ({
  type: userTypes.USER_ERROR,
  payload: err
})

export const resetPasswordStart = userCredential => ({
  type: userTypes.RESET_PASSWORD_START,
  payload: userCredential
})

export const resetPasswordSuccess = () => ({
  type: userTypes.RESET_PASSWORD_SUCCESS,
  payload: true
})

export const resetUserState = () => ({
  type: userTypes.RESET_USER_STATE
})
export const googleSignInStart = () => ({
  type: userTypes.GOOGLE_SIGN_IN_START
})
