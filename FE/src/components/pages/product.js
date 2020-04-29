import React from 'react';
import {public_path, rupiah} from '../../utils/common';
import history from '../../utils/history';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function ProductItem(props){
  return (
    <div className="product-item" onClick={props.onClick}>
      <div className="product-itemContainer">
        <div className="product-itemImage">
          <img src={public_path(props.url)} alt=""/>
        </div>
        <div className="product-itemInfo">
          <div className="product-itemDescriptionContainer">
            <span className="product-itemName">{props.name}</span>
            <div className="divider"></div>
            <span className="product-itemPrice">Start from Rp {rupiah(props.price)}</span>
          </div>
          <div className="product-itemEnterLogo">
            <FontAwesomeIcon icon="arrow-right" />
          </div>
        </div>
      </div>
    </div>
  )
}

function Product(props){
  const goToDetail = () => history.push('/product/detail');
  return(
    <div className="product-container">
      <section className="product-banner">
        <img src={public_path('/assets/img/product-banner.png')} alt=""/>
      </section>
      <section className="product-content">
        <div className="product-contentContainer">
          <div className="product-nameContainer">
            <h1 className="product-categoryName"><span>Birthday Cake</span></h1>
            <span> > </span>
            <span>CLASSIC & WESTERN</span>
          </div>
          <div className="product-gridContainer">
            <ProductItem url="/assets/img/product-kue1.png" name="MILO CHOCOLATE CAKE" price="170000" onClick={goToDetail} />
            <ProductItem url="/assets/img/product-kue2.png" name="VANILLA CHEESE CAKE" price="170000" onClick={goToDetail}/>
            <ProductItem url="/assets/img/product-kue3.png" name="RED VELVET" price="170000" onClick={goToDetail}/>
            <ProductItem url="/assets/img/product-kue4.png" name="TARTA DE MOKA CAKE" price="170000" onClick={goToDetail}/>
            <ProductItem url="/assets/img/product-kue5.png" name="TIRAMISU CAKE" price="170000" onClick={goToDetail}/>
            <ProductItem url="/assets/img/product-kue6.png" name="PANDAN CARAMELO CAKE" price="170000" onClick={goToDetail}/>
            <ProductItem url="/assets/img/product-kue7.png" name="NUTTY BEAR CAKE" price="170000" onClick={goToDetail}/>
            <ProductItem url="/assets/img/product-kue8.png" name="OREO DELIGHT CAKE" price="170000" onClick={goToDetail}/>
            <ProductItem url="/assets/img/product-kue9.png" name="BLACKFOREST" price="170000" onClick={goToDetail}/>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Product;