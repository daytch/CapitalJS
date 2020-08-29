import {
  SET_FAQ_LOADING,
  SET_FAQ_GRIDDATA
} from '../../constants';

const INIT_STATE = {
  isLoading: false,
  griddata: []
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case SET_FAQ_LOADING: {
      return {
        ...state,
        isLoading: action.payload
      };
    }
    case SET_FAQ_GRIDDATA: {
      return {
        ...state,
        griddata: action.payload
      };
    }
    default:
      return state;
  }
};