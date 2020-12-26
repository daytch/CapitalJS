import { GET_PROFILE } from "../../constants"

export function getProfile(){
    return{
        type: GET_PROFILE
    }
}

export default {
    getProfile
}