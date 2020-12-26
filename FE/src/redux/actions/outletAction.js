import { GET_OUTLET} from "../../constants"

export function getOutlet(){
    return{
        type: GET_OUTLET
    }
}

export function getOutletDeliver(){
    return{
        type: 'GET_OUTLET_DELIVER'
    }
}

export default {
    getOutlet,
    getOutletDeliver
}