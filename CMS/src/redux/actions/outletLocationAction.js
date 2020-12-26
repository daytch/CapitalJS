import {
  // HANDLE_COMPANYPROFILE_SUBMIT,
  CREATE_OUTLETLOCATION,
  UPDATE_OUTLETLOCATION,
  GET_OUTLETLOCATION_GRIDDATA,
  DELETE_OUTLETLOCATION
} from '../../constants';

export function getGridData() {
  return {
    type: GET_OUTLETLOCATION_GRIDDATA,
    payload: null
  };
}

export function updateOutletLocation(data) {
  return {
    type: UPDATE_OUTLETLOCATION,
    payload: data
  };
}

export function createOutletLocation(data) {
  return {
    type: CREATE_OUTLETLOCATION,
    payload: data
  };
}

export function deleteOutletLocation(id){
  console.log('ini action' + JSON.stringify(id))
    return {
      type: DELETE_OUTLETLOCATION,
      payload: id
    }
}

export default {
  getGridData: getGridData,
  createOutletLocation: createOutletLocation,
  updateOutletLocation: updateOutletLocation,
  deleteOutletLocation: deleteOutletLocation
};