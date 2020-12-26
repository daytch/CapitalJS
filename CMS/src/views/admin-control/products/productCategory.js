import React, { useEffect } from 'react'
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
  CInputCheckbox,
  CFormGroup,
  CLabel,
  CSelect,
  CNavItem
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {useDropzone} from 'react-dropzone';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {sliderWebsiteAction, globalAction} from '../../../redux/actions';

import {UploadImage} from '../../../services';
import addOnsAction, { createAddOns,deleteAddOns,getAddOns, updateAddOns } from '../../../redux/actions/addOnsAction';
import categoryProductAction, { createCategoryProduct, deleteCategoryProduct, getCategoryProduct, updateCategoryProduct } from '../../../redux/actions/categoryProductAction';
import { getCategoryProductDropdown } from '../../../redux/actions/globalAction';

const fields = [
  {
    key: 'No',
    label: "No.",
    _style: { width: '1%'},
    sorter: false,
    filter: false
  },
  { key: 'Name', _style: { width: '20%'} },
  {
    key: 'action',
    label: 'Action',
    _style: { width: '10%' },
    sorter: false,
    filter: false
  }
]

// async function fileGetter(event) {
//   const files = [];
//   const fileList = event.dataTransfer ? event.dataTransfer.files : event.target.files;

//   for (var i = 0; i < fileList.length; i++) {
//     const file = fileList.item(i);
    
//     Object.defineProperty(file, 'myProp', {
//       value: true
//     });

//     files.push(file);
//   }

//   return files;
// }
const DEFAULT_FORM = {
  id: "",
  status: "",
  name: ""
}
const CategoryProduct = ({
  global, ...props
}) => {
  const [create,setCreate] = React.useState(true)
  const [form, setForm] = React.useState(DEFAULT_FORM)
  const [checkList,setCheckList] = React.useState([])
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getCategoryProduct())
    dispatch(getCategoryProductDropdown())
    
  },[])
  const category = useSelector(state => state.categoryProductReducer.griddata)
  const dropdown = useSelector(state => state.globalReducer.categoryProductDropdown)

  // initial data
  // React.useEffect(() => {
  //   getSliderStatusDropdown()
  //   getGridData()
  // }, [])

  // React.useEffect(() => {
  //   if(checkList.length == 0){
  //     setCheckList(sliderWebsite.griddata.map((v,i) => (false)))
  //   }
  // }, [sliderWebsite.griddata])

  // const files = acceptedFiles.map(f => (
  //   <li key={f.name}>
  //     {f.name} has <strong>myProps</strong>: {f.myProp === true ? 'YES' : ''}
  //   </li>
  // ));
  const handleChange = (attr, val) => {
    setForm({
      ...form,
      [attr]: val
    })
  }
  const handleCreate = () => {
      dispatch(createCategoryProduct({
          ...form,
          status: form.status || dropdown[0].id
      }))
      setForm(DEFAULT_FORM)
  }

  const handleEdit = (data) =>{
    setForm({
      id: data._id,
      name: data.Name,
      status: data.MasterStatusID
    })
    setCreate(false)
  }
  const handleUpdate = () =>{
    dispatch(updateCategoryProduct(form))
    setCreate(true)
    setForm(DEFAULT_FORM)
  }
  const handleCancel = () => {
      setForm(DEFAULT_FORM)
    setCreate(true)
  }

  const handleDelete = (item) =>{
    dispatch(deleteCategoryProduct(item))
  }

  return (
    <CRow>
      <CCol xs="12" md="8">
        <CCard>
          <CCardHeader>
            <strong>List Category Product</strong>
          </CCardHeader>   
          <CCardBody>
            <CDataTable
              items={category}
              fields={fields}
              tableFilter
              itemsPerPageSelect
              itemsPerPage={5}
              hover
              sorter
              pagination
            
              scopedSlots = {{
                
                'No': (item,i) => {
                  return (
                    <td align="center">
                      {i + 1}
                    </td>
                  )
                },    
                'action':
                  (item)=>{
                    return (
                      <td className="py-2">
                        <div className="icon-wrapper btn-primary" onClick={() => handleEdit(item)}>
                          <CIcon name={"cil-pencil"} size="lg"/>
                        </div>
                        <div className="icon-wrapper btn-danger">
                        <CIcon name={"cil-trash"} onClick={()=> handleDelete(item._id)} size="lg"/>
                        </div>
                      </td>
                      )
                  }
              }}
            />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs="12" md="4">
        <CCard>
          <CCardHeader>
            <strong>Add Category Product</strong>
          </CCardHeader>
          <CCardBody>
            <CFormGroup>
              <CLabel htmlFor="status">Status</CLabel>
              <CSelect custom name="status" value={form.status} id="status" onChange={(e) => handleChange("status", e.target.value)}>
                {dropdown.map((v) => {
                  return (
                    <option key={v.id} value={v.id}>{v.name}</option>
                  )
                })}
              </CSelect>
            </CFormGroup>
            <CFormGroup>
              <CLabel htmlFor="name">Name</CLabel>
              <CInput id="name" placeholder="Insert Link Slider" required value={form.name} onChange={(e) => handleChange("name", e.target.value)}/>
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
  addOns: state.categoryProductReducer,
  global: state.globalReducer,
});
const mapActionToProps = { ...categoryProductAction, ...globalAction };
export default connect(mapStateToProps, mapActionToProps)(CategoryProduct);