import {
  SET_CONTACT_LOADING,
  SET_CONTACT_DATA,
} from '../../constants';

const INIT_STATE = {
  isLoading: false,
  data: []
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case SET_CONTACT_LOADING: {
      return {
        ...state,
        isLoading: action.payload
      };
    }
    case SET_CONTACT_DATA: {
      return {
        ...state,
        data: action.payload
      };
    }
    default:
      return state;
  }
};