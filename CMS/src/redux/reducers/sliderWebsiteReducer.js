import {
  SET_SLIDERWEBSITE_LOADING,
  SET_SLIDERWEBSITE_GRIDDATA
} from '../../constants';

const INIT_STATE = {
  isLoading: false,
  griddata: []
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case SET_SLIDERWEBSITE_LOADING: {
      return {
        ...state,
        isLoading: action.payload
      };
    }
    case SET_SLIDERWEBSITE_GRIDDATA: {
      return {
        ...state,
        griddata: action.payload
      };
    }
    default:
      return state;
  }
};