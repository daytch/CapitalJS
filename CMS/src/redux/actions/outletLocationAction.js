import {
  // HANDLE_COMPANYPROFILE_SUBMIT,
  CREATE_OUTLETLOCATION,
  UPDATE_OUTLETLOCATION,
  GET_OUTLETLOCATION_GRIDDATA
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

export default {
  getGridData: getGridData,
  createOutletLocation: createOutletLocation,
  updateOutletLocation: updateOutletLocation
};