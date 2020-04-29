import {
  HANDLE_LOGIN
} from '../../constants';

const INIT_STATE = {
  form: {
    email: "test@gmail.com",
    password: "testtt",
    rememberme: false,
  },
  data: {}
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case HANDLE_LOGIN: {
      return {
        ...state,
        dataHome: action.payload
      };
    }
    default:
      return state;
  }
};