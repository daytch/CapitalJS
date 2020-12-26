import React, { useEffect } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux';
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
  CInputCheckbox,
  CFormGroup,
  CLabel,
  CSelect
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { useDropzone } from 'react-dropzone';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { careerAction, globalAction } from '../../../redux/actions';

import { UploadImage } from '../../../services';
import { careerSubmit, deleteCareer, getCareer, updateCareer } from '../../../redux/actions/careerAction';

const fields = [
  {
    key: 'no',
    label: "No.",
    _style: { width: '1%'},
    sorter: false,
    filter: false
  },
  { key: 'title', _style: { width: '30%'} },
  { key: 'description', _style: { width: '40%'} },
  { key: 'status', _style: {width: '30%'}},
  {
    key: 'action',
    label: 'Action',
    _style: { width: '10%' },
    sorter: false,
    filter: false
  }
]
const DEFAULT_FORM = {
  id: "",
  title: "",
  description: "",
  status: ""
}
const Career = ({
  global, sliderWebsite, getSliderStatusDropdown, getGridData,
  saveSliderWebsite, updateSliderWebsite, deleteSliderWebsite, ...props
}) => {
  const [create, setCreate] = React.useState(true)
  const [form, setForm] = React.useState(DEFAULT_FORM)
  const [checkList, setCheckList] = React.useState([])

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCareer())
  }, [])

const carrer = useSelector(state => state.careerReducer.data)

 const handleEdit = (item) =>{
setCreate(false)
    setForm({
      id: item._id,
  title: item.title,
  description: item.description,
  status: item.status
    })
 }

 const handleDelete = (item) =>{
     dispatch(deleteCareer(item))
 }

 const handleUpdate = () =>{
    dispatch(updateCareer(form))
    setCreate(true)
    setForm(DEFAULT_FORM)
 }
 const handleCreate = () =>{
  setCreate(false)
  dispatch(careerSubmit(form))
  setForm(DEFAULT_FORM)
 }
 const handleCancel = () =>{
    setCreate(true)
    setForm(DEFAULT_FORM)
 }

 const handleChange = (attr,val) =>{
   setForm({
      ...form,
      [attr]: val
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
          items={carrer}
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
                              <div className="icon-wrapper btn-primary" onClick={() => handleEdit(item)}>
                                <CIcon name={"cil-pencil"} size="lg" />
                              </div>
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
              <CLabel htmlFor="title">Title:</CLabel>
              <CInput id="title" placeholder="" required value={form.title || ''} onChange={(e) => handleChange("title", e.target.value)}/>
            </CFormGroup>
            <CFormGroup>
              <CLabel htmlFor="deskripsi">Deskripsi:</CLabel>
              <CInput id="deskripsi" placeholder="" required value={form.description || ''} onChange={(e) => handleChange("description", e.target.value)}/>
            </CFormGroup>
            <CFormGroup>
              <CLabel htmlFor="status">Status:</CLabel>
              <CInput id="status" placeholder="" required value={form.status || ''} onChange={(e) => handleChange("status", e.target.value)}/>
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
  career: state.careerReducer
});
const mapActionToProps = { ...careerAction, ...globalAction };
export default connect(mapStateToProps, mapActionToProps)(Career);