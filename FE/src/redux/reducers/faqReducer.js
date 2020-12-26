import {
    SET_FAQ
} from '../../constants';

const INIT_STATE = {
  data: [{
    _id: "",
    sequence: "",
    question: "",
    answer: "",
    created: "",
    createdby: "",
    modified: "",
    modifiedby: "",
    rowstatus: "",
  }]
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case SET_FAQ: {
      return {
        ...state,
        data: action.payload
      };
    }
    default:
      return state;
  }
};