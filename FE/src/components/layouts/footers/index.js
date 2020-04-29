import React from 'react';
import {Link} from 'react-router-dom';
import {public_path} from '../../../utils/common';

function Footer(){
  return(
    <footer>
      <div className="motherImage">
        <img src={public_path("/assets/img/mother.png")} />
      </div>
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-leftContent">
            <div className="footer-leftContentInner">
              <div className="footer-linkContainer">
                <Link to="/about" className="footer-link">ABOUT US</Link>
                <Link to="/blog" className="footer-link">BLOG</Link>
                <Link to="/outlet" className="footer-link">OUTLET LOCATIONS</Link>
                <a className="footer-link">CAREER</a>
                <a className="footer-link">CONTACT US</a>
                <a className="footer-link">FAQ</a>
                <a className="footer-link">PAYMENT METHODS</a>
                <a className="footer-link">ORDER BY WEBSITE</a>
                <Link to="/delivery" className="footer-link">DELIVERY</Link>
                <a className="footer-link">FIND US</a>
              </div>
              <div className="footer-leftImageContainer">
                <div className="footer-leftImage">
                  <img src={public_path('/assets/img/rolling-pin.png')} alt=""/>
                </div>
                <div className="footer-leftImage">
                  <img src={public_path('/assets/img/whisk.png')} alt=""/>
                </div>
                <div className="footer-leftImage">
                  <img src={public_path('/assets/img/spoon.png')} alt=""/>
                </div>
                <div className="footer-leftImage">
                  <img src={public_path('/assets/img/piping-bag.png')} alt=""/>
                </div>
                <div className="footer-leftImage">
                  <img src={public_path('/assets/img/spatula.png')} alt=""/>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-rightContent">
            <div className="footer-companyInfo">
              <h3>CAPITAL BAKERY & CAKE</h3>
              <p className="footer-address">
                Jl. Pangeran Tubagus Angke Kav 26 No 5 - 7
                <br/>
                Kota Jakarta Barat, Daerah Khusus IbuKota Jakarta - 11460
                <br/>
                10211 5678 005
              </p>
            </div>
            <div className="footer-securePayment">
              <img src={public_path('/assets/img/payment.png')} alt=""/>
            </div>
            <div className="footer-socialMedia">
              <div className="footer-socialMediaItem"><img src={public_path('/assets/icon/facebook.svg')} /></div>
              <div className="footer-socialMediaItem"><img src={public_path('/assets/icon/whatsapp.svg')} /></div>
              <div className="footer-socialMediaItem"><img src={public_path('/assets/icon/instagram.svg')} /></div>
              <div className="footer-socialMediaItem"><img src={public_path('/assets/icon/youtube.svg')} /></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;