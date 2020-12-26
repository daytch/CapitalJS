import React from 'react';
import {public_path} from '../../utils/common';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCoffee } from '@fortawesome/free-solid-svg-icons';

function Team(){
  return(
    <div>
        <div className="carrer-section">
            <h1 className="title-carrer">OFFICE TEAM</h1>
           <div className="carrer-bannerWrapper">
            <img src={public_path('/assets/img/team.png')} alt=""/>
          </div>

          <div className="box-carrer-content">
              <div className="box-contain flex-1">
                  <h6>Finance - AR</h6>
                  <div>AR FINANCE</div>
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