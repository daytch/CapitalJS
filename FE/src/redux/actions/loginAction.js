import {
  HANDLE_LOGIN
} from '../../constants';

export function doLogin(data) {
  return {
    type: HANDLE_LOGIN,
    payload: data
  };
}

export default {
  doLogin: doLogin
};