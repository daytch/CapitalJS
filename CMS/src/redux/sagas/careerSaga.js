import { all, put, call, takeLatest } from 'redux-saga/effects';
import {
  URL,
  HANDLE_CAREER_SUBMIT,
  SET_CAREER_LOADING,
  SET_CAREER_DATA,
  GET_CAREER_DATA
} from '../../constants';
import {GET, POST} from '../../services';
import {success, error} from '../../utils/notification';
import {getUsername} from '../../utils';

const companyProfile = state => state.companyProfileReducer;

export function* companyProfileSubmit(action) {
  try {
    const data = action.payload;
    const param = {
      _id: data.id,
      profile: data.profile,
      tagLine: data.tagline,
      email: data.email,
      telphone: data.phone,
      whatsAppLink: data.whatsapp,
      instagramLink: data.instagram,
      facebookLink: data.facebook,
      twitterLink: data.twitter,
      logoCapitalLink: data.logo
    }
    yield put({ type: SET_CAREER_LOADING, payload: true });
    const res = yield call(
      POST,
      URL.SAVE_CAREER,
      param
    );
    if(res.isError===0){
      yield success(res.message);
    }
    else {
      yield error(res.message);
    }
    yield put({ type: SET_CAREER_LOADING, payload: false });
  }
  catch (err) {
    error(err)
  }
}

export function* getCompanyProfile(action) {
  try {
    const callback = action.callback;
    yield put({ type: SET_CAREER_LOADING, payload: true });
    const res = yield call(
      GET,
      URL.GET_CAREER_DATA
    );
    if(res.isError===0 && res.companyProfile != null)
    {
      yield put({ type: SET_CAREER_DATA, payload: {
        id: res.companyProfile._id,
        profile: res.companyProfile.Profile,
        tagline: res.companyProfile.Tagline || "",
        email: res.companyProfile.Email,
        phone: res.companyProfile.Telphone,
        whatsapp: res.companyProfile.WhatsAppLink,
        instagram: res.companyProfile.InstagramLink,
        facebook: res.companyProfile.FacebookLink,
        twitter: res.companyProfile.TwitterLink,
        logo: res.companyProfile.LogoCapitalLink
      }});
    }
    yield put({ type: SET_CAREER_LOADING, payload: false });
  }
  catch (err) {
    error(err)
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest(HANDLE_CAREER_SUBMIT, companyProfileSubmit),
    takeLatest(GET_CAREER_DATA, getCompanyProfile)
  ]);
}