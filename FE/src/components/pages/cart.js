import React, { useEffect, useState } from 'react';
import { public_path, rupiah } from '../../utils/common';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHistory, faStore, faTruck } from '@fortawesome/free-solid-svg-icons';
import ReactDatePicker from 'react-datepicker';
import DatePicker from "react-datepicker";
import { createBrowserHistory } from 'history';
import "react-datepicker/dist/react-datepicker.css";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import { getOutletDeliver } from '../../redux/actions/outletAction';
import { Link } from 'react-router-dom';
import { storeOrder } from '../../redux/actions/orderAction';
import { GET, POST, PUT, DELETE } from '../../services';
import {
  HANDLE_LOGIN, HANDLE_REGISTER, URL
} from '../../constants';


function Cart(props) {
  const [pickup, setPickup] = useState('Store Pickup');
  const [total, setTotal] = useState(0)
  const [cart, setCart] = useState([])
  const [form, setForm] = useState({
    alamat: "",
    telp: localStorage.getItem('telp') && '08',
    time: "",
    outlet: "",
  })
  const [token, setToken] = useState('')

  const handleChange = (e, a) => {
    setForm(z => {
      return {
        ...z,
        [e]: a
      }
    })
  }

  const dispatch = useDispatch()
  React.useEffect(() => {
    window.scrollTo(0, 0)
    dispatch(getOutletDeliver())
    setCart(JSON.parse(localStorage.getItem('cart')) || [])
  }, []);

  const [startDate, setStartDate] = useState(new Date());

  const outlet = useSelector(state => state.outletReducer.data)

  useEffect(() => {
    setTotal(cart.reduce((sum, item) => sum + item.total, 0))
  }, [cart]);

  const handleCheckout = () => {
    const data = {
      user_id: localStorage.getItem('userid'),
      name: localStorage.getItem('username'),
      phoneNumber: form.telp,
      address: form.alamat,
      time: startDate,
      total: total,
      delivery: pickup,
      outlet: form.outlet,
      product: cart.map(v => {
        return {
          product: v.idProduct,
          AddOns: v.addOns,
          Note: v.note
        }
      })
    }
    if (cart.length > 0) {
      POST(URL.GET_TOKEN, {
        name: localStorage.getItem('username'),
        total: total,
        email: "email",
        phone: form.telp
      }).then(e => {
        window.snap.pay(e.data.token, {
          onSuccess: function (result) {
            dispatch(storeOrder({
              ...data,
              transaksiID: result.transaction_id
            }))
            localStorage.removeItem('cart')
            const dd = createBrowserHistory({ forceRefresh: true })
            dd.push('/order')

          },
          onPending: function (result) {
            dispatch(storeOrder({
              ...data,
              transaksiID: result.transaction_id
            }))
            localStorage.removeItem('cart')
            const dd = createBrowserHistory({ forceRefresh: true })
            dd.push('/order')
          },
          onError: function (result) {

            console.log("error : " + result)
          }
        });
      })
      setCart(JSON.parse(localStorage.getItem('cart')) || [])
    }



  }

  const getTotalCart = () => {
    return cart.reduce((sum, item) => sum + item.total, 0);
  }

  const handleChangeQuantity = (item, quantityToAdded) => {
    const itemInCartIndex = cart.findIndex((v) => v.id==item.id);
    if(itemInCartIndex==-1) return
    const itemInCart = cart[itemInCartIndex]
    
    itemInCart.quantity = Number(itemInCart.quantity)
    itemInCart.price = Number(itemInCart.price)

    itemInCart.quantity += + quantityToAdded;
    if(itemInCart.quantity <= 0) {
      cart.splice(itemInCartIndex, 1)
    }
    itemInCart.total = itemInCart.quantity * itemInCart.price
    setCart(cart)

    const priceChanged = quantityToAdded * itemInCart.price
    setTotal(total + priceChanged)
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  return (
    <div>
      <section className="blog-section mb-5 pb-5">
        <h1 className="faq-text">Cart</h1>

        {
          cart ?
            cart.map((v,i) => {
              return (
                <div key={i} style={{display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: "20px"}}>
                  <div style={{display: "flex", flexDirection: "row", flex: 1}}>
                    <div style={{display: "flex", flexDirection: "row", flexBasis: "33.333333%"}}>
                      <img className="shadow" style={{ height: '80px', width: '80px' }} src={v.picture} alt="" />
                      <div style={{display: "flex", flexDirection: "column", marginLeft: "20px"}}>
                        <div className="">{v.name}</div>
                        <div className="">{v.note}</div>
                        <div className="">Rp.{rupiah(v.price)}</div>
                      </div>
                    </div>
                    <div style={{flexBasis: "33.333333%"}}>
                    Rp.{rupiah(v.total)}
                    </div>
                    <div style={{flexBasis: "33.333333%"}}>
                      <SpinnerNumber value={v.quantity} onPlus={()=>handleChangeQuantity(v, 1)} onMinus={()=>handleChangeQuantity(v, -1)}/>
                    </div>
                  </div>
                  <div style={{flexBasis: "150px"}} className="d-md-flex my-2 justify-content-end align-items-center">
                    <div className="">
                      Rp.{rupiah(v.total)}
                    </div>

                  </div>
                </div>
              )
            }) : ''
        }
        <div className="d-flex cart-total justify-content-end py-3">
          <h5 className="font-weight-bold mr-2">TOTAL</h5>
          <h6 className="font-weight-bold ml-1">Rp. {rupiah(total)}</h6>
        </div>

        <div className="pick-up mt-2 d-flex">
          <div onClick={() => setPickup('Store Delivery')} className="pick-content">
            <FontAwesomeIcon icon={faTruck} size="3x" />
            Store Delivery
          </div>
          <div onClick={() => setPickup('Store Pickup')} className="pick-content">
            <FontAwesomeIcon icon={faStore} size="3x" />
            Store Pickup
          </div>
          <div onClick={() => setPickup('Instant Delivery')} className="pick-content">
            <FontAwesomeIcon icon={faHistory} size="3x" />
            Instant Delivery
          </div>
        </div>

        <div className={"store-delivery mt-2 " + (pickup == 'Store Delivery' ? '' : 'd-none')}>
          <div className="form-group">
            <label htmlFor="">Alamat</label>
            <textarea value={form.alamat} onChange={e => handleChange('alamat', e.target.value)} className="form-control col-md-6" rows="4"></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="">No. Telp</label>
            <input type="number" value={form.telp} onChange={e => handleChange('telp', e.target.value)} className="form-control col-md-6" />
          </div>

          <DatePicker
            selected={startDate}
            showTimeSelect
            onChange={date => setStartDate(date)}
            dateFormat="MMMM d, yyyy h:mm aa"
          />
        </div>

        <div className={"store-pickup mt-2 " + (pickup == 'Store Pickup' ? '' : 'd-none')}>
          <p>Please choose a pickup location, date and time</p>
          <div onChange={e => handleChange('outlet', e.target.value)}>
            {
              outlet.map((v, i) => {
                return (
                  <div key={i} className="form-check cart-check">
                    <input className="form-check-input" value={v.Name} type="radio" name="exampleRadios" id="exampleRadios1" />
                    <label className="form-check-label" htmlFor="exampleRadios1">
                      <h5 className="font-weight-bold">{v.Name}</h5>
                      <h6 className="font-weight-bold">
                        {v.Address}
                      </h6>
                    </label>
                  </div>
                )
              })
            }
          </div>

        </div>

        <div className={"store-delivery mt-2 " + (pickup == 'Instant Delivery' ? '' : 'd-none')}>
          <i>****Via Gojek</i>
          <div className="form-group">
            <label htmlFor="">Alamat</label>
            <textarea value={form.alamat} onChange={e => handleChange('alamat', e.target.value)} className="form-control col-md-6" rows="4"></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="">No. Telp</label>
            <input type="text" value={form.telp} onChange={e => handleChange('telp', e.target.value)} className="form-control col-md-6" />
          </div>
        </div>



        <div onClick={handleCheckout} className="btn btn-checkout">Check Out</div>
        <Link to="/product" className="btn btn-continue-shopping">Continue Shopping</Link>



      </section>
    </div>
  )
}

function SpinnerNumber({value, onMinus, onPlus, ...props}){
  return (
    <div className="productDetail-extraPriceListInput">
      <div className="productDetail-inputMinus" onClick={onMinus}>
        <FontAwesomeIcon icon="minus" />
      </div>
      <div className="productDetail-extraPriceInputText">
        <input min="1" type="number" value={value} onChange={()=>{}} />
      </div>
      <div className="productDetail-inputPlus" onClick={onPlus}>
        <FontAwesomeIcon icon="plus" />
      </div>
    </div>
  )
}

export default Cart;