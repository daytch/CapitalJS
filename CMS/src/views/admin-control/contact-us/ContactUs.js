import React, { useEffect } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux';

import {
  CCard,
  CCardBody,
  CCol,
  CRow,
  CButton,
  CLabel,
  CInput,
  CCardFooter,
  CFormGroup,
  CCardHeader,
  CDataTable,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import contactAction, { createContact, deleteContact, getContact } from '../../../redux/actions/contactAction';
import globalAction from '../../../redux/actions/globalAction';

const DEFAULT_FORM = {
  id: "",
  name: "",
  email: "",
  phoneNumber: ""
}

const fields = [
  {
    key: 'no',
    label: "No.",
    _style: { width: '1%'},
    sorter: false,
    filter: false
  },
  { key: 'Name', _style: { width: '30%'} },
  { key: 'Email', _style: { width: '40%'} },
  { key: 'PhoneNumber', _style: {width: '30%'}},
  {
    key: 'action',
    label: 'Action',
    _style: { width: '10%' },
    sorter: false,
    filter: false
  }
]
const ContactUs = () => {
  const [form, setForm] = React.useState(DEFAULT_FORM)
  const [create, setCreate] = React.useState(true)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContact())
  }, []);

  // const contact = useSelector(state => state.contactUsReducer.data)
  const contact = useSelector(state => state.contactReducer.data)



  const handleCancel = () =>{

  }

  const handleUpdate = () =>{

  }
  const handleCreate = () =>{
    setCreate(false)
    dispatch(createContact(form))

  }

  const handleChange = (attr, val) => {
    setForm({
      ...form,
      [attr]: val
    })
  }

  const handleDelete = (item) =>{
    dispatch(deleteContact(item))
  }
  const handleEdit = (item) =>{
    setCreate(false)
    setForm({
      id: item._id,
      name: item.Name,
      email: item.Email,
      phoneNumber: item.PhoneNumber
    })
  }
  return (
     <CRow>
     <CCol md="8" xs="12">
      <CCard>
        <CCardHeader>
          <strong>List Career</strong>
        </CCardHeader>
        <CCardBody>
          <CDataTable
          items={contact}
          fields={fields}
          tableFilter
              footer
              itemsPerPageSelect
              itemsPerPage={5}
              hover
              sorter
              pagination
              scopedSlots={{
                'no': (item,index) =>{
                  return (
                          <td>
                      {index + 1}
                          </td>
                        )
                },
                'action': (item) =>{
                  return (
                            <td className="py-2">
                              {/* <div className="icon-wrapper btn-primary" onClick={() => handleEdit(item)}>
                                <CIcon name={"cil-pencil"} size="lg" />
                              </div> */}
                              <div className="icon-wrapper btn-danger" onClick={() => handleDelete(item._id)}>
                                <CIcon name={"cil-trash"} size="lg" />
                              </div>
                            </td>
                          )
                }
              }}

          >

          </CDataTable>
        </CCardBody>
      </CCard>
     </CCol>
     <CCol md="4" xs="12">
              <CCard>
          <CCardHeader>
            <strong>Add Branch</strong>
          </CCardHeader>
          <CCardBody>
            <CFormGroup>
              <CLabel htmlFor="name">Name:</CLabel>
              <CInput id="name" placeholder="" required value={form.name || ''} onChange={(e) => handleChange("name", e.target.value)}/>
            </CFormGroup>
            <CFormGroup>
              <CLabel htmlFor="email">Email:</CLabel>
              <CInput id="email" placeholder="" required value={form.email || ''} onChange={(e) => handleChange("email", e.target.value)}/>
            </CFormGroup>
            <CFormGroup>
              <CLabel htmlFor="phoneNumber">Phone Number:</CLabel>
              <CInput id="phoneNumber" placeholder="" required value={form.phoneNumber || ''} onChange={(e) => handleChange("phoneNumber", e.target.value)}/>
            </CFormGroup>
          </CCardBody>
          <CCardFooter>
            {
              create ? 
              <CButton type="button" color="primary" onClick={handleCreate}>Create</CButton> :
              <>
                <CButton type="button" color="success" onClick={handleUpdate}>Update</CButton>
                <CButton type="button" color="danger" onClick={handleCancel}>Cancel</CButton>
              </>
            }
          </CCardFooter>
        </CCard>
     </CCol>
    </CRow>
  )
}

const mapStateToProps = state => ({
  career: state.contactUsReducer
});
const mapActionToProps = { ...contactAction, ...globalAction };
export default connect(mapStateToProps, mapActionToProps)(ContactUs);