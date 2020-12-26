import {
    SET_OUTLET,
} from '../../constants';

const INIT_STATE = {
  data: [{
    _id: "",
      Name: "",
      Telephone: "",
      Address: "",
      Maps: "",
      Picture: "",
      Created: "",
      CreatedBy: "",
      RowStatus: ""
  }]
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case SET_OUTLET: {
      return {
        ...state,
        data: action.payload
      };
    }
    default:
      return state;
  }
};