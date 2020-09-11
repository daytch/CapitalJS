import {
  SET_CAREER_LOADING,
  SET_CAREER_DATA
} from '../../constants';

const INIT_STATE = {
  isLoading: false,
  data: null
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case SET_CAREER_LOADING: {
      return {
        ...state,
        isLoading: action.payload
      };
    }
    case SET_CAREER_DATA: {
      return {
        ...state,
        data: action.payload
      };
    }
    default:
      return state;
  }
};