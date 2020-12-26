import {
  HANDLE_LOGIN,
  HANDLE_REGISTER
} from '../../constants';

const INIT_STATE = {
  message: {
    isError: "",
    message: "",
  },
  data: {},
  user: {},
  isRegister: false

};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case HANDLE_LOGIN: {
      return {
        ...state,
        data: action.payload
      };
    }
    case HANDLE_REGISTER: {
      return {
        ...state,
        data: action.payload
      };
    }
    case 'SET_USER': {
      return {
        ...state,
        user: action.payload
      }
    }
    case 'MESSAGE': {
      return {
        ...state,
        message: action.payload
      }
    }
    default:
      return state;
  }
};