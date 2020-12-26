import { GET_PRODUCT, GET_PRODUCT_DETAIL } from "../../constants"

export function getProduct(){
    return{
        type: GET_PRODUCT
    }
}

export function getDetailProduct(data){
    return{
        type: GET_PRODUCT_DETAIL,
        payload: data
    }
}

export function getProductByName(data){
    return {
        type: 'GET_PRODUCT_NAME',
        payload: data
    }
}

export default {
    getProduct,
    getDetailProduct,
    getProductByName
}