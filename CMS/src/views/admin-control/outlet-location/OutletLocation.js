import React from 'react'
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
  CInputCheckbox,
  CFormGroup,
  CLabel
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {useDropzone} from 'react-dropzone';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const dummyData = [
  {branch: "Angke", status: "OPEN", address: "Jl. Pangeran Tubagus Angke", map: "https://google.com", phone: "085921589" },
  {branch: "Tanjung Duren", status: "OPEN", address: "Jl. Pangeran Tubagus Angke", map: "https://google.com", phone: "085921589" }
]
const fields = [
  {
    key: 'no',
    label: "No.",
    _style: { width: '1%'},
    sorter: false,
    filter: false
  },
  { key: 'branch', _style: { width: '30%'} },
  { key: 'address', _style: { width: '40%'} },
  { key: 'phone', _style: { width: '10%'} },
  {
    key: 'action',
    label: 'Action',
    _style: { width: '10%' },
    sorter: false,
    filter: false
  }
]

const OutletLocation = ({...props}) => {
  const [create,setCreate] = React.useState(true)
  const [form, setForm] = React.useState({
    branch: "",
    phone: "",
    address: "",
    map: "",
    status: ""
  })
  const handleEdit = () => {
    setCreate(false)
  }
  const handleCancel = () => {
    setCreate(true)
  }
  const handleDeleteSelected = () => {

  }
  return (
    <CRow>
      <CCol xs="8">
        <CCard>
          <CCardHeader>
            <strong>List Branch</strong>
          </CCardHeader>
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
              scopedSlots = {{
                'no': (item, index) => {
                  return (
                    <td>
                      {index+1}
                    </td>
                  )
                },
                'branch': (item) => {
                  return (
                    <td>
                      {`${item.branch} [${item.status}]`}
                    </td>
                  )
                },
                'address': (item) => {
                  return (
                    <td>
                      {item.address}
                      <br/>
                      <a href={item.map}>View Maps...</a>
                    </td>
                  )
                },
                'action':
                  (item, index)=>{
                    return (
                      <td className="py-2">
                        <div className="icon-wrapper btn-primary" onClick={handleEdit}>
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
        </CCard>
      </CCol>
      <CCol xs="4">
        <CCard>
          <CCardHeader>
            <strong>Add Branch</strong>
          </CCardHeader>
          <CCardBody>
            <CFormGroup>
              <CLabel htmlFor="status">Status</CLabel>
              <CSelect custom name="status" id="status">
                <option value="1">OPEN</option>
                <option value="2">SHOW</option>
              </CSelect>
            </CFormGroup>
            <CFormGroup>
              <CLabel htmlFor="branch">Nama Cabang:</CLabel>
              <CInput id="branch" placeholder="" required />
            </CFormGroup>
            <CFormGroup>
              <CLabel htmlFor="phone">No. Telpon:</CLabel>
              <CInput id="phone" placeholder="" required />
            </CFormGroup>
            <CFormGroup>
              <CLabel htmlFor="address">Alamat:</CLabel>
              <CInput id="address" placeholder="" required />
            </CFormGroup>
            <CFormGroup>
              <CLabel htmlFor="map">Link Slider</CLabel>
              <CInput id="map" placeholder="" required />
            </CFormGroup>
          </CCardBody>
          <CCardFooter>
            {
              create ? 
              <CButton type="button" color="primary" onClick={handleDeleteSelected}>Create</CButton> :
              <>
                <CButton type="button" color="success" onClick={handleDeleteSelected}>Update</CButton>
                <CButton type="button" color="danger" onClick={handleCancel}>Cancel</CButton>
              </>
            }
          </CCardFooter>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default OutletLocation