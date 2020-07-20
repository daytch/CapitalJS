import {
  SET_TOASTMESSAGE,
  TOAST_AUTOHIDE,
  TOAST_POSITION
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
  }
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
    case 'set':
      return {...state, ...action }
    default:
      return state;
  }
};