import React from 'react';
import {public_path} from '../../utils/common';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function About(props){
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  return(
    <div className="">
      <section className="about-section">
        <div className="about-content">
          <h1 className="title-carrer mb-3">ABOUT US</h1>
          <div className="d-md-flex">
          <div className="flex-fill">
            <img style={{width: '200px', height: '250px'}} src={public_path('/assets/img/about-logo.png')} alt=""/>
          </div>
            <div className="card mt-5 mt-md-0 d-flex align-items-center p-3 bg-secondary">
            <h1>VIDEO ANIMASI</h1>
          </div>
          </div>

          
          <div className="d-flex mt-5">
          <div className="about-description">
            <p>
              Berawal dari Medan pada tahun 80an, karena banyak faktor sebuah usaha Bakery ini lalu pindah ke ibukota Indonesia tercinta. Jakarta, tepatnya pada tahun 1989. Karena kata 'Capital' dalam bahasa Indonesia berarti ibukota, maka Bakery kami berawal di Jakarta dengan nama 'Capital Bakery & Cake'.
              <br/>
              Seiring dengan berjalannya waktu. Capital Bakery & Cake sekarang kian berkembang menjadi 6 outlets berkat dukungan-dukungan dari para pelanggan kami yang setia. Dan kami juga akan berusaha memberikan yang terbaik dari kualitas & pelayanan untuk anda.
            </p>
          </div>
    <div className="">
          <img style={{width: '200px', height: '200px'}} src={public_path('/assets/img/about-building.png')} alt=""/>
        </div>

        </div>
        </div>
      </section>
    </div>
  )
}

export default About;