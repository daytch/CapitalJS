import React from 'react';
import {public_path} from '../../utils/common';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCoffee } from '@fortawesome/free-solid-svg-icons';

function Team(){
  return(
    <div>
        <div className="carrer-section">
            <h1 className="title-carrer">Handy tips before you apply</h1>
            <p>Are you looking for a career in an attractive and exciting company where you can make a difference every day? 
Fantastic! We look forward to receiving your application. To make it easier for you, here are a few things to think about.</p>
           <div className="carrer-bannerWrapper">
            <img src={public_path('/assets/img/operational.png')} alt=""/>
          </div>

          <div className="">
              <h3>1. Do your research</h3>
              <p>It’s important that you do your research and are well prepared when applying for a position. 
                At hm.com, you can read all about our company, and under Working in Indonesia you’ll find
                Take our quiz to find out if you share the H&M sprit!</p>
          </div>

          <div className="">
              <h3>2. Your application</h3>
              <ul>
                  <li>Have a look at your resume and personal letter and, if necessary, adapt it to the position you are applying for.</li>
                  <li>Explain why you’re applying for the position.</li>
                  <li>Make sure you emphasise why you’re a great fit for the position.</li>
                  <li>Don’t make your personal letter too long. One page is sufficient.</li>
              </ul>
          </div>

          <div className="">
              <h3>3. What happens next?</h3>
              <ul>
                  <li>When we receive your application we will send you an e-mail confirmation.</li>
                  <li>We will have a look at your application and you can expect to hear from us within approximately 2 weeks.</li>
                  <li>Our recruiters will get back to you via e-mail or telephone.</li>
              </ul>
          </div>

          <div className="">
              <h3>4. The interview</h3>
              <ul>
                  <li>Make sure you areprepared.......</li>
              </ul>
          </div>

        </div>
      
    </div>
  )
}
export default Team;