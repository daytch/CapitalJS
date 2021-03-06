import {
  SET_COMPANYPROFILE_LOADING,
  SET_COMPANYPROFILE_DATA
} from '../../constants';

const INIT_STATE = {
  isLoading: false,
  data: null
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case SET_COMPANYPROFILE_LOADING: {
      return {
        ...state,
        isLoading: action.payload
      };
    }
    case SET_COMPANYPROFILE_DATA: {
      return {
        ...state,
        data: action.payload
      };
    }
    default:
      return state;
  }
};