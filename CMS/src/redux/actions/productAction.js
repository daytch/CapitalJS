import {GET_PRODUCT, CREATE_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT} from '../../constants';

export function getProduct(){
    return{
        type: GET_PRODUCT,
        payload: null
    }
}

export function createProduct(data) {
  return {
    type: CREATE_PRODUCT,
    payload: data
  };
}

export function updateProduct(data){
  return{
    type: UPDATE_PRODUCT,
    payload: data
  }
}

export function deleteProduct(data){
    return {
        type: DELETE_PRODUCT,
        payload: data
    }
}

export default {
  createProduct,
  getProduct,
  deleteProduct,
  updateProduct
};