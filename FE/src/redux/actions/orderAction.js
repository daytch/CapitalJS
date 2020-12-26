import { GET_OUTLET} from "../../constants"

export function storeOrder(data){
    return{
        type: 'STORE_ORDER',
        payload: data
    }
}

export function getOrder(data){
    return{
        type: 'GET_ORDER',
        payload: data
    }
}

export default {
    storeOrder,
    getOrder

}