import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getProfile } from '../../../redux/actions/profileAction';
import { public_path } from '../../../utils/common';

function Footer() {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProfile())
  }, []);

  const profile = useSelector(state => state.profileReducer.data)
  return (
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
                <Link to="/carrer" className="footer-link">CAREER</Link>

                <Link to="/contact" className="footer-link">CONTACT US</Link>
                <Link to="/faq" className="footer-link">FAQ</Link>
                <Link to="/payment" className="footer-link">PAYMENT METHODS</Link>
                <Link to="/orderbywebsite" className="footer-link">ORDER BY WEBSITE</Link>
                <Link to="/delivery" className="footer-link">DELIVERY</Link>
              </div>
              <div className="footer-leftImageContainer">
                <div className="footer-leftImage">
                  <img src={public_path('/assets/img/rolling-pin.png')} alt="" />
                </div>
                <div className="footer-leftImage">
                  <img src={public_path('/assets/img/whisk.png')} alt="" />
                </div>
                <div className="footer-leftImage">
                  <img src={public_path('/assets/img/spoon.png')} alt="" />
                </div>
                <div className="footer-leftImage">
                  <img src={public_path('/assets/img/piping-bag.png')} alt="" />
                </div>
                <div className="footer-leftImage">
                  <img src={public_path('/assets/img/spatula.png')} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="footer-rightContent">
            <div className="footer-companyInfo">
              <h3>CAPITAL BAKERY & CAKE</h3>
              <p className="footer-address">
                Jl. Pangeran Tubagus Angke Kav 26 No 5 - 7
                <br />
                Kota Jakarta Barat, Daerah Khusus IbuKota Jakarta - 11460
                <br />
                {profile.Telphone}
              </p>
            </div>
            <div className="row">
              <div className="col-md-8 footer-securePayment">
                <img src={public_path('/assets/img/payment.png')} alt="" />
              </div>
              <div className="col-md-4 footer-socialMedia">
                <a href={profile.FacebookLink} className="footer-socialMediaItem"><img src={public_path('/assets/icon/facebook.svg')} /></a>
                <a href={profile.WhatsAppLink} className="footer-socialMediaItem"><img src={public_path('/assets/icon/whatsapp.svg')} /></a>
                <a href={profile.InstagramLink} className="footer-socialMediaItem"><img src={public_path('/assets/icon/instagram.svg')} /></a>
              </div>
            </div>
            {/* <div className="footer-apps">
              <div className="footer-appstore">
                <img src={public_path('/assets/img/app-store.svg')} alt=""/>
              </div>
              <div className="footer-playstore">
                <img src={public_path('/assets/img/google-play.svg')} alt=""/>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;