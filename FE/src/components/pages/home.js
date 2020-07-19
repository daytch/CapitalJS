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

function Dot(props) {
  const {active, onClick} = props;
  return(
    <li className={"dot " + (active && "selected")} onClick={onClick}></li>
  )
}

function CategoryItem(props) {
  const {active, onClick, text} = props;
  return (
    <div className={"home-categoryItem " + (active && "active")} onClick={onClick}>
      <span>{text}</span>
      <FontAwesomeIcon icon="sort-down" size="lg" />
    </div>
  )
}

function CarouselItemCake(props){
  const {name, description, key, index} = props;
  return(
    <div key={key} index={index} className="home-cakeContent">
      <div className="home-cakeName">{name}</div>
      <div className="home-cakeDescription">{description}</div>
    </div>
  )
}

function CarouselItem(props) {
  return (
    <div key={props.index} {...props} style={{pointerEvents: "none"}}>
      <img src={public_path(props.url)} key={props.index} />
    </div>
  )
}

function Home(props) {
  const [categories, setCategories] = React.useState([true,false,false])
  const clickCategory = (index) => {
    let cats = [false,false,false];
    cats[index] = true;
    setCategories(cats);
  }
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const updateCurrentSlide = (index) => {
    if (currentSlide !== index) {
      setCurrentSlide(index);
    }
  };

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
              <CategoryItem text="BEST SELLER" active={categories[0]} onClick={() => clickCategory(0)} />
              <CategoryItem text="NEW PRODUCT" active={categories[1]} onClick={() => clickCategory(1)} />
              <CategoryItem text="TESTIMONI" active={categories[2]} onClick={() => clickCategory(2)} />
            </div>
            <div className="home-cakeContentContainer">
              <Carousel
                autoPlay={false}
                showArrows={false}
                showIndicators={false}
                selectedItem={currentSlide}
                onChange={updateCurrentSlide}
                swipeable={false}
              >
                <CarouselItemCake
                  key={0} index={0}
                  name="Nutty Bear"
                  description="Sponge coklat lembut dengan aroma kirschwasser dipadu dengan vanilla mousse blueberry jam, ceri, dan irisan coklat premium"
                />
                <CarouselItemCake
                  key={1} index={1}
                  name="Nutty Mimoro"
                  description="Mimoro coklat lembut dengan aroma kirschwasser dipadu dengan chocolate mousse strawberry jam, lychee, dan irisan kacang premium"
                />
                <CarouselItemCake
                  key={2} index={2}
                  name="Kue Bolu"
                  description="Bolu lembut dengan aroma kirschwasser dipadu dengan chocolate mousse strawberry jam, lychee, dan irisan kacang premium"
                />
              </Carousel>
            </div>
            {/* <div className="home-cakeContent">
              <div className="home-cakeName">Nutty Bear</div>
              <div className="home-cakeDescription">Sponge coklat lembut dengan aroma kirschwasser dipadu dengan vanilla mousse blueberry jam, ceri, dan irisan coklat premium</div>
            </div> */}
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
              <ul className="control-dots">
                <Dot active={currentSlide===0} onClick={() => updateCurrentSlide(0)} />
                <Dot active={currentSlide===1} onClick={() => updateCurrentSlide(1)} />
                <Dot active={currentSlide===2} onClick={() => updateCurrentSlide(2)} />
              </ul>
            </div>
          </div>
        </div>
        <div className="home-rightContent">
          <Carousel
            autoPlay={false}
            showIndicators={false}
            selectedItem={currentSlide}
            onChange={updateCurrentSlide}
            swipeable={false}
          >
            <CarouselItem key={0} index={0} url={public_path('/assets/img/kue-1.png')} />
            <CarouselItem key={1} index={1} url={public_path('/assets/img/kue-1.png')} />
            <CarouselItem key={2} index={2} url={public_path('/assets/img/kue-1.png')} />
          </Carousel>
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