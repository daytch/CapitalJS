import {
  SET_OUTLETLOCATION_LOADING,
  SET_OUTLETLOCATION_GRIDDATA,
  SET_ORDER
} from '../../constants';

const INIT_STATE = {
  isLoading: false,
  griddata: []
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case SET_ORDER: {
      return {
        ...state,
        griddata: action.payload
      };
    }
    default:
      return state;
  }
};