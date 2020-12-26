import {
    SET_PROFILE,
} from '../../constants';

const INIT_STATE = {
  data: [{
    _id: "",
    Profile: "",
    Tagline: "",
    Email: "",
    Telphone: "",
    WhatsAppLink: "",
    InstagramLink: "",
    FacebookLink: "",
    TwitterLink: "",
    LogoCapitalLink: "",
    Created: "",
    CreatedBy: "",
  }]
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case SET_PROFILE: {
      return {
        ...state,
        data: action.payload
      };
    }
    default:
      return state;
  }
};