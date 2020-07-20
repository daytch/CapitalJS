import {
  SET_TOASTMESSAGE,
  TOAST_POSITION,
  TOAST_AUTOHIDE
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

export default {
  toastSuccess: toastSuccess,
  toastInfo: toastInfo,
  toastError: toastError,
  toastWarning: toastWarning
};