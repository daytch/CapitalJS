import { CREATE_ADD_ONS, CREATE_OUTLETLOCATION, DELETE_ADD_ONS, GET_ADD_ONS, UPDATE_ADD_ONS } from '../../constants';

export function getAddOns(){
    return{
        type: GET_ADD_ONS,
        payload: null
    }
}

export function createAddOns(data) {
  return {
    type: CREATE_ADD_ONS,
    payload: data
  };
}

export function updateAddOns(data){
  return{
    type: UPDATE_ADD_ONS,
    payload: data
  }
}

export function deleteAddOns(data){
    return {
        type: DELETE_ADD_ONS,
        payload: data
    }
}

export default {
  createAddOns,
  getAddOns,
  deleteAddOns,
  updateAddOns
};