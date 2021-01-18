import React, { useEffect } from 'react';
import { public_path, rupiah } from '../../utils/common';
import history from '../../utils/history';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Pagination from '../pagination';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct, getProductByName } from '../../redux/actions/productAction';
import { Link } from 'react-router-dom';

function ProductItem(props) {

  return (
    <Link style={{ textDecoration: 'none' }} className="product-item" to={'/product/' + props.link}>
      <div className="product-itemContainer">
        <div className="product-itemImage">
          <img src={props.url} alt="" />
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
    </Link>
  )
}

function Product(props) {
  const dispatch = useDispatch()
  useEffect(() => {
    const data = props.history.location.state
    if (data) {
      dispatch(getProductByName(data.data))
    } else {
      dispatch(getProduct())
    }
    // eslint-disable-next-line
  }, [])
  const product = useSelector(state => state.productReducer.data)
  const productSectionRef = React.useRef(null)
  const scrollToProduct = () => window.scrollTo({
    top: productSectionRef.current.offsetTop,
    behavior: 'smooth'
  })
  // const [currentPage, setCurrentPage] = React.useState(1);
  // const onPageChange = (nextPage) => {
  //   if(currentPage === nextPage) return;
  //   setCurrentPage(nextPage);
  //   // scrollToProduct(); // TODO
  // }
  // const goToDetail = () => history.push('/product/detail');
  return (
    <div className="product-container">
      <section className="product-banner">
        <img src={public_path('/assets/img/product-banner.png')} alt="" />
      </section>
      <section ref={productSectionRef} className="product-content">
        <div className="product-contentContainer">
          <div className="product-nameContainer">
            <h1 className="product-categoryName"><span>Birthday Cake</span></h1>
            <span> > </span>
            <span>CLASSIC & WESTERN</span>
          </div>
          <div className="product-gridContainer">
            {
              product.map(v => {
                return (
                  <ProductItem url={v.Pictures[0]} name={v.Name} price={v.SellingPrice} link={v._id} />
                )
              })
            }

            <Pagination totalPage={3} />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Product;