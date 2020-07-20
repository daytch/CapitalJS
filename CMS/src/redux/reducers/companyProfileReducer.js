import {
  SET_COMPANYPROFILE_LOADING
} from '../../constants';

const INIT_STATE = {
  isLoading: false,
  data: {}
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case SET_COMPANYPROFILE_LOADING: {
      return {
        ...state,
        isLoading: action.payload
      };
    }
    default:
      return state;
  }
};