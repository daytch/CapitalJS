import React from 'react';
import {public_path} from '../../utils/common';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import Pagination from '../pagination';
import { useDispatch, useSelector } from 'react-redux';
import { getBlogs } from '../../redux/actions/blogAction';
import { Link } from 'react-router-dom';

function BlogItem(props){
  return(
    <div className="blog-gridItem p-3 my-3">
      <div className="row">
        <div className="col-md-3">
        <div className="blog-gridImage">
          <img style={{width: '100%', height: '200px', objectFit: 'cover'}} src={props.url} alt=""/>
        </div>

        </div>
        <div className="col-md">  
        <p className="">{props.Title}</p>
        <Link to={'/blog/'+ props.id} className="">READ MORE</Link>
        </div>
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
          <h1 className="title-carrer mb-3 text-center">BLOG</h1>
          <div className="">
            <div className="">
            {
              blogs.map(e => {
                return <BlogItem url={e.HeaderBlogLink} Title={e.Title} id={e._id} />
                
              })
            }
            </div>
          </div>
          <Pagination totalPage={3} />

           <div className="row mt-5">
        <div className="col-md-4 my-5 position-relative">
          <div className="section-blog py-3 px-4">Asal usul cake</div>
          {/* <img src={public_path('/assets/img/about-building.png')} style={{width: '100%', height: '200px'}}/> */}
          <div className="bg-primary" style={{width: '100%', height: '200px'}}></div>
        </div>
        <div className="col-md-4 my-5 position-relative">
          <div className="section-blog py-3 px-4">Asal usul cake</div>
          {/* <img src={public_path('/assets/img/about-building.png')} style={{width: '100%', height: '200px'}}/> */}
          <div className="bg-primary" style={{width: '100%', height: '200px'}}></div>
        </div>
        <div className="col-md-4 my-5 position-relative">
          <div className="section-blog py-3 px-4">Asal usul cake</div>
          {/* <img src={public_path('/assets/img/about-building.png')} style={{width: '100%', height: '200px'}}/> */}
          <div className="bg-primary" style={{width: '100%', height: '200px'}}></div>
        </div>
      </div>
        </div>
      </section>
    </div>
  )
}

export default Blog;