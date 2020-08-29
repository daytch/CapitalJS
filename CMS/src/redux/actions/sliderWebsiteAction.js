import {
  GET_SLIDERWEBSITE_GRIDDATA,
  SAVE_SLIDERWEBSITE,
  DELETE_SLIDERWEBSITE
} from '../../constants';

export function getGridData() {
  return {
    type: GET_SLIDERWEBSITE_GRIDDATA,
    payload: null
  };
}

export function saveSliderWebsite(data) {
  return {
    type: SAVE_SLIDERWEBSITE,
    payload: data
  };
}

export function deleteSliderWebsite() {
  return {
    type: DELETE_SLIDERWEBSITE,
    payload: null
  };
}

export default {
  getGridData: getGridData,
  saveSliderWebsite: saveSliderWebsite,
  deleteSliderWebsite: deleteSliderWebsite
};