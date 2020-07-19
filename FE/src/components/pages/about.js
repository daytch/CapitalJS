import React from 'react';
import {public_path} from '../../utils/common';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function About(props){
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  return(
    <div className="about-container">
      <section className="about-section">
        <div className="about-content">
          <div className="about-logo">
            <img src={public_path('/assets/img/about-logo.png')} alt=""/>
          </div>
          <div className="about-description">
            <h4 className="about-descriptionTitle">TENTANG CAPITAL BAKERY</h4>
            <p>
              Berawal dari Medan pada tahun 80an, karena banyak faktor sebuah usaha Bakery ini lalu pindah ke ibukota Indonesia tercinta. Jakarta, tepatnya pada tahun 1989. Karena kata 'Capital' dalam bahasa Indonesia berarti ibukota, maka Bakery kami berawal di Jakarta dengan nama 'Capital Bakery & Cake'.
              <br/>
              Seiring dengan berjalannya waktu. Capital Bakery & Cake sekarang kian berkembang menjadi 6 outlets berkat dukungan-dukungan dari para pelanggan kami yang setia. Dan kami juga akan berusaha memberikan yang terbaik dari kualitas & pelayanan untuk anda.
            </p>
            <h4 className="about-descriptionTitle">VISI</h4>
            <p>Menyenangkan konsumen dengan produk-produk kami dan menjadikannya penggemar Capital bakery & cake.</p>
            <h4 className="about-descriptionTitle">MISI</h4>
            <p>Menyediakan aneka ragam produk yang sehat untuk dikonsumsi masyarakat dan memberikan pelayanan yang terbaik kepada konsumen.</p>
          </div>
        </div>
        <div className="about-building">
          <img src={public_path('/assets/img/about-building.png')} alt=""/>
        </div>
      </section>
    </div>
  )
}

export default About;