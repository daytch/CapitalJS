import {
  CREATE_FAQ,
  UPDATE_FAQ,
  DELETE_FAQ,
  GET_FAQ_GRIDDATA
} from '../../constants';

export function getFAQGridData() {
  return {
    type: GET_FAQ_GRIDDATA,
    payload: null
  };
}

export function updateFAQ(data, callback) {
  return {
    type: UPDATE_FAQ,
    payload: data,
    callback: callback
  };
}

export function createFAQ(data, callback) {
  return {
    type: CREATE_FAQ,
    payload: data,
    callback: callback
  };
}

export function deleteFAQ(id) {
  return {
    type: DELETE_FAQ,
    payload: id
  };
}

export default {
  getFAQGridData: getFAQGridData,
  createFAQ: createFAQ,
  updateFAQ: updateFAQ,
  deleteFAQ: deleteFAQ
};