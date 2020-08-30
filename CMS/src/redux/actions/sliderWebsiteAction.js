import {
  GET_SLIDERWEBSITE_GRIDDATA,
  UPDATE_SLIDERWEBSITE,
  SAVE_SLIDERWEBSITE,
  DELETE_SLIDERWEBSITE
} from '../../constants';

export function getGridData() {
  return {
    type: GET_SLIDERWEBSITE_GRIDDATA,
    payload: null
  };
}

export function saveSliderWebsite(data, callback) {
  return {
    type: SAVE_SLIDERWEBSITE,
    payload: data,
    callback: callback
  };
}

export function updateSliderWebsite(data, callback) {
  return {
    type: UPDATE_SLIDERWEBSITE,
    payload: data,
    callback: callback
  };
}

export function deleteSliderWebsite(data ,callback) {
  return {
    type: DELETE_SLIDERWEBSITE,
    payload: data,
    callback: callback
  };
}

export default {
  getGridData: getGridData,
  saveSliderWebsite: saveSliderWebsite,
  updateSliderWebsite: updateSliderWebsite,
  deleteSliderWebsite: deleteSliderWebsite
};