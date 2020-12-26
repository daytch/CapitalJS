import {
  SET_OUTLETLOCATION_LOADING,
  SET_OUTLETLOCATION_GRIDDATA,
} from '../../constants';

const INIT_STATE = {
  isLoading: false,
  griddata: []
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case SET_OUTLETLOCATION_LOADING: {
      return {
        ...state,
        isLoading: action.payload
      };
    }
    case SET_OUTLETLOCATION_GRIDDATA: {
      return {
        ...state,
        griddata: action.payload
      };
    }
    default:
      return state;
  }
};