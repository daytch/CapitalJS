import {
    SET_BLOGS,
 SET_SLIDER
} from '../../constants';

const INIT_STATE = {
  data: [{
    _id: "",
    BlogCategoryID: "",
    Title: "",
    Body: "",
    MasterStatusID: "",
    HeaderBlogLink: "",
    Created: "",
    CreatedBy: "",
    RowStatus: true
  }]
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case SET_BLOGS: {
      return {
        ...state,
        data: action.payload
      };
    }
    default:
      return state;
  }
};