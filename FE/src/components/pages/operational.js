import React from 'react';
import {public_path} from '../../utils/common';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCoffee } from '@fortawesome/free-solid-svg-icons';

function Team(){
  return(
    <div>
        <div className="carrer-section">
            <h1 className="title-carrer">OPERATIONAL TEAM</h1>
           <div className="carrer-bannerWrapper">
            <img src={public_path('/assets/img/operational.png')} alt=""/>
          </div>

          <div className="box-carrer-content">
              <div className="box-contain flex-1">
                  <h6>Chef De Partie Pastry</h6>
                  <div>Chef Pastry</div>
              </div>
              <div className="box-contain mini-rounded">
                  Apply Now
              </div>
          </div>

        </div>
      
    </div>
  )
}
export default Team;