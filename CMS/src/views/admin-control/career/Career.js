import React from 'react'
import { connect } from 'react-redux';
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCol,
  CRow,
  CForm,
  CFormGroup,
  CInput,
  CLabel
} from '@coreui/react'
import { Editor } from '../../../components';

import { careerAction } from '../../../redux/actions';

const Career = ({ career, careerSubmit, getCareer, ...props }) => {
  const firstLoad = React.useRef(true)
  const [form, setForm] = React.useState({
    id: "",
    profile: "",
    tagline: "",
    email: "",
    phone: "",
    whatsapp: "",
    instagram: "",
    facebook: "",
    twitter: "",
    logo: ""
  })

  React.useEffect(() => {
    getCareer()
  })

  React.useEffect(() => {
    
    if (career.data !== null) {
      console.log(career.data)
      setForm({ ...career.data })
    }
  }, [career.data])

  React.useEffect(() => {
    if (firstLoad.current && career.data !== null) {
      firstLoad.current = false;
    }
  })

  const handleChange = (attr, val) => {
    setForm({
      ...form,
      [attr]: val
    })
  }
  const handleUpdate = () => {
    careerSubmit(form)
  }

  return (
    <CRow>
      <CCol xs="12">
        <CCard>
          <CCardBody>
            <CForm action="" method="post" className="form-horizontal">
              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="cp-email">Profile</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <Editor
                    data={form.profile}
                    onChange={(event, editor) => {
                      if (!firstLoad.current) {
                        const data = editor.getData();
                        handleChange("profile", data);
                      }
                    }}
                  />
                  {/* <CInput type="text" id="cp-profile" value={form.profile} onChange={(e) => handleChange("profile", e.target.value)} name="cp-profile" placeholder="Enter Profile..." autoComplete="profile" /> */}
                </CCol>
              </CFormGroup>
              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="cp-tagline">Tagline</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CInput type="text" id="cp-tagline" value={form.tagline} onChange={(e) => handleChange("tagline", e.target.value)} name="cp-tagline" placeholder="Enter Tagline..." autoComplete="tagline" />
                </CCol>
              </CFormGroup>
              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="cp-email">Email</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CInput type="email" id="cp-email" value={form.email} onChange={(e) => handleChange("email", e.target.value)} name="cp-email" placeholder="Enter Email..." autoComplete="email" />
                </CCol>
              </CFormGroup>
              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="cp-phone">Phone</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CInput type="text" id="cp-phone" value={form.phone} onChange={(e) => handleChange("phone", e.target.value)} name="cp-phone" placeholder="Enter Phone..." autoComplete="phone" />
                </CCol>
              </CFormGroup>
              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="cp-whatsapp">Whatsapp Link</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CInput type="text" id="cp-whatsapp" value={form.whatsapp} onChange={(e) => handleChange("whatsapp", e.target.value)} name="cp-whatsapp" placeholder="Enter Whatsapp..." autoComplete="whatsapp" />
                </CCol>
              </CFormGroup>
              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="cp-instagram">Instagram Link</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CInput type="text" id="cp-instagram" value={form.instagram} onChange={(e) => handleChange("instagram", e.target.value)} name="cp-instagram" placeholder="Enter Instagram..." autoComplete="instagram" />
                </CCol>
              </CFormGroup>
              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="cp-facebook">Facebook Link</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CInput type="text" id="cp-facebook" value={form.facebook} onChange={(e) => handleChange("facebook", e.target.value)} name="cp-facebook" placeholder="Enter Facebook..." autoComplete="facebook" />
                </CCol>
              </CFormGroup>
              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="cp-twitter">Twitter Link</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CInput type="text" id="cp-twitter" value={form.twitter} onChange={(e) => handleChange("twitter", e.target.value)} name="cp-twitter" placeholder="Enter Twitter..." autoComplete="twitter" />
                </CCol>
              </CFormGroup>
              <CFormGroup row>
                <CCol md="3">
                  <CLabel>Logo</CLabel>
                </CCol>
              </CFormGroup>
            </CForm>
          </CCardBody>
          <CCardFooter>
            <CButton type="button" color="primary" onClick={handleUpdate}>Update</CButton>
          </CCardFooter>
        </CCard>
      </CCol>
    </CRow>
  )

}
const mapStateToProps = state => ({
  career: state.careerReducer
});
const mapActionToProps = careerAction;
export default connect(mapStateToProps, mapActionToProps)(Career);