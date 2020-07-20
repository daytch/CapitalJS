import React from 'react'
import {
  CCard,
  CCardBody,
  CCol,
  CRow
} from '@coreui/react'

const Blog = () => {
  return (
    <CRow>
      <CCol xs="12">
        <CCard>
          <CCardBody>
            Content
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Blog