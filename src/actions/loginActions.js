import * as actTypes from './actionTypes';
//import Axios from 'axios';
import * as Api from './apiTT';

//export const login = (email, password) =>{
  /*return dispatch => {
    dispatch(setLoginPending(true));
    dispatch(setLoginSuccess(false));
    dispatch(setLoginError(null));
    callLoginApi(email, password, error => {
      dispatch(setLoginPending(false));
      if (!error) {
        dispatch(setLoginSuccess(true));
      } else {
        dispatch(setLoginError(error));
      }
    });
  }*/
//
export const login = (user,pass) => {
  //console.log(user)
  let url ="_login.php";
  let body ={token:'123',loginname: user, password:pass}
  return (dispatch)=>{
      return Api.getUserLogin(url, body).then(
        function(response){
            if(response.LOGIN_STATUS=="SUCCESS"){
              localStorage.setItem("sessionUser", JSON.stringify(response.UserInfo));
              //console.log(response.UserInfo[0].userid);
              window.location= './';
                //dispatch(setLoginSuccess(response.UserInfo[0].userid));
            } else {
              dispatch(setLoginError(response.ERROR));
            }
            }
          );
        };
};

/*function callLoginApi(email, password, callback) {
  setTimeout(() => {
    if (email === 'a@a.com' && password === '123') {
      console.log('a@a.com')
      return callback(null);
    } else {
      return callback(new Error('Invalid email and password'));
    }
  }, 1000);
}*/
/*
export const callLoginApi = (email, password, callback) => {
  let url ="_login.php";
  let body ={token:'123',loginname: email, password:password}
  return (dispatch)=>{
      return Api.getUserLogin(url, body).then(
        function(response){
            if(response.LOGIN_STATUS=="SUCCESS"){
              return callback(null);
            } else {
              return callback(response.ERROR);
            }
            }
          );
        };
  }
*/

export const setLoginPending =(isLoginPending) => {
  return {
    type: actTypes.SET_LOGIN_PENDING,
    isLoginPending
  };
}

export const setLoginSuccess = (isLoginSuccess) => {
  return {
    type: actTypes.SET_LOGIN_SUCCESS,
    isLoginSuccess
  };
}

export const setLoginError = (loginError) =>{
  return {
    type: actTypes.SET_LOGIN_ERROR,
    loginError
  }
}
