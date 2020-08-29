import {
  HANDLE_COMPANYPROFILE_SUBMIT,
  GET_COMPANYPROFILE_DATA
} from '../../constants';

export function companyProfileSubmit(data) {
  return {
    type: HANDLE_COMPANYPROFILE_SUBMIT,
    payload: data
  };
}

export function getCompanyProfile(callback) {
  return {
    type: GET_COMPANYPROFILE_DATA,
    payload: null,
    callback: callback
  };
}

export default {
  companyProfileSubmit: companyProfileSubmit,
  getCompanyProfile: getCompanyProfile
};