import React, { useEffect } from 'react';
import { public_path, rupiah } from '../../utils/common';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import { getDetailProduct } from '../../redux/actions/productAction';
import { toast, ToastContainer } from 'react-toastify';

// function ProductDetailExtraItem(props) {
//   return (
//     <div className={"productDetail-extraItem " + ((props.active || "") && "active")}>
//       <div className={"productDetail-extraItemInner " + (props.innerClass ? props.innerClass : "")}>
//         {props.name}
//       </div>
//     </div>
//   )
// }

function ProductDetailRecommendedItem(props) {
  return (
    <div className="productDetail-recommendedImageItem">
      <div className="productDetail-recommendedImageWrapper">
        <img src={public_path(props.url)} alt="" />
      </div>
      <h3 className="productDetail-recommendedName"><span>{props.name}</span></h3>
    </div>
  )
}

function ProductDetailPreviewItem(props) {
  return (
    <div className={"productDetail-previewItem " + (props.active && "active")}>
      <div className="productDetail-previewItemInner">
        <img style={{ width: '130px' }} src={props.url} alt="" />
      </div>
    </div>
  );
}

const Init_form = {
  note: "",
}


function ProductDetail(props) {
  const [quantity, setQuantity] = React.useState(0);
  const [form, setForm] = React.useState(Init_form);
  const [priceCake, setPriceCake] = React.useState(0)
  const [total, setTotal] = React.useState(0)
  // const [candlePrice, setCandlePrice] = React.useState(0);
  const [lilin, setLilin] = React.useState({
  })
  const AddOnsOnChange = (id, value) => {
    setLilin({
      ...lilin,
      [id]: (value < 0 ? 0 : value)
    })
  }


  // const addOns = React.useState()

  // useEffect(() => {
  //   addOns
  // }, [lilin]);

  const handleChange = (id, data) => {
    setForm(e => {
      return {
        ...e,
        [id]: data
      }
    })
  }

  const product = useSelector(state => state.detailProductReducer.data)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getDetailProduct({
      id: props.match.params.id
    }))
    // eslint-disable-next-line
  }, [])


  function ExtraPriceListItem(props) {
    return (
      <div className="productDetail-extraPriceListItem">
        <div className="productDetail-extraPriceListInfo">
          <span>{props.name}</span>
          <span>Rp {rupiah(props.price)}</span>
        </div>
        <div className="productDetail-extraPriceListInput">
          <div className="productDetail-inputMinus" onClick={(e) => {
            props.onChange(props.id, props.value - 1)
            setTotal(e => {
              if (props.value > 0) {
                return e - props.price
              }
              return e
            })
          }}>
            <FontAwesomeIcon icon="minus" />
          </div>
          <div className="productDetail-extraPriceInputText">
            <input min="1" type="number" value={props.value} onChange={(e) => props.onChange(props.id, e.value)} />
          </div>
          <div className="productDetail-inputPlus" onClick={(e) => {
            props.onChange(props.id, props.value + 1)
            setTotal(e => e + props.price)
          }}>
            <FontAwesomeIcon icon="plus" />
          </div>
        </div>
      </div>
    )
  }

  //add to cart
  const addToCart = () => {
    const data = {
      id: Date.now(),
      idProduct: product._id,
      name: product.Name,
      total: total + priceCake,
      note: form.note,
      quantity: quantity,
      addOns: Object.keys(lilin).map((key) => [key, lilin[key]]),
      picture: product.Pictures[0],
    }
    if (quantity >= 1) {
      const cart = JSON.parse(localStorage.getItem('cart') || "[]");
      cart.push(data)
      localStorage.setItem('cart', JSON.stringify(cart));
      props.history.push('/cart')
    } else {
      toast.error('Minimal pembelian 1 Quantity')
    }

  }
  return (
    <div className="productDetail-container">
      <ToastContainer />
      <section className="productDetail-bannerSection">
        <div className="productDetail-banner">
          <img src={public_path('/assets/img/product-banner.png')} alt="" />
        </div>
      </section>
      <section className="productDetail-content">
        <div className="productDetail-productInfoContainer">
          <div className="productDetail-imagePreviewContainer">
            <div className="productDetail-selectedPreview" data-margin-bottom="sm">
              <img src={product.Pictures[0]} alt="" />
            </div>
            <div className="productDetail-previewList">
              {
                product.Pictures.map((v, i) => {
                  if (i <= 4) {
                    return (<ProductDetailPreviewItem url={v} />)
                  }

                })
              }
            </div>
          </div>
          <div className="productDetail-detailContainer">
            <div className="productDetail-productNameWrapper">
              <h1 className="productDetail-productName">{product.Name}</h1>
            </div>
            {/* <p>A party special that is loved by all. Vanilla flavored booked cheesecake with freshly picked strawberries.</p> */}
            <span className="productDetail-price"><strong>Price Rp.{rupiah(product.SellingPrice)}</strong></span>
            <div className="productDetail-sizeQuantityContainer" data-margin-bottom="sm">
              <div className="productDetail-sizeContainer" data-margin-bottom="sm">
                <label className="productDetail-labelName">Size</label>
                {product.Weigth}
              </div>
              <div className="productDetail-quantityContainer">
                <label className="productDetail-labelName">Quantity</label>
                <input type="number" name="quantity" id="quantity" value={quantity} onChange={(e) => {

                  if (e.target.value > 0) {
                    setQuantity(e.target.value)
                    setPriceCake(product.SellingPrice * e.target.value)

                  }


                }
                } />
              </div>
            </div>
            {/* <div className="productDetail-candleContainer">
              <div className="productDetail-candleWrapper">
                <label className="productDetail-labelName">Candle</label>
                <input type="radio" id="classic" name="candleType" value="classic" />
                <label htmlFor="classic" data-margin-right="sm">Classic (Free 2 Candles)</label>
                <input type="radio" id="numeric" name="candleType" value="numeric" />
                <label htmlFor="numeric">Numeric Candle</label>
              </div>
              <div className="productDetail-candlePriceContainer">
                <div className="productDetail-candlePriceWrapper">
                  Price <label><strong>Rp 8.000</strong></label>
                </div>
              </div>
            </div> */}
            {/* <div className="divider" data-margin-bottom="md"></div> */}
            <div className="productDetail-noteContainer">
              <label className="productDetail-inputNoteLabel">You can put wording on your cake for FREE</label>
              <br />
              <div className="productDetail-inputNoteWrapper">
                <input value={form.note} onChange={e => handleChange('note', e.target.value)} className="productDetail-inputNote" type="text" name="note" id="note" placeholder="Note on Cake" />
              </div>
            </div>
            <div className="productDetail-extraContainer">
              <div className="productDetail-extraLabel">
                <span>EXTRA</span>
              </div>
              {/* <div className="productDetail-extraItemWrapper">
                <ProductDetailExtraItem name="Lilin" innerClass="candle" active={true}/>
                <ProductDetailExtraItem name="Lilin Special" innerClass="special-candle" />
                <ProductDetailExtraItem name="Pita" innerClass="ribbon" />
                <ProductDetailExtraItem name="Kartu Ucapan" innerClass="card" />
                <ProductDetailExtraItem name="Aksesoris" innerClass="accessories" />
              </div> */}
              <div className="productDetail-extraPriceTable">
                <div className="productDetail-extraPriceTableInner">
                  <p className="productDetail-extraPriceTableDescription">
                    Tunjukkan perkataan anda kepada orang-orang terkasih dengan menambahkan lilin, pita dan kartu ucapan pada kue pesanan Anda.
                  </p>
                  <div className="productDetail-extraPriceList">
                    {
                      product.AddOns.map(v => {
                        return (
                          <ExtraPriceListItem value={lilin[v.Name] ?? 0} id={v.Name} name={v.Name} price={v.SellingPrice} onChange={AddOnsOnChange} />
                        )
                      })
                    }

                  </div>
                  <div className="productDetail-extraCart">
                    <div onClick={addToCart} className="productDetail-addToCart">
                      ADD TO CART
                    </div>
                  </div>
                  <div className="productDetail-candlePriceContainer">
                    <div className="productDetail-candlePriceWrapper float-right">
                      Total <label><strong>Rp {rupiah(total + priceCake)}</strong></label>
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