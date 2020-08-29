import {
  CREATE_BLOG,
  CREATE_BLOGCATEGORY,
  UPDATE_BLOG,
  UPDATE_BLOGCATEGORY,
  DELETE_BLOG,
  DELETE_BLOGCATEGORY,
  GET_BLOG_GRIDDATA,
  GET_BLOGCATEGORY
} from '../../constants';

export function getBlogGridData() {
  return {
    type: GET_BLOG_GRIDDATA,
    payload: null
  };
}

export function getBlogCategory() {
  return {
    type: GET_BLOGCATEGORY,
    payload: null
  };
}

export function updateBlog(data, callback) {
  return {
    type: UPDATE_BLOG,
    payload: data,
    callback: callback
  };
}

export function createBlog(data, callback) {
  return {
    type: CREATE_BLOG,
    payload: data,
    callback: callback
  };
}

export function deleteBlog(id) {
  return {
    type: DELETE_BLOG,
    payload: id
  };
}

export function updateBlogCategory(data, callback) {
  return {
    type: UPDATE_BLOGCATEGORY,
    payload: data,
    callback: callback
  };
}

export function createBlogCategory(data, callback) {
  return {
    type: CREATE_BLOGCATEGORY,
    payload: data,
    callback: callback
  };
}

export function deleteBlogCategory(id) {
  return {
    type: DELETE_BLOGCATEGORY,
    payload: id
  };
}

export default {
  getBlogGridData: getBlogGridData,
  createBlog: createBlog,
  updateBlog: updateBlog,
  deleteBlog: deleteBlog,
  getBlogCategory: getBlogCategory,
  createBlogCategory: createBlogCategory,
  updateBlogCategory: updateBlogCategory,
  deleteBlogCategory: deleteBlogCategory
};