import React from 'react'
import {
  CCard,
  CCardBody,
  CCol,
  CRow,
  CDataTable,
  CCardFooter,
  CButton,
  CInputCheckbox,
  CFormGroup,
  CLabel
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

const dummyData = [
  {picture: "https://picsum.photos/500/300", status: true },
  {picture: "https://picsum.photos/500/300", status: true }
]
const fields = [
  {
    key: 'check',
    label: "",
    _style: { width: '1%'},
    sorter: false,
    filter: false
  },
  { key: 'picture', _style: { width: '79%'} },
  { key: 'status', _style: { width: '10%'} },
  {
    key: 'action',
    label: 'Action',
    _style: { width: '10%' },
    sorter: false,
    filter: false
  }
]

const SliderWebsite = ({...props}) => {
  const handleDeleteSelected = () => {

  }
  return (
    <CRow>
      <CCol xs="12">
        <CCard>
          <CCardBody>
            <CDataTable
              items={dummyData}
              fields={fields}
              tableFilter
              footer
              itemsPerPageSelect
              itemsPerPage={5}
              hover
              sorter
              pagination
              columnHeaderSlot = {{
                'check': (
                  <CFormGroup variant="custom-checkbox">
                    <CInputCheckbox 
                      custom 
                      id={"check-all"}
                      name={"check-all"}
                      value={"check-all"}
                    />
                    <CLabel variant="custom-checkbox" htmlFor={"check-all"}></CLabel>
                  </CFormGroup>
                )
              }}
              scopedSlots = {{
                'check': (item, index) => {
                  return (
                    <td>
                      <CFormGroup variant="custom-checkbox">
                        <CInputCheckbox 
                          custom 
                          id={index}
                          name={index}
                          value={index}
                        />
                        <CLabel variant="custom-checkbox" htmlFor={index}></CLabel>
                      </CFormGroup>
                    </td>
                  )
                },
                'picture': (item) => {
                  return (
                    <td align="center">
                      <img className="sw_table__image" src={item.picture} alt="" />
                    </td>
                  )
                },
                'status': (item) => {
                  return (
                    <td>
                      {item.status ? "SHOW" : "UNSHOW"}
                    </td>
                  )
                },
                'action':
                  (item, index)=>{
                    return (
                      <td className="py-2">
                        <div className="icon-wrapper btn-primary">
                          <CIcon name={"cil-pencil"} size="lg"/>
                        </div>
                        <div className="icon-wrapper btn-danger">
                        <CIcon name={"cil-trash"} size="lg"/>
                        </div>
                      </td>
                      )
                  }
              }}
            />
          </CCardBody>
          <CCardFooter>
            <CButton type="button" color="primary" onClick={handleDeleteSelected}>Update</CButton>
          </CCardFooter>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default SliderWebsite