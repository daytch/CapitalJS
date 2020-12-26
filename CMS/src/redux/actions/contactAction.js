import { CREATE_CONTACT_DATA, DELETE_CONTACT_DATA, GET_CONTACT_DATA } from "../../constants";

export function getContact(){
    return {
        type: GET_CONTACT_DATA,
        payload: null
    }
}

export function createContact(data){
    return {
        type: CREATE_CONTACT_DATA,
        payload: data
    }
}

export function deleteContact(data){
    return {
        type: DELETE_CONTACT_DATA,
        payload: data
    }
}

  export default {
    getContact: getContact,
    createContact: createContact,
    deleteContact: deleteContact
  };