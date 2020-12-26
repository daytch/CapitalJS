import { GET_ORDER} from "../../constants"

export function getOrder(data){
    return{
        type: GET_ORDER
    }
}

export default {
    getOrder,

}