import React, { useEffect, useState } from 'react'
import {connect, useDispatch, useSelector} from 'react-redux';
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CDataTable,
  CCardFooter,
  CButton,
  CInput,
  CSelect,
  // CInputCheckbox,
  CFormGroup,
  CLabel
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
// import {useDropzone} from 'react-dropzone';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {outletLocationAction, globalAction} from '../../../redux/actions';
import {Dropzone} from '../../../components';
import { createOutletLocation, deleteOutletLocation, updateOutletLocation } from '../../../redux/actions/outletLocationAction';
import { getOrder } from '../../../redux/actions/orderAction';

const fields = [
  {
    key: 'TransaksiID',
    _style: { width: '10%'},
    sorter: false,
    filter: false
  },
  { key: 'Name', _style: { width: '10%'} },
  {key: 'Product', label: "Kue yg dipesan", __style: {width: '20%'}},
  { key: 'Delivery', _style: { width: '10%'} },
  { key: 'Address', _style: { width: '10%'} },
  { key: 'PhoneNumber', _style: { width: '8%'} },
  { key: 'Outlet', label: 'Outlet (Store Delivery)' ,_style:{width: '8%'}},
  {key: 'Time', label: 'Waktu Diambil(Store Delivery)', __style: {width: '10%'}},
  {key: 'Total', __style: {width: '10%'}},
  {key: 'Status', label: 'Status Pembayaran', __style: {width: '7%'}},
  {key: 'payment_type' ,label: 'Tipe Pembayaran', __style: {width: '7%'}},
]

// v.Product.map(a => a.AddOns.map(z => z))

const Order = () => {
  const dispatch = useDispatch()
  useEffect(() => {
   dispatch(getOrder())
  }, [])

  const order = useSelector(state => state.orderReducer.griddata)
  console.log(order)
 
  return (
    <CRow>
      <CCol>
        <CCard>
          <CCardHeader>
            <strong>ORDER</strong>
          </CCardHeader>
          <CCardBody>
            <CDataTable
              items={order}
              fields={fields}
              tableFilter
              footer
              itemsPerPageSelect
              itemsPerPage={5}
              hover
              sorter
              pagination
              scopedSlots = {{
                'Product': (item, index) => {
                  return (
                    <td>

                      {item.Product.map(v=>{
                          return (
                              <div>
                                  Kue: {v.product.Name}<br/><br/>
                                  AddOns: {v.AddOns.map(v=>v[0] + ' ' + v[1] + ', ')}<br/><br/>
                                  Note: {v.Note}
                                  <hr/>
                              </div>
                          )
                      })}
                    </td>
                  )
                },
                
              
              }
            }
            />
          </CCardBody>
        </CCard>
      </CCol>

    </CRow>
  )
}


export default Order;