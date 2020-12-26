import { all, put, call, takeLatest } from 'redux-saga/effects';
import {
  URL,
  SET_BLOG_LOADING,
  GET_BLOG_GRIDDATA,
  SET_BLOG_GRIDDATA,
  CREATE_BLOG,
  UPDATE_BLOG,
  DELETE_BLOG,
  GET_BLOGCATEGORY,
  SET_BLOGCATEGORY,
  CREATE_BLOGCATEGORY,
  UPDATE_BLOGCATEGORY,
  DELETE_BLOGCATEGORY,
} from '../../constants';
import { POST /*, PUT,GET, DELETE*/ } from '../../services';
import { success, error } from '../../utils/notification';

// const blog = state => state.blogReducer;

export function* getBlogGridData(action) {
  try {
    yield put({ type: SET_BLOG_LOADING, payload: true });
    const res = yield call(
      POST,
      URL.GET_BLOG_GRIDDATA
    );
    yield put({ type: SET_BLOG_GRIDDATA, payload: res.result });
    yield put({ type: SET_BLOG_LOADING, payload: false });
  }
  catch (err) {
    error(err)
  }
}

export function* getBlogCategory(action) {
  try {
    yield put({ type: SET_BLOG_LOADING, payload: true });
    const res = yield call(
      POST,
      URL.GET_BLOGCATEGORY
    );
    yield put({ type: SET_BLOGCATEGORY, payload: res.result });
    yield put({ type: SET_BLOG_LOADING, payload: false });
  }
  catch (err) {
    error(err)
  }
}

export function* createBlog(action) {
  try {
    const data = action.payload;
    const callback = action.callback;
    yield put({ type: SET_BLOG_LOADING, payload: true });
    const res = yield call(
      POST,
      URL.SAVE_BLOG,
      {
        blogCategoryId: data.blogCategoryId,
        title: data.title,
        body: data.body,
        masterStatusId: data.masterStatusId,
        headerBlogLink: data.headerBlogLink
      }
    );
    yield success(res.message)
    if (callback instanceof Function) {
      yield call(callback)
    }
    yield call(getBlogGridData)
    yield put({ type: SET_BLOG_LOADING, payload: false });
  }
  catch (err) {
    error(err)
  }
}

export function* createBlogCategory(action) {
  try {
    const data = action.payload;
    const callback = action.callback;
    yield put({ type: SET_BLOG_LOADING, payload: true });
    const res = yield call(
      POST,
      URL.SAVE_BLOGCATEGORY,
      {
        name: data.name,
        description: data.description
      }
    );
    console.log(res)
    yield success(res.message)
    if (callback instanceof Function) {
      yield call(callback)
    }
    yield call(getBlogCategory)
    yield put({ type: SET_BLOG_LOADING, payload: false });
  }
  catch (err) {
    error(err)
  }
}

export function* updateBlog(action) {
  try {
    const data = action.payload;
    const callback = action.callback;
    yield put({ type: SET_BLOG_LOADING, payload: true });
    const res = yield call(
      POST,
      URL.SAVE_BLOG,
      {
        id: data.id,
        blogCategoryId: data.blogCategoryId,
        title: data.title,
        body: data.body,
        masterStatusId: data.masterStatusId,
        headerBlogLink: data.headerBlogLink
      }
    );
    yield success(res.message)
    if (callback instanceof Function) {
      yield call(callback)
    }
    yield call(getBlogGridData)
    yield put({ type: SET_BLOG_LOADING, payload: false });
  }
  catch (err) {
    error(err)
  }
}

export function* updateBlogCategory(action) {
  try {
    const data = action.payload;
    const callback = action.callback;
    yield put({ type: SET_BLOG_LOADING, payload: true });
    const res = yield call(
      POST,
      URL.SAVE_BLOGCATEGORY,
      {
        id: data.id,
        name: data.name,
        description: data.description
      }
    );
    yield success(res.message)
    if (callback instanceof Function) {
      yield call(callback)
    }
    yield call(getBlogCategory)
    yield put({ type: SET_BLOG_LOADING, payload: false });
  }
  catch (err) {
    error(err)
  }
}

export function* deleteBlog(action) {
  try {
    const id = action.payload;
    yield put({ type: SET_BLOG_LOADING, payload: true });
    yield call(
      POST,
      URL.DELETE_BLOG,
      {
        id: id
      }
    );
    yield call(getBlogGridData)
    yield put({ type: SET_BLOG_LOADING, payload: false });
  }
  catch (err) {
    error(err)
  }
}

export function* deleteBlogCategory(action) {
  try {
    const id = action.payload;
    yield put({ type: SET_BLOG_LOADING, payload: true });
    yield call(
      POST,
      URL.DELETE_BLOGCATEGORY,
      {
        _id: id
      }
    );
    yield call(getBlogCategory)
    yield put({ type: SET_BLOG_LOADING, payload: false });
  }
  catch (err) {
    error(err)
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest(GET_BLOG_GRIDDATA, getBlogGridData),
    takeLatest(CREATE_BLOG, createBlog),
    takeLatest(UPDATE_BLOG, updateBlog),
    takeLatest(DELETE_BLOG, deleteBlog),
    takeLatest(GET_BLOGCATEGORY, getBlogCategory),
    takeLatest(CREATE_BLOGCATEGORY, createBlogCategory),
    takeLatest(UPDATE_BLOGCATEGORY, updateBlogCategory),
    takeLatest(DELETE_BLOGCATEGORY, deleteBlogCategory)
  ]);
}