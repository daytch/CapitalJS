export const API_URL = 'https://api.capitalbakery.net/api';
export const URL = {
  DATA_HOME: API_URL + "/home",
  COMPANYPROFILE_SUBMIT: API_URL + "/company-profile",
  FAKE: "https://jsonplaceholder.typicode.com/todos"
}

export const SET_TOASTMESSAGE = 'SET_TOASTMESSAGE';
export const HANDLE_LOGIN = 'HANDLE_LOGIN';
export const HANDLE_COMPANYPROFILE_SUBMIT = 'HANDLE_COMPANYPROFILE_SUBMIT';
export const SET_COMPANYPROFILE_LOADING = 'SET_COMPANYPROFILE_LOADING';

export const BASE_URL = process.env.REACT_APP_BASENAME || "/";

// utils
export const DEBOUNCE_LOADING_TIME = 750;
export const TOAST_AUTOHIDE = 4000;
export const TOAST_POSITION = "top-center";

// API
export const GOOGLE_MAP_API = "AIzaSyBX74wCkp9l4Zh66Tda_O6Ic4eiP0Op3eE";