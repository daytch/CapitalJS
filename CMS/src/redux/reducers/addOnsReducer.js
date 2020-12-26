import {
  SET_ADD_ONS_LOADING,
  SET_ADD_ONS,
} from '../../constants';

const INIT_STATE = {
  isLoading: false,
  griddata: []
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case SET_ADD_ONS_LOADING: {
      return {
        ...state,
        isLoading: action.payload
      };
    }
    case SET_ADD_ONS: {
      return {
        ...state,
        griddata: action.payload
      };
    }
    default:
      return state;
  }
};