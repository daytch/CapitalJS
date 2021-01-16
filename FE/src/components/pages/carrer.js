import React from 'react';
import {public_path} from '../../utils/common';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCoffee } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Carrer(){
  return(
    <div>
        <div className="carrer-section">
            <h1 className="title-carrer">CARRER</h1>
           <div className="carrer-bannerWrapper">
            <img src={public_path('/assets/img/carrer-banner.png')} alt=""/>
          </div>

          <div className="mid-content">
            <h2 className="title-carrer">OFFICE</h2>
            <div className="middle"></div>
            <h2 className="font-bold">OPERATIONAL</h2>
          </div>

          <div className="img-carrer">
            <div className="img-carrer-sub">
                <img className="img-content" src={public_path('/assets/img/carrer-1.png')} alt=""/>
                <Link to="/workplace" className="carrer-link">
                  <h5 className="font-bold">OUR WORKPLACE</h5>
                  <FontAwesomeIcon icon={faArrowRight} />
                </Link>
                 <img className="img-content" src={public_path('/assets/img/carrer-2.png')} alt=""/>
                 <Link to="/operational" className="carrer-link">
                  <h5 className="font-bold">OPERATIONAL TEAM</h5>
                  <FontAwesomeIcon icon={faArrowRight} />
                </Link>
                
            </div>

            <div className="img-center img-carrer-sub">
              <img className="img-content" src={public_path('/assets/img/carrer-5.png')} alt=""/>
            </div>

            <div className="img-carrer-sub">
              <img className="img-content" src={public_path('/assets/img/carrer-5.png')} alt=""/>
              <Link to="/tips" className="carrer-link">
                  <h5 className="font-bold">TIPS BEFORE YOU APPLY</h5>
                  <FontAwesomeIcon icon={faArrowRight} />
                </Link>
              <img className="img-content" src={public_path('/assets/img/carrer-1.png')} alt=""/>
              <Link to="/team" className="carrer-link">
                <h5 className="font-bold">OFFICE TEAM</h5>
                <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </div>
               
          </div>
        </div>
      
    </div>
  )
}
export default Carrer;