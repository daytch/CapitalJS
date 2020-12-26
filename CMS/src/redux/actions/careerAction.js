import {
    HANDLE_CAREER_SUBMIT,
    GET_CAREER_DATA,
    UPDATE_CARRER_DATA,
    DELETE_CARRER_DATA
  } from '../../constants';
  
  export function careerSubmit(data) {
    return {
      type: HANDLE_CAREER_SUBMIT,
      payload: data
    };
  }
  
  export function getCareer() {
    return {
      type: GET_CAREER_DATA,
      payload: null,
    };
  }

  export function updateCareer(data){
    return {
      type: UPDATE_CARRER_DATA,
      payload: data
    }
  }

  export function deleteCareer(data){
    return {
      type: DELETE_CARRER_DATA,
      payload: data
    }
  }
  
  export default {
    careerSubmit: careerSubmit,
    getCareer: getCareer,
    updateCareer: updateCareer,
    deleteCareer: deleteCareer
  };