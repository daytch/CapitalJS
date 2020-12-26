import {
    SET_CATEGORYPRODUCT,
  SET_CATEGORYPRODUCT_LOADING,
} from '../../constants';

const INIT_STATE = {
  isLoading: false,
  griddata: []
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case SET_CATEGORYPRODUCT_LOADING: {
      return {
        ...state,
        isLoading: action.payload
      };
    }
    case SET_CATEGORYPRODUCT: {
      return {
        ...state,
        griddata: action.payload
      };
    }
    default:
      return state;
  }
};