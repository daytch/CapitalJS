import React from 'react';
import {public_path} from '../../utils/common';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import Pagination from '../pagination';
import { useDispatch, useSelector } from 'react-redux';
import { getBlogs } from '../../redux/actions/blogAction';
import { Link } from 'react-router-dom';

function BlogItem(props){
  return(
    <div className="blog-gridItem">
      <div className="blog-gridItemInner">
        <div className="blog-gridImage">
          <img style={{width: '100%', height: '250px', objectFit: 'cover'}} src={props.url} alt=""/>
        </div>
        <p className="blog-gridItemDescription">{props.Title}</p>
        <Link to={'/blog/'+ props.id} className="blog-readmore">READ MORE</Link>
      </div>
    </div>
  )
}

function Blog(props){
  const dispatch = useDispatch()
  React.useEffect(() => {
    window.scrollTo(0, 0)
      dispatch(getBlogs())
  }, []);
  const blogs = useSelector(state => state.blogReducer.data)
  return(
    <div>
      <section className="blog-section">
        <div className="blog-container">
          <div className="blog-bannerWrapper">
            <img src={public_path('/assets/img/blog-banner.png')} alt=""/>
          </div>
          <div className="blog-gridContainer">
            <div className="blog-grid">
            {
              blogs.map(e => {
                return <BlogItem url={e.HeaderBlogLink} Title={e.Title} id={e._id} />
                
              })
            }
            </div>
          </div>
          <Pagination totalPage={3} />
        </div>
      </section>
    </div>
  )
}

export default Blog;