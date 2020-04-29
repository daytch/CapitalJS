import React from 'react';
import { public_path } from '../../utils/common';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Carousel from '../carousel';

const images = [
  "/assets/img/banner-2.jpg",
  "/assets/img/banner-3.jpg",
  "/assets/img/banner-4.jpg",
  "/assets/img/banner-5.jpg",
  "/assets/img/banner-6.jpg",
  "/assets/img/banner-7.jpg",
  "/assets/img/banner-8.jpg",
  "/assets/img/banner-9.jpg",
]

function CarouselItem(props) {
  return (
    <div key={props.index} {...props} style={{pointerEvents: "none"}}>
      <img src={public_path(props.url)} key={props.index} />
    </div>
  )
}

function Home(props) {
  return (
    <div>
      <section className="home-banner">
        <Carousel>
            {images.map((url,key) => {
              return(
                <CarouselItem key={key} index={key} url={url} />
              )
            })}
        </Carousel>
        {/* <img src={public_path('/assets/img/banner-1.png')} /> */}
      </section>
      <section className="home-content">
        <div className="home-leftContent">
          <div className="home-leftContainer">
            <div className="home-leftTitleContainer">
              <h2 className="home-leftTitle">Capital start with the art of traditional Baking</h2>
              <p className="home-leftDescription">since 1989 we bring happiness in a bite</p>
            </div>
            <div className="divider"></div>
            <div className="home-categoryContainer">
              <div className="home-categoryItem">
                <span>BEST SELLER</span>
                <FontAwesomeIcon icon="sort-down" size="lg" />
              </div>
              <div className="home-categoryItem">
                <span>NEW PRODUCT</span>
                <FontAwesomeIcon icon="sort-down" size="lg" />
              </div>
              <div className="home-categoryItem">
                <span>TESTIMONI</span>
                <FontAwesomeIcon icon="sort-down" size="lg" />
              </div>
            </div>
            <div className="home-cakeContent">
              <div className="home-cakeName">Nutty Bear</div>
              <div className="home-cakeDescription">Sponge coklat lembut dengan aroma kirschwasser dipadu dengan vanilla mousse blueberry jam, ceri, dan irisan coklat premium</div>
            </div>
            <div className="home-buttonContainer">
              <div className="home-buttonItem">
                <div className="home-buttonImageWrapper">
                  <img src={public_path('/assets/icon/thumbs-up.svg')} />
                </div>
                <span>REKOMENDASI</span>
              </div>
              <div className="home-buttonItem">
                <div className="home-buttonImageWrapper">
                  <img src={public_path('/assets/icon/wheat.svg')} />
                </div>
                <span>COKLAT PREMIUM</span>
              </div>
            </div>
          </div>
        </div>
        <div className="home-rightContent">
          <img src={public_path('/assets/img/kue-1.png')} />
        </div>
      </section>
      <section className="delivery-sameDay">
        <div className="delivery-imgContainer">
          <img src={public_path('/assets/img/same-day-delivery.png')} alt="same-day-delivery" />
        </div>
      </section>
    </div>
  )
}

export default Home;