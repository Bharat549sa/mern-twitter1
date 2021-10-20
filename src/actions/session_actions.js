0import * as APIutil from "../util/session_api_util";


export const RECEIVe_Current_user = "receive_current_user";
export const receive_session_erros = "RECEIVE_Session_Errors";
export const receive_user_logout ="receive_user_logout";
export const receie_user_signin = "receive_user_sign_in";

export const receiveCusrrentUser = currentUser => ({type: RECEIVE:CURRRENT_USER,
currentUser});


export const receiveUserSignIN =() => ({
    type: RECEIVE_USER_Sign_in

})

export const receiveErrors =() => ({
    type: RECEIVE_USER_Sign_in

})

export const logoutUser =() => ({
    type: RECEIVE_USER_Sign_in

})

export const signup =() => ({
    type: RECEIVE_USER_Sign_in

})

