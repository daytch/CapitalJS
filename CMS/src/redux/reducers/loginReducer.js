import {
  SET_LOGIN_LOADING
} from '../../constants';

const INIT_STATE = {
  isLoading: false
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case SET_LOGIN_LOADING: {
      return {
        ...state,
        isLoading: action.payload
      };
    }
    default:
      return state;
  }
};