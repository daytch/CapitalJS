import { faBars, faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { doLogin, doRegister } from '../../../redux/actions/loginAction';
import { public_path } from '../../../utils/common';
import history from '../../../utils/history';
import { createBrowserHistory } from 'history';

const textHeight = 24.33;
const defaultBackgroundHeight = 110;

const REGIS_FORM = {
  username: '',
  password: '',
  email: '',
  telp: ''
}

const LOGIN_FORM = {
  username: '',
  password: '',
}

function Header(props) {
  const dispatch = useDispatch()
  const [backgroundHeight, setBackgroundHeight] = React.useState(110);
  const [sign, setSign] = React.useState(true);
  const [form, setForm] = React.useState(LOGIN_FORM)
  const [search, setSearch] = React.useState("")
  const onHover = (itemLength) => {
    setBackgroundHeight(defaultBackgroundHeight + (textHeight * itemLength));
  }
  const onLeave = () => {
    setBackgroundHeight(defaultBackgroundHeight)
  }
  const onClickDrawer = () => {
    document.querySelector('.leftMenu').classList.toggle('pop-up')
  }
  const handleSearch = () => {
    document.querySelector('.search-box').classList.toggle('pop-up')
  }
  const goToProduct = () => history.push("/product");
  const handleChange = (attr, val) => {
    setForm({
      ...form,
      [attr]: val
    })
  }

  const message = useSelector(state => state.loginReducer.message)

  const signIn = () => {
    dispatch(doLogin(form))
    setForm(LOGIN_FORM)
  }

  useEffect(() => {
    if (message.isError === 1) {
      toast.error(message.message)
    }

    if (message.isError === 0 && message.isRegister === true) {
      console.log('register sukses')
      toast.success(message.message)
      setForm(LOGIN_FORM)
      setSign(true)
    }
  }, [message])

  const signUp = () => {
    dispatch(doRegister(form))
  }

  const handleEnter = (e) => {
    if (e.keyCode === 13) {
      const dd = createBrowserHistory({ forceRefresh: true })
      dd.push('/product', { data: search })
    }
  }
  return (
    <div>
      <header>
        <ToastContainer />

        <div className="header-container">
          <div onClick={onClickDrawer} className="menu-phone">
            <FontAwesomeIcon icon={faBars} size="lg" />
          </div>
          <div className="curvy">
            <img style={{ height: backgroundHeight + "px" }} src={public_path("/assets/img/header-background.png")} alt="" />
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
              <a className="menu-label" onMouseOver={() => onHover(6 - 1)} onMouseLeave={onLeave}>
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

          <div className="search-box d-flex">
            <input onChange={e => setSearch(e.target.value)} onKeyUp={handleEnter} placeholder="Cari Disini..." className="w-100" type="text" />
          </div>

          <div className="logo" onClick={() => history.push("/")}>
            <img src={public_path('/assets/img/logo.png')} />
          </div>
          <div className="rightMenu desktop-menu xl-size">
            <div className="menu-labelContainer">
              <div className="header-searchWrapper">
                <input onChange={e => setSearch(e.target.value)} onKeyUp={handleEnter} className="header-searchInput" type="text" name="search" id="search" placeholder="SEARCH..." />
              </div>
            </div>
            <div className="menu-labelContainer">
              <Link to="/cart" className="menu-label" data-icon={true}><span className="labelCart">CART</span></Link>
            </div>
            <div className="menu-labelContainer">
              {localStorage.getItem('userid') ?
                <Link to="/order" className="menu-label"><span>ORDER</span></Link>
                :
                <a data-toggle="modal" data-target="#exampleModal" className="menu-label"><span>LOGIN</span></a>
              }

            </div>
          </div>
          <div className="rightMenu desktop-menu md-size">
            <div className="menu-labelContainer">
              <div className="header-searchWrapper">
                <input className="header-searchInput" type="text" name="search" id="search" placeholder="SEARCH..." />
              </div>
            </div>
            <div className="menu-labelContainer">
              <Link to="/cart" className="menu-label" data-icon={true}><FontAwesomeIcon icon={faShoppingCart} size="lg" /></Link>
            </div>
            <div className="menu-labelContainer">
              <a onClick={handleSearch} className="menu-label" data-icon={true}><FontAwesomeIcon icon={faSearch} size="lg" /></a>
            </div>

            <div className="menu-labelContainer">
              {localStorage.getItem('userid') ?
                <Link to="/order" className="menu-label"><span>ORDER</span></Link>
                :
                <a data-toggle="modal" data-target="#exampleModal" className="menu-label"><span>LOGIN</span></a>
              }
            </div>
          </div>
        </div>
      </header>



      <div className="modal fade" id="exampleModal" data-backdrop="static" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div style={{ borderBottom: '0px' }} className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body mb-4">
              {
                sign ? <div>
                  <h4 className="font-weight-bold text-center">Sign In</h4>
                  <form>
                    <div className="form-group">
                      <label htmlFor="">Username</label>
                      <input value={form.username} onChange={(e) => handleChange("username", e.target.value)} type="text" className="form-control bg-light rounded-pill" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="">Password</label>
                      <input value={form.password} onChange={(e) => handleChange("password", e.target.value)} type="password" className="form-control bg-light rounded-pill" />
                    </div>
                    <div onClick={signIn} className="w-100 rounded-pill mt-2 btn btn-brown">SIGN IN</div>
                  </form>
                  <a onClick={() => {
                    setForm(REGIS_FORM)
                    setSign(false)
                  }} className="link-regis d-flex justify-content-center mt-3">
                    Dont have an account ? Register a new account
        </a>
                </div> :
                  <div>
                    <h4 className="font-weight-bold text-center">Sign Up</h4>
                    <form>
                      <div className="form-group">
                        <label htmlFor="">Username</label>
                        <input value={form.username} onChange={(e) => handleChange("username", e.target.value)} on type="text" className="form-control bg-light rounded-pill" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="">Email Address</label>
                        <input value={form.email} onChange={(e) => handleChange("email", e.target.value)} type="text" className="form-control bg-light rounded-pill" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="">No. Telp</label>
                        <input value={form.telp} onChange={(e) => handleChange("telp", e.target.value)} type="text" className="form-control bg-light rounded-pill" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="">Password</label>
                        <input value={form.password} onChange={(e) => handleChange("password", e.target.value)} type="password" className="form-control bg-light rounded-pill" />
                      </div>
                      <div onClick={signUp} className="w-100 rounded-pill mt-2 btn btn-brown">SIGN UP</div>
                    </form>
                    <a onClick={() => {
                      setForm(LOGIN_FORM)
                      setSign(true)
                    }} className="link-regis d-flex justify-content-center mt-3">
                      Already have an account ? Login here
        </a>
                  </div>
              }

            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Header;