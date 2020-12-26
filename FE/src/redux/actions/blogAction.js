import { GET_BLOG, GET_BLOGS } from "../../constants"

export function getBlogs(){
    return{
        type: GET_BLOGS
    }
}

export function getDetailBlog(data){
    return{
        type: GET_BLOG,
        payload: data
    }
}

export default {
    getBlogs,
    getDetailBlog
}