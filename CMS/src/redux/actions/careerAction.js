import {
    HANDLE_CAREER_SUBMIT,
    GET_CAREER_DATA
  } from '../../constants';
  
  export function careerSubmit(data) {
    return {
      type: HANDLE_CAREER_SUBMIT,
      payload: data
    };
  }
  
  export function getCareer(callback) {
    return {
      type: GET_CAREER_DATA,
      payload: null,
      callback: callback
    };
  }
  
  export default {
    careerSubmit: careerSubmit,
    getCareer: getCareer
  };