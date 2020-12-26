import {
    SET_PRODUCT,
} from '../../constants';

const INIT_STATE = {
  data: [{
    AddOns: [],
      Pictures: [],
      _id: "",
      Name: "",
      CategoryID: "",
      Weigth: "",
      CapitalPrice: "",
      SellingPrice: "",
      Stock: "",
      Created: "",
      CreatedBy: "",
      RowStatus: true,
  }]
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case SET_PRODUCT: {
      return {
        ...state,
        data: action.payload
      };
    }
    default:
      return state;
  }
};