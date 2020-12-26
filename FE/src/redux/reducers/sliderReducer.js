import {
 SET_SLIDER
} from '../../constants';

const INIT_STATE = {
  data: [{
    _id: "",
      Picture: "",
      Description: "",
      MasterStatus: "",
      Created: "",
      CreatedBy: "",
      Modified: "",
      ModifiedBy: "",
      RowStatus: "",
      "__v": 0
  }]
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case SET_SLIDER: {
      return {
        ...state,
        data: action.payload
      };
    }
    default:
      return state;
  }
};