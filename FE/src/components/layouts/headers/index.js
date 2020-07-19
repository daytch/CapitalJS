import React from 'react';
import {public_path} from '../../../utils/common';
import history from '../../../utils/history';

const textHeight = 24.33;
const defaultBackgroundHeight = 110;

function Header(props){
  const [backgroundHeight, setBackgroundHeight] = React.useState(110);
  const onHover = (itemLength) => {
    setBackgroundHeight(defaultBackgroundHeight + (textHeight * itemLength));
  }
  const onLeave = () =>{
    setBackgroundHeight(defaultBackgroundHeight)
  }
  const onClickDrawer = () => {

  }
  const goToProduct = () => history.push("/product");
  return(
    <header>
      <div className="header-container">
        <label onClick={onClickDrawer}>
          <span></span>
          <span></span>
          <span></span>
        </label>
        <div className="curvy">
          <img style={{height: backgroundHeight + "px"}} src={public_path("/assets/img/header-background.png")} alt=""/>
        </div>
        <div className="leftMenu desktop-menu">
          <div className="menu-labelContainer">
            <a className="menu-label" onMouseOver={() => onHover(2)} onMouseLeave={onLeave}>
              <span>COOKIES & HAMPERS</span>
              <div className="menu-dropdownContainer">
                <div className="menu-dropdownItem" onClick={goToProduct}>Cookies</div>
                <div className="menu-dropdownItem" onClick={goToProduct}>Hampers & Souvenir</div>
              </div>
            </a>
          </div>
          <div className="menu-labelContainer">
            <a className="menu-label" onMouseOver={() => onHover(5)} onMouseLeave={onLeave}>
              <span>BIRTHDAY CAKE</span>
              <div className="menu-dropdownContainer">
                <div className="menu-dropdownItem" onClick={goToProduct}>Cake Decoration</div>
                <div className="menu-dropdownItem" onClick={goToProduct}>Classic & Western</div>
                <div className="menu-dropdownItem" onClick={goToProduct}>Custom Butter Cream Cake</div>
                <div className="menu-dropdownItem" onClick={goToProduct}>Slice Cake</div>
                <div className="menu-dropdownItem" onClick={goToProduct}>Birthday Accessories</div>
              </div>
            </a>
          </div>
          <div className="menu-labelContainer">
            <a className="menu-label" onMouseOver={() => onHover(6-1)} onMouseLeave={onLeave}>
              <span>BREAD & SPONGE CAKE</span>
              <div className="menu-dropdownContainer">
                <div className="menu-dropdownItem" onClick={goToProduct}>Chiffon & Bolu</div>
                <div className="menu-dropdownItem" onClick={goToProduct}>Cookies & Snacks</div>
                <div className="menu-dropdownItem" onClick={goToProduct}>Dougnuts</div>
                <div className="menu-dropdownItem" onClick={goToProduct}>Soft Bread</div>
                <div className="menu-dropdownItem" onClick={goToProduct}>Toast</div>
                <div className="menu-dropdownItem" onClick={goToProduct}>Roll Set</div>
              </div>
            </a>
          </div>
        </div>
        <div className="logo" onClick={() => history.push("/")}>
          <img src={public_path('/assets/img/logo.png')}/>
        </div>
        <div className="rightMenu desktop-menu">
          <div className="menu-labelContainer">
            <div className="header-searchWrapper">
              <input className="header-searchInput" type="text" name="search" id="search" placeholder="SEARCH..."/>
            </div>
          </div>
          <div className="menu-labelContainer">
            <a className="menu-label" data-icon={true}><span className="labelCart">CART</span></a>
          </div>
          <div className="menu-labelContainer">
            <a className="menu-label"><span>LOGIN</span></a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;