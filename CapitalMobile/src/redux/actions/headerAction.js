import {
  SET_COUNT,
  HANDLE_COUNT
} from '../../constants';

export function setCount(value) {
  return {
    type: HANDLE_COUNT,
    payload: value
  };
}

export default {
  setCount
};