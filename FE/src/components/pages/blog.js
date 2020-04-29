import React from 'react';
import {public_path} from '../../utils/common';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function BlogItem(props){
  return(
    <div className="blog-gridItem">
      <div className="blog-gridItemInner">
        <div className="blog-gridImage">
          <img src={public_path(props.url)} alt=""/>
        </div>
        <p className="blog-gridItemDescription">{props.description}</p>
        <span className="blog-readmore">READ MORE</span>
      </div>
    </div>
  )
}

function Blog(props){
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  return(
    <div>
      <section className="blog-section">
        <div className="blog-container">
          <div className="blog-bannerWrapper">
            <img src={public_path('/assets/img/blog-banner.png')} alt=""/>
          </div>
          <div className="blog-gridContainer">
            <div className="blog-grid">
            <BlogItem url="/assets/img/blog-cake1.png" description="Capital bakery edisi imlek Capital bakery edisi imlek Capital bakery edisi imlek Capital bakery edisi imlek Capital bakery edisi imlek Capital bakery edisi imlek" />
            <BlogItem url="/assets/img/blog-cake1.png" description="Capital bakery edisi imlek" />
            <BlogItem url="/assets/img/blog-cake1.png" description="Capital bakery edisi imlek" />
            <BlogItem url="/assets/img/blog-cake1.png" description="Capital bakery edisi imlek" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog;