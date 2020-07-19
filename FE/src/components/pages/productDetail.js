import React from 'react';
import { public_path, rupiah } from '../../utils/common';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ProductDetailExtraItem(props) {
  return (
    <div className={"productDetail-extraItem " + ((props.active || "") && "active")}>
      <div className={"productDetail-extraItemInner " + (props.innerClass ? props.innerClass : "")}>
        {props.name}
      </div>
    </div>
  )
}

function ProductDetailRecommendedItem(props){
  return(
    <div className="productDetail-recommendedImageItem">
      <div className="productDetail-recommendedImageWrapper">
        <img src={public_path(props.url)} alt=""/>
      </div>
      <h3 className="productDetail-recommendedName"><span>{props.name}</span></h3>
    </div>
  )
}

function ProductDetailPreviewItem(props){
  return(
    <div className={"productDetail-previewItem " + (props.active && "active")}>
      <div className="productDetail-previewItemInner">
        <img src={public_path(props.url)} alt=""/>
      </div>
    </div>
  );
}

function ExtraPriceListItem(props) {
  return (
    <div className="productDetail-extraPriceListItem">
      <div className="productDetail-extraPriceListInfo">
        <span>{props.name}</span>
        <span>Rp {rupiah(props.price)}</span>
      </div>
      <div className="productDetail-extraPriceListInput">
        <div className="productDetail-inputMinus" onClick={(e) => props.onChange(props.id, props.value - 1)}>
          <FontAwesomeIcon icon="minus" />
        </div>
        <div className="productDetail-extraPriceInputText">
          <input min="0" type="number" value={props.value} onChange={(e) => props.onChange(props.id, e.value)}/>
        </div>
        <div className="productDetail-inputPlus" onClick={(e) => props.onChange(props.id, props.value + 1)}>
          <FontAwesomeIcon icon="plus" />
        </div>
      </div>
    </div>
  )
}

function ProductDetail(props) {
  const [quantity, setQuantity] = React.useState(0);
  const [candlePrice, setCandlePrice] = React.useState(0);
  const [lilin, setLilin] = React.useState({
    "n1": 0,"n2": 0,"n3": 0,"n4": 0,"n5": 0
  })
  const lilinOnChange = (id, value) => {
    setLilin({
      ...lilin,
      [id]: (value < 0 ? 0 : value)
    })
  }
  return (
    <div className="productDetail-container">
      <section className="productDetail-bannerSection">
        <div className="productDetail-banner">
          <img src={public_path('/assets/img/product-banner.png')} alt="" />
        </div>
      </section>
      <section className="productDetail-content">
        <div className="productDetail-productInfoContainer">
          <div className="productDetail-imagePreviewContainer">
            <div className="productDetail-selectedPreview" data-margin-bottom="sm">
              <img src={public_path('/assets/img/detail-kue1.png')} alt=""/>
            </div>
            <div className="productDetail-previewList">
            <ProductDetailPreviewItem url="/assets/img/detail-kue2.png"/>
            <ProductDetailPreviewItem url="/assets/img/detail-kue3.png"/>
            <ProductDetailPreviewItem url="/assets/img/detail-kue4.png" active={true}/>
            </div>
          </div>
          <div className="productDetail-detailContainer">
            <div className="productDetail-productNameWrapper">
              <h1 className="productDetail-productName">PANDAN CAKE</h1>
            </div>
            <p>A party special that is loved by all. Vanilla flavored booked cheesecake with freshly picked strawberries.</p>
            <span className="productDetail-price"><strong>Price. Rp 360.000</strong></span>
            <div className="productDetail-sizeQuantityContainer" data-margin-bottom="sm">
              <div className="productDetail-sizeContainer" data-margin-bottom="sm">
                <label className="productDetail-labelName">Size</label>
                <select>
                  <option>20 Round</option>
                  <option>20X30</option>
                </select>
              </div>
              <div className="productDetail-quantityContainer">
                <label className="productDetail-labelName">Quantity</label>
                <input type="number" name="quantity" id="quantity" value={quantity} onChange={(e) => setQuantity(e.value)} />
              </div>
            </div>
            <div className="productDetail-candleContainer">
              <div className="productDetail-candleWrapper">
                <label className="productDetail-labelName">Candle</label>
                <input type="radio" id="classic" name="candleType" value="classic" />
                <label htmlFor="classic" data-margin-right="sm">Classic (Free 2 Candles)</label>
                <input type="radio" id="numeric" name="candleType" value="numeric" />
                <label htmlFor="numeric">Numeric Candle</label>
              </div>
              <div className="productDetail-candlePriceContainer">
                <div className="productDetail-candlePriceWrapper">
                  <label data-margin-right="xs">Price</label>
                  <input type="number" data-margin-right="xs" value={candlePrice} onChange={(e) => setCandlePrice(e.value)} />
                  <label><strong>Rp 8.000</strong></label>
                </div>
              </div>
            </div>
            {/* <div className="divider" data-margin-bottom="md"></div> */}
            <div className="productDetail-noteContainer">
              <label className="productDetail-inputNoteLabel">You can put wording on your cake for FREE</label>
              <br/>
              <div className="productDetail-inputNoteWrapper">
                <input className="productDetail-inputNote" type="text" name="note" id="note" placeholder="Note on Cake" />
              </div>
            </div>
            <div className="productDetail-extraContainer">
              <div className="productDetail-extraLabel">
                <span>EXTRA</span>
              </div>
              <div className="productDetail-extraItemWrapper">
                <ProductDetailExtraItem name="Lilin" innerClass="candle" active={true}/>
                <ProductDetailExtraItem name="Lilin Special" innerClass="special-candle" />
                <ProductDetailExtraItem name="Pita" innerClass="ribbon" />
                <ProductDetailExtraItem name="Kartu Ucapan" innerClass="card" />
                <ProductDetailExtraItem name="Aksesoris" innerClass="accessories" />
              </div>
              <div className="productDetail-extraPriceTable">
                <div className="productDetail-extraPriceTableInner">
                  <p className="productDetail-extraPriceTableDescription">
                    Tunjukkan perkataan anda kepada orang-orang terkasih dengan menambahkan lilin, pita dan kartu ucapan pada kue pesanan Anda.
                  </p>
                  <div className="productDetail-extraPriceList">
                    <ExtraPriceListItem id="n1" name="Lilin Angka 9" price="4000" value={lilin.n1} onChange={lilinOnChange} />
                    <ExtraPriceListItem id="n2" name="Lilin Angka 9" price="4000" value={lilin.n2} onChange={lilinOnChange} />
                    <ExtraPriceListItem id="n3" name="Lilin Angka 9" price="4000" value={lilin.n3} onChange={lilinOnChange} />
                    <ExtraPriceListItem id="n4" name="Lilin Angka 9" price="4000" value={lilin.n4} onChange={lilinOnChange} />
                    <ExtraPriceListItem id="n5" name="Lilin Angka 9" price="4000" value={lilin.n5} onChange={lilinOnChange} />
                  </div>
                  <div className="productDetail-extraCart">
                    <div className="productDetail-addToCart">
                      ADD TO CART
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="productDetail-recommended">
          <div className="productDetail-recommendedContainer">
            <h3 className="productDetail-recommendedText">Recommended for You</h3>
            <div className="productDetail-recommendedImageContainer">
              <ProductDetailRecommendedItem name="GOLD OPERA" url="/assets/img/detail-kue5.png" />
              <ProductDetailRecommendedItem name="CHOCOLATE ALMOND CROISSANT" url="/assets/img/detail-kue6.png" />
              <ProductDetailRecommendedItem name="CREAM CHEESE DANISH" url="/assets/img/detail-kue5.png" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductDetail;