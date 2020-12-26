import {
  SET_SLIDERSTATUS_DROPDOWN,
  SET_BRANCHSTATUS_DROPDOWN,
  SET_BLOGSTATUS_DROPDOWN,
  SET_TOASTMESSAGE,
  TOAST_AUTOHIDE,
  TOAST_POSITION,
  SET_CATEGORYPRODUCT_DROPDOWN,
  SET_PRODUCT_DROPDOWN
} from '../../constants';

const INIT_STATE = {
  sidebarShow: 'responsive',
  counter: 0,
  data: {
    position: TOAST_POSITION,
    closeButton: true,
    autoHide: TOAST_AUTOHIDE,
    message: "",
    type: "success",
    title: "Success"
  },
  sliderStatusDropdown: [],
  blogStatusDropdown: [],
  branchStatusDropdown: [],
  categoryProductDropdown: [],
  productDropdown: []
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case SET_TOASTMESSAGE: {
      return {
        ...state,
        data: action.payload,
        counter: state.counter+1
      };
    }
    case SET_SLIDERSTATUS_DROPDOWN: {
      return {
        ...state,
        sliderStatusDropdown: action.payload
      };
    }
    case SET_BRANCHSTATUS_DROPDOWN: {
      return {
        ...state,
        branchStatusDropdown: action.payload
      };
    }
    case SET_BLOGSTATUS_DROPDOWN: {
      return {
        ...state,
        blogStatusDropdown: action.payload
      };
    }
    case SET_CATEGORYPRODUCT_DROPDOWN: {
      return {
        ...state,
        categoryProductDropdown: action.payload
      }
    }
    case SET_PRODUCT_DROPDOWN: {
      return {
        ...state,
        productDropdown: action.payload
      }
    }
    case 'set':
      return {...state, ...action }
    default:
      return state;
  }
};