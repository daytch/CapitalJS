import {
  SET_COUNT
} from '../../constants';

const INIT_STATE = {
  count: 0
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case SET_COUNT: {
      return {
        ...state,
        count: action.payload
      };
    }
    default:
      return state;
  }
};