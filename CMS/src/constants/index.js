export const PROD = 'http://5.189.134.84:8080';
export const DEV = 'http://localhost:8080';
export const API_BASE_URL = DEV;
export const API_URL = API_BASE_URL + "/api";
export const URL = {
  FAKE: "https://jsonplaceholder.typicode.com/todos",
  FAKE_POST: "https://jsonplaceholder.typicode.com/posts",
  LOGIN: API_URL + "/auth/signin",
  UPLOAD_IMAGE: API_URL + "/UploadImage/Save",
  GET_SLIDERSTATUS_DROPDOWN: API_URL + "/masterstatus/sliderconfig",
  GET_BRANCHSTATUS_DROPDOWN: API_URL + "/masterstatus/branchconfig",
  GET_BLOGSTATUS_DROPDOWN: API_URL + "/masterstatus/blogconfig",
  GET_CATEGORYPRODUCT_DROPDOWN: API_URL + "/masterstatus/productcategoryconfig",
  GET_PRODUCT_DROPDOWN: API_URL + "/masterstatus/productconfig",
  GET_COMPANYPROFILE_DATA: API_URL + "/companyprofile/loadconfig",
  GET_CAREER_DATA: API_URL + "/career",
  GET_SLIDERWEBSITE_GRIDDATA: API_URL + "/sliderwebsite/load",
  GET_OUTLETLOCATION_GRIDDATA: API_URL + "/branch/load",
  GET_FAQ_GRIDDATA: API_URL + "/faq",
  GET_BLOG_GRIDDATA: API_URL + "/blog/load",
  GET_BLOGCATEGORY: API_URL + "/blogcategory/load",
  GET_CONTACT_DATA: API_URL + "/contactus/load",
  GET_ADD_ONS: API_URL + '/productAddOns/load',
  GET_PRODUCT: API_URL + '/product/load',
  GET_CATEGORYPRODUCT: API_URL + '/productCategory/load',
  SAVE_COMPANYPROFILE: API_URL + "/companyprofile/save",
  SAVE_CAREER: API_URL + "/career",
  SAVE_SLIDERWEBSITE: API_URL + "/sliderwebsite/save",
  SAVE_OUTLETLOCATION: API_URL + "/branch/save",
  SAVE_FAQ: API_URL + "/faq",
  SAVE_BLOG: API_URL + "/blog/save",
  SAVE_BLOGCATEGORY: API_URL + "/blogcategory/save",
  SAVE_CONTACT: API_URL + "/contactus/save",
  SAVE_ADD_ONS: API_URL + "/productAddOns/save",
  SAVE_CATEGORYPRODUCT: API_URL + "/productCategory/save",
  SAVE_PRODUCT: API_URL + '/product/save',
  UPDATE_FAQ: API_URL + "/faq/",
  UPDATE_CARRER: API_URL + "/career/",
  DELETE_SLIDERWEBSITE: API_URL + "/sliderwebsite/delete",
  DELETE_FAQ: API_URL + "/faq/",
  DELETE_BLOG: API_URL + "/blog/delete",
  DELETE_BLOGCATEGORY: API_URL + "/blogcategory/delete",
  DELETE_OUTLETLOCATION: API_URL + '/branch/delete',
  DELETE_CONTACT: API_URL + '/contactus/delete',
  DELETE_ADD_ONS: API_URL + '/productAddOns/delete',
  DELETE_CATEGORYPRODUCT: API_URL + '/productCategory/delete',
  DELETE_PRODUCT: API_URL + '/product/delete',
  GET_ORDER: API_URL + '/order/load'
}

export const SET_TOASTMESSAGE = 'SET_TOASTMESSAGE';

// Login
export const HANDLE_LOGIN = 'HANDLE_LOGIN';
export const SET_LOGIN_LOADING = 'SET_LOGIN_LOADING';

// Career
export const HANDLE_CAREER_SUBMIT = 'HANDLE_CAREER_SUBMIT';
export const GET_CAREER_DATA = 'GET_CAREER_DATA';
export const SET_CAREER_DATA = 'SET_CAREER_DATA';
export const UPDATE_CARRER_DATA = 'UPDATE_CARRER_DATA';
export const DELETE_CARRER_DATA = 'DELETE_CAREER_DATA';
export const SET_CAREER_LOADING = 'SET_CAREER_LOADING';

// Company Profile
export const HANDLE_COMPANYPROFILE_SUBMIT = 'HANDLE_COMPANYPROFILE_SUBMIT';
export const GET_COMPANYPROFILE_DATA = 'GET_COMPANYPROFILE_DATA';
export const SET_COMPANYPROFILE_DATA = 'SET_COMPANYPROFILE_DATA';
export const SET_COMPANYPROFILE_LOADING = 'SET_COMPANYPROFILE_LOADING';

// Outlet Location
export const SET_OUTLETLOCATION_GRIDDATA = 'SET_OUTLETLOCATION_GRIDDATA';
export const SET_OUTLETLOCATION_LOADING = 'SET_OUTLETLOCATION_LOADING';
export const GET_OUTLETLOCATION_GRIDDATA = 'GET_OUTLETLOCATION_GRIDDATA';
export const CREATE_OUTLETLOCATION = 'CREATE_OUTLETLOCATION';
export const UPDATE_OUTLETLOCATION = 'UPDATE_OUTLETLOCATION';
export const DELETE_OUTLETLOCATION = 'DELETE_OUTLETLOCATION';

//Contact Us
export const GET_CONTACT_DATA = 'GET_CONTACT_DATA';
export const SET_CONTACT_LOADING = 'SET_CONTACT_LOADING';
export const SET_CONTACT_DATA = 'SET_CONTACT_DATA'
export const CREATE_CONTACT_DATA = 'CREATE_CONTACT_DATA'
export const UPDATE_CONTACT_DATA = 'UPDATE_CONTACT_DATA'
export const DELETE_CONTACT_DATA = 'DELETE_CONTACT_DATA'

// FAQ
export const SET_FAQ_GRIDDATA = 'SET_FAQ_GRIDDATA';
export const SET_FAQ_LOADING = 'SET_FAQ_LOADING';
export const GET_FAQ_GRIDDATA = 'GET_FAQ_GRIDDATA';
export const CREATE_FAQ = 'CREATE_FAQ';
export const UPDATE_FAQ = 'UPDATE_FAQ';
export const DELETE_FAQ = 'DELETE_FAQ';

// Blog and Blog Category
export const SET_BLOG_GRIDDATA = 'SET_BLOG_GRIDDATA';
export const SET_BLOGCATEGORY = 'SET_BLOGCATEGORY';
export const SET_BLOG_LOADING = 'SET_BLOG_LOADING';
export const GET_BLOG_GRIDDATA = 'GET_BLOG_GRIDDATA';
export const GET_BLOGCATEGORY = 'GET_BLOGCATEGORY';
export const CREATE_BLOG = 'CREATE_BLOG';
export const CREATE_BLOGCATEGORY = 'CREATE_BLOGCATEGORY';
export const UPDATE_BLOG = 'UPDATE_BLOG';
export const UPDATE_BLOGCATEGORY = 'UPDATE_BLOGCATEGORY';
export const DELETE_BLOG = 'DELETE_BLOG';
export const DELETE_BLOGCATEGORY = 'DELETE_BLOGCATEGORY';

// Slider Website
export const SET_SLIDERWEBSITE_GRIDDATA = 'SET_SLIDERWEBSITE_GRIDDATA';
export const SET_SLIDERWEBSITE_LOADING = 'SET_SLIDERWEBSITE_LOADING';
export const GET_SLIDERWEBSITE_GRIDDATA = 'GET_SLIDERWEBSITE_GRIDDATA';
export const SAVE_SLIDERWEBSITE = 'SAVE_SLIDERWEBSITE';
export const UPDATE_SLIDERWEBSITE = 'UPDATE_SLIDERWEBSITE';
export const DELETE_SLIDERWEBSITE = 'DELETE_SLIDERWEBSITE';

//Add Ons
export const CREATE_ADD_ONS = 'CREATE_ADD_ONS'
export const GET_ADD_ONS = 'GET_ADD_ONS'
export const SET_ADD_ONS = 'SET_ADD_ONS'
export const SET_ADD_ONS_LOADING = 'SET_ADD_ONS_LOADING';
export const UPDATE_ADD_ONS = 'UPDATE_ADD_ONS'
export const DELETE_ADD_ONS = 'DELETE_ADD_ONS'

//Category Product
export const CREATE_CATEGORYPRODUCT = 'CREATE_CATEGORYPRODUCT'
export const GET_CATEGORYPRODUCT = 'GET_CATEGORYPRODUCT'
export const SET_CATEGORYPRODUCT = 'SET_CATEGORYPRODUCT'
export const SET_CATEGORYPRODUCT_LOADING = 'SET_CATEGORYPRODUCT_LOADING';
export const UPDATE_CATEGORYPRODUCT = 'UPDATE_CATEGORYPRODUCT'
export const DELETE_CATEGORYPRODUCT = 'DELETE_CATEGORYPRODUCT'

//Product
export const CREATE_PRODUCT = 'CREATE_PRODUCT'
export const GET_PRODUCT = 'GET_PRODUCT'
export const SET_PRODUCT = 'SET_PRODUCT'
export const SET_PRODUCT_LOADING = 'SET_PRODUCT_LOADING';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT'
export const DELETE_PRODUCT = 'DELETE_PRODUCT'

// Dropdown
export const GET_SLIDERSTATUS_DROPDOWN = 'GET_SLIDERSTATUS_DROPDOWN';
export const GET_BRANCHSTATUS_DROPDOWN = 'GET_BRANCHSTATUS_DROPDOWN';
export const GET_BLOGSTATUS_DROPDOWN = 'GET_BLOGSTATUS_DROPDOWN';
export const SET_SLIDERSTATUS_DROPDOWN = 'SET_SLIDERSTATUS_DROPDOWN';
export const SET_BRANCHSTATUS_DROPDOWN = 'SET_BRANCHSTATUS_DROPDOWN';
export const SET_BLOGSTATUS_DROPDOWN = 'SET_BLOGSTATUS_DROPDOWN';
export const GET_CATEGORYPRODUCT_DROPDOWN = "GET_CATEGORYPRODUCT_DROPDOWN"
export const SET_CATEGORYPRODUCT_DROPDOWN = 'SET_CATEGORYPRODUCT_DROPDOWN'
export const GET_PRODUCT_DROPDOWN = 'GET_PRODUCT_DROPDOWN'
export const SET_PRODUCT_DROPDOWN = 'SET_PRODUCT_DROPDOWN'

export const BASE_URL = process.env.REACT_APP_BASENAME || "/";

// utils
export const DEBOUNCE_LOADING_TIME = 750;
export const TOAST_AUTOHIDE = 1500;
export const TOAST_POSITION = "top-center";

//Order
export const GET_ORDER = 'GET_ORDER'
export const SET_ORDER = 'SET_ORDER'

// API
export const GOOGLE_MAP_API = "AIzaSyBX74wCkp9l4Zh66Tda_O6Ic4eiP0Op3eE";