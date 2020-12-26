import { CREATE_CATEGORYPRODUCT, DELETE_CATEGORYPRODUCT, GET_CATEGORYPRODUCT, UPDATE_CATEGORYPRODUCT } from '../../constants';

export function getCategoryProduct(){
    return{
        type: GET_CATEGORYPRODUCT,
        payload: null
    }
}

export function createCategoryProduct(data) {
  return {
    type: CREATE_CATEGORYPRODUCT,
    payload: data
  };
}

export function updateCategoryProduct(data){
  return{
    type: UPDATE_CATEGORYPRODUCT,
    payload: data
  }
}

export function deleteCategoryProduct(data){
    return {
        type: DELETE_CATEGORYPRODUCT,
        payload: data
    }
}

export default {
  getCategoryProduct,
  createCategoryProduct,
  updateCategoryProduct,
  deleteCategoryProduct
};