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

const fields = [
  {
    key: 'No',
    label: "No.",
    _style: { width: '1%'},
    sorter: false,
    filter: false
  },
  { key: 'Name', _style: { width: '20%'} },
  { key: 'Weigth', _style: { width: '10%'} },
  {key: 'Stock', _style: {width: '10%'}},
  {key: 'CapitalPrice', _style: {width: '20%'}},
  {key: 'SellingPrice', _style: {width: '20%'}},
  {key: 'Pictures', _style: {width: '30%'}},
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
  name: "",
  weight: "",
  capitalprice: "",
  sellingprice: "",
  stock: "",
  picture: ""
}
const AddOns = ({
  global, sliderWebsite, getSliderStatusDropdown, getGridData,
  saveSliderWebsite, updateSliderWebsite, deleteSliderWebsite, ...props
}) => {
  const [create,setCreate] = React.useState(true)
  const [form, setForm] = React.useState(DEFAULT_FORM)
  const [checkList,setCheckList] = React.useState([])
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getAddOns())
  },[])
  const addOns = useSelector(state => state.addOnsReducer.griddata)
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

  const {/*acceptedFiles,*/ getRootProps, getInputProps} = useDropzone({
    getFilesFromEvent: event => {
      const files = [];
      const fileList = event.dataTransfer ? event.dataTransfer.files : event.target.files;

      for (var i = 0; i < fileList.length; i++) {
        const file = fileList.item(i);
        
        Object.defineProperty(file, 'myProp', {
          value: true
        });

        files.push(file);
      }
      if(files.length){
        UploadImage(files[0], (url) => {
          handleChange("picture", url)
        })
      }

      return files;
    }
  });
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
  const handleDropzoneImageRemove = () => {
    return setForm({
      ...form,
      picture: ""
    })
  }
  const resetCheckList = () => {
    setCheckList(new Array(sliderWebsite.griddata.length).fill(false))
  }
  const resetForm  = () => {
    setForm(DEFAULT_FORM)
    setCreate(true)
  }
 
  const handleCreate = () => {
      dispatch(createAddOns(form))
      setCreate(false)
      setForm(DEFAULT_FORM)
    
  }

  const handleEdit = (data) =>{
    setForm({
      id: data._id,
  name: data.Name,
  weigth: data.Weigth,
  capitalprice: data.CapitalPrice,
  sellingprice: data.SellingPrice,
  stock: data.Stock,
  picture: data.Pictures
    })
    setCreate(false)
  }
  const handleUpdate = () =>{
    dispatch(updateAddOns(form))
    setCreate(true)
    setForm(DEFAULT_FORM)
  }
  const handleCancel = () => {
    setCreate(true)
  }

  const handleDelete = (item) =>{
    dispatch(deleteAddOns(item))
  }

  return (
    <CRow>
      <CCol xs="12" md="8">
        <CCard>
          <CCardHeader>
            <strong>List Add Ons</strong>
          </CCardHeader>
          <CCardBody>
            <CDataTable
              items={addOns}
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
                'Pictures': (item) => {
                  return (
                    <td align="center">
                      <img className="sw_table__image" src={item.Pictures} style={{width: "120px"}} alt="" />
                    </td>
                  )
                },
                
                'action':
                  (item, index)=>{
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
            <strong>Add Add Ons Product</strong>
          </CCardHeader>
          <CCardBody>
            <CFormGroup>
              <CLabel htmlFor="name">name</CLabel>
              <CInput id="name" placeholder="Insert Link Slider" required value={form.name} onChange={(e) => handleChange("name", e.target.value)}/>
            </CFormGroup>
            <CFormGroup>
              <CLabel htmlFor="weigth">weigth</CLabel>
              <CInput id="weigth" placeholder="Insert Link Slider" required value={form.weigth} onChange={(e) => handleChange("weigth", e.target.value)}/>
            </CFormGroup>
            <CFormGroup>
              <CLabel htmlFor="capitalprice">capitalprice</CLabel>
              <CInput id="capitalprice" placeholder="Insert Link Slider" required value={form.capitalprice} onChange={(e) => handleChange("capitalprice", e.target.value)}/>
            </CFormGroup>
            <CFormGroup>
              <CLabel htmlFor="sellingprice">sellingprice</CLabel>
              <CInput id="sellingprice" placeholder="Insert Link Slider" required value={form.sellingprice} onChange={(e) => handleChange("sellingprice", e.target.value)}/>
            </CFormGroup>
            <CFormGroup>
              <CLabel htmlFor="stock">stock</CLabel>
              <CInput id="stock" placeholder="Insert Link Slider" required value={form.stock} onChange={(e) => handleChange("stock", e.target.value)}/>
            </CFormGroup>
            <div className="dropzone-wrapper">
              <div {...getRootProps({className: 'dropzone'})} data-margin-top="xs">
                {
                  form.picture && (
                    <div className="dropzone-image-wrapper">
                      <img src={form.picture} alt="" style={{width: "30%"}}/>
                    </div>
                  )
                }
                <input {...getInputProps()} />
                <p><strong>Drag 'n' drop some files here, or click to select files</strong></p>
              </div>
              {
                form.picture &&
                <FontAwesomeIcon icon="times-circle" size="lg" className="dropzone-image-close" onClick={handleDropzoneImageRemove}/>
              }
            </div>
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
  addOns: state.addOnsReducer,
  global: state.globalReducer,
});
const mapActionToProps = { ...addOnsAction, ...globalAction };
export default connect(mapStateToProps, mapActionToProps)(AddOns);