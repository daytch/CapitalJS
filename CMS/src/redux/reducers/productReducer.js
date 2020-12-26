import {
  SET_PRODUCT,
  SET_PRODUCT_LOADING,
} from '../../constants';

const INIT_STATE = {
  isLoading: false,
  griddata: []
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case SET_PRODUCT_LOADING: {
      return {
        ...state,
        isLoading: action.payload
      };
    }
    case SET_PRODUCT: {
      return {
        ...state,
        griddata: action.payload
      };
    }
    default:
      return state;
  }
};