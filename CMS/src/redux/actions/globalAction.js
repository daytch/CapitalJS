import {
  SET_TOASTMESSAGE,
  TOAST_POSITION,
  TOAST_AUTOHIDE,
  GET_SLIDERSTATUS_DROPDOWN,
  GET_BRANCHSTATUS_DROPDOWN,
  GET_BLOGSTATUS_DROPDOWN,
  GET_CATEGORYPRODUCT_DROPDOWN,
  GET_PRODUCT_DROPDOWN
} from '../../constants';

export function toastSuccess(message, config={}) {
  return {
    type: SET_TOASTMESSAGE,
    payload: {
      position: config.position || TOAST_POSITION,
      closeButton: config.closeButton || true,
      autoHide: config.autoHide || TOAST_AUTOHIDE,
      message: message,
      type: "success",
      title: config.title || "Success"
    }
  };
}

export function toastInfo(message, config={}) {
  return {
    type: SET_TOASTMESSAGE,
    payload: {
      position: config.position || TOAST_POSITION,
      closeButton: config.closeButton || true,
      autoHide: config.autoHide || TOAST_AUTOHIDE,
      message: message,
      type: "info",
      title: config.title || "Info"
    }
  };
}

export function toastError(message, config={}) {
  return {
    type: SET_TOASTMESSAGE,
    payload: {
      position: config.position || TOAST_POSITION,
      closeButton: config.closeButton || true,
      autoHide: config.autoHide || TOAST_AUTOHIDE,
      message: message,
      type: "error",
      title: config.title || "Error"
    }
  };
}

export function toastWarning(message, config={}) {
  return {
    type: SET_TOASTMESSAGE,
    payload: {
      position: config.position || TOAST_POSITION,
      closeButton: config.closeButton || true,
      autoHide: config.autoHide || TOAST_AUTOHIDE,
      message: message,
      type: "warning",
      title: config.title || "Warning"
    }
  };
}

export function getSliderStatusDropdown() {
  return {
    type: GET_SLIDERSTATUS_DROPDOWN,
    payload: null
  };
}
export function getBranchStatusDropdown() {
  return {
    type: GET_BRANCHSTATUS_DROPDOWN,
    payload: null
  };
}
export function getBlogStatusDropdown() {
  return {
    type: GET_BLOGSTATUS_DROPDOWN,
    payload: null
  };
}

export function getCategoryProductDropdown(){
  return {
    type: GET_CATEGORYPRODUCT_DROPDOWN
  }
}

export function getProductDropdown(){
  return {
    type: GET_PRODUCT_DROPDOWN
  }
}

export default {
  toastSuccess: toastSuccess,
  toastInfo: toastInfo,
  toastError: toastError,
  toastWarning: toastWarning,
  getSliderStatusDropdown: getSliderStatusDropdown,
  getBranchStatusDropdown: getBranchStatusDropdown,
  getBlogStatusDropdown: getBlogStatusDropdown,
  getCategoryProductDropdown: getCategoryProductDropdown,
  getProductDropdown: getProductDropdown
};