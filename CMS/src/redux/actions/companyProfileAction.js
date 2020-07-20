import {
  HANDLE_COMPANYPROFILE_SUBMIT
} from '../../constants';

export function companyProfileSubmit(data) {
  return {
    type: HANDLE_COMPANYPROFILE_SUBMIT,
    payload: data
  };
}

export default {
  companyProfileSubmit: companyProfileSubmit
};