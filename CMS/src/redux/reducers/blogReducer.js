import {
  SET_BLOG_LOADING,
  SET_BLOG_GRIDDATA,
  SET_BLOGCATEGORY
} from '../../constants';

const INIT_STATE = {
  isLoading: false,
  griddata: [],
  categories: []
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case SET_BLOG_LOADING: {
      return {
        ...state,
        isLoading: action.payload
      };
    }
    case SET_BLOG_GRIDDATA: {
      return {
        ...state,
        griddata: action.payload
      };
    }
    case SET_BLOGCATEGORY: {
      return {
        ...state,
        categories: action.payload
      };
    }
    default:
      return state;
  }
};