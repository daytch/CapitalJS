 import React from 'react';
import {public_path} from '../../utils/common';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import Pagination from '../pagination';
import { useDispatch, useSelector } from 'react-redux';
import { getDetailBlog } from '../../redux/actions/blogAction';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';


function DetailBlog(props){
  const dispatch = useDispatch()
  React.useEffect(() => {
    window.scrollTo(0, 0)
      dispatch(getDetailBlog(props.match.params.id))
  }, []);

  const blog = useSelector(state => state.detailBlogReducer.data)
  console.log(blog)
  function getTime(a){
      let date = new Date(a)
      return date.toDateString()
  }
  return(
    <div>
      <section className="blog-section">
        <div className="blog-container">
         <h1>{blog.Title}</h1>
  <small>{
      getTime(blog.Created)
  
  }</small>
         <img style={{width: '100%'}} src={blog.HeaderBlogLink} alt=""/>
                <div className="mt-4" style={{wordWrap: 'break-word'}}>
        {parse(blog.Body)}
         </div>
         
        </div>
      </section>
    </div>
  )
}

export default DetailBlog;