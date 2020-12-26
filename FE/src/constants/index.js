export const API_URL = 'http://localhost:8080/api';
export const URL = {
  DATA_HOME: API_URL + "/home",
  GET_SLIDER: API_URL + "/sliderWebsite/load",
  GET_PROFILE: API_URL + "/companyprofile/loadconfig",
  GET_BLOG: API_URL + "/blog/load",
  GET_OUTLET: API_URL + '/branch/load',
  GET_OUTLET_DELIVER: API_URL + '/branch/isdeliver',
  GET_FAQ: API_URL + '/faq',
  LOGIN: API_URL + '/auth/signin',
  REGISTER: API_URL + '/auth/signup',
  GET_PRODUCT: API_URL + '/product/load',
  GET_USER: API_URL + '/user',
  STORE_ORDER: API_URL + '/order/save',
  GET_TOKEN: API_URL + "/midtrans/gettoken",
  GET_PRODUCT_NAME: API_URL + "/product/byname",
  GET_ORDER: API_URL + "/order/byid"
}

export const HANDLE_LOGIN = 'HANDLE_LOGIN';
export const HANDLE_REGISTER = 'HANDLE_REGISTER'

export const BASE_URL = process.env.REACT_APP_BASENAME || "/";

// header
export const PATH_LIST = {
  BROWSE: "/projects/browse",
  MY_PROJECT: "/projects",
  DETAIL: "/projects/detail",
  PROPOSAL: "/projects/proposal",
  POST_PROJECT: "/post-project",
  PROFILE: "/profile"
}

export const SET_TOASTMESSAGE = 'SET_TOASTMESSAGE';
export const TOAST_AUTOHIDE = 1500;
export const TOAST_POSITION = "top-center";

// utils
export const DEBOUNCE_LOADING_TIME = 750;

//slider website
export const GET_SLIDER = 'GET_SLIDER'
export const SET_SLIDER = 'SET_SLIDER'

//Company Profile
export const GET_PROFILE = 'GET_PROFILE'
export const SET_PROFILE = 'SET_PROFILE'

//Blog
export const GET_BLOGS = 'GET_BLOGS'
export const SET_BLOGS = 'SET_BLOGS'
export const GET_BLOG = 'GET_BLOG'
export const SET_BLOG = 'SET_BLOG'

//Outlet Location
export const GET_OUTLET = 'GET_OUTLET'
export const SET_OUTLET = 'SET_OUTLET'

//Product
export const GET_PRODUCT = 'GET_PRODUCT'
export const SET_PRODUCT = 'SET_PRODUCT'
export const SET_PRODUCT_SINGLE = 'SET_PRODUCT_SINGLE'
export const GET_PRODUCT_DETAIL = 'GET_PRODUCT_DETAIL'

//FAQ
export const GET_FAQ = 'GET_FAQ'
export const SET_FAQ = 'SET_FAQ'

// API
export const GOOGLE_MAP_API = "AIzaSyBX74wCkp9l4Zh66Tda_O6Ic4eiP0Op3eE";