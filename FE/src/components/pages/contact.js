 import React, { useState } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Pagination from '../pagination';
import { useDispatch, useSelector } from 'react-redux';
import { getFaq } from '../../redux/actions/faqAction';
import parse from 'html-react-parser';
import Axios from 'axios';
import { POST } from '../../services';
import { URL } from '../../constants';


function Contact(props){
  const dispatch = useDispatch()
  const [form, setForm] = useState({
      name: "",
      from: "",
      telp: "",
      message: ""
  });
  React.useEffect(() => {
    window.scrollTo(0, 0)
    dispatch(getFaq())
  }, []);

  const handleChange = (id, value) => {
      setForm(e =>{
          return {
              ...e,
              [id]: value
          }
      })
  }
  console.log(form)
  const sendEmail = () =>{
     console.log(POST(URL.SEND_EMAIL,form))
  }

  return(
    <div className="blog-section">
      <h1 className="title-carrer">CONTACT US</h1>
      <div className="we-would p-2 text-center mb-4">
      <h3 className="font-weight-bold">WE WOULD LOVE TO HEAR FROM YOU</h3>
      <p>Lorem ipsum dolor? Quod velit, enim odit eveniet soluta cumque natus at labore.</p>
      </div>
      <div className="row">
          <div className="col-md-4 d-flex flex-column align-items-center">
              <h5 className="">Fell To Talk</h5>

              <h6 className="mt-2 font-weight-bold">Headquarter</h6>
              <div>021 - 5878 005 </div>
              <div>021 - 5878 006 </div>

                <h6 className="mt-2 font-weight-bold">Whatsapp  CRO:</h6>
                <div>0812XXXXXX</div>

                <h6 className="mt-2 font-weight-bold">Email:</h6>
                <div>cro@capitalbakery.com</div>
          </div>
          <div className="col-md-4">
              <div className="contact-form">
              <label>Your Name</label>
              <input onChange={e => handleChange('name', e.target.value)} type="text"/>

              <label htmlFor="">Email Address</label>
              <input onChange={e => handleChange('from', e.target.value)} type="text"/>

              <label htmlFor="">Telephone</label>
              <input type="number" onChange={e => handleChange('telp', e.target.value)} type="text"/>

              <label htmlFor="">Message</label>
              <textarea onChange={e => handleChange('message', e.target.value)} name="" id="" cols="30" rows="10"></textarea>
              <button onClick={sendEmail} className="btn btn-contact">SEND</button>
              
              </div>
              
          </div>
          <div className="col-md-4 d-flex flex-column align-items-center">
              <div className="box-animasi">ANIMASI</div>

              <h5 className="mt-1">Operational Hours</h5>

              <h5 className="mt-3">Customer Service</h5>
              <p>Monday - Sunday : 08:00 - 22:00</p>

              <h5 className="mt-3">Store & Delivery</h5>
              <p>Monday - Sunday : 08:00 - 22:00</p>
              <p>Monday - Sunday : 08:00 - 16:00</p>

              <h5 className="mt-3">Our Office</h5>
              <p>Monday - Sunday : 08:00 - 17:00</p>
          </div>
      </div>
    </div>
  )
}

export default Contact;