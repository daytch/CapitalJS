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
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

import CIcon from '@coreui/icons-react'
import {useDropzone} from 'react-dropzone';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {sliderWebsiteAction, globalAction} from '../../../redux/actions';

import {UploadImage} from '../../../services';
import addOnsAction, { createAddOns,deleteAddOns,getAddOns, updateAddOns } from '../../../redux/actions/addOnsAction';
import productAction, { createProduct, deleteProduct, getProduct, updateProduct } from '../../../redux/actions/productAction';
import { getProductDropdown } from '../../../redux/actions/globalAction';
import { getCategoryProduct } from '../../../redux/actions/categoryProductAction';

const fields = [
  {
    key: 'No',
    label: "No.",
    _style: { width: '1%'},
    sorter: false,
    filter: false
  },
  { key: 'Name', _style: { width: '20%'} },
  { key: 'Weigth', _style: {width: '20%'}},
  { key: 'CapitalPrice', _style: {width: '20%'}},
  { key: 'SellingPrice', _style: {width: '20%'}},
  { key: 'Stock', _style: {width: '10%'}},
  { key: 'Pictures', _style: {width: '20%'}},
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
  categoryId: "",
  addOns: [],
  weigth: "",
  capitalprice: "",
  sellingprice: "",
  stock: "",
  status: "",
  pictures: []
}
const Product = ({
  global, sliderWebsite, getSliderStatusDropdown, getGridData,
  saveSliderWebsite, updateSliderWebsite, deleteSliderWebsite, ...props
}) => {
  const [create,setCreate] = React.useState(true)
  const [form, setForm] = React.useState(DEFAULT_FORM)
  const [checkList,setCheckList] = React.useState([])
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getAddOns())
    dispatch(getProductDropdown())
    dispatch(getCategoryProduct())
    dispatch(getProduct())
  },[])
  const product = useSelector(state => state.productReducer.griddata)
  const dropdown = useSelector(state => state.globalReducer.productDropdown)
  const category = useSelector(state => state.categoryProductReducer.griddata)
  const addOns = useSelector(state => state.addOnsReducer.griddata)
  const dataAddOns = addOns.map(v=>{
      return {
          value: v._id,
          label: v.Name
      }
  })

  console.log(dropdown)
  
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
      let dataUrl = []
      if(files.length){
          files.map(file => {
            UploadImage(file, (url) => {
          dataUrl.push(url)
        })
          })
        handleChange('pictures', dataUrl)
      }

      return files;
    }
  });
  // const files = acceptedFiles.map(f => (
  //   <li key={f.name}>
  //     {f.name} has <strong>myProps</strong>: {f.myProp === true ? 'YES' : ''}
  //   </li>
  // ));
  const animatedComponents = makeAnimated();

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
      dispatch(createProduct({
          ...form,
          status: form.status || dropdown[0]._id,
          categoryId: form.categoryId || category[0]._id
      }))
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
  pictures: data.Pictures
    })
    setCreate(false)
  }
  const handleUpdate = () =>{
    dispatch(updateProduct(form))
    setCreate(true)
    setForm(DEFAULT_FORM)
  }
  const handleCancel = () => {
    setCreate(true)
  }

  const handleDelete = (item) =>{
    dispatch(deleteProduct(item))
  }
 console.log(form)
  return (
    <CRow>
      <CCol xs="12" md="8">
        <CCard>
          <CCardHeader>
            <strong>List Product</strong>
          </CCardHeader>
          <CCardBody>
            <CDataTable
              items={product}
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
            <strong>Add Product</strong>
          </CCardHeader>
          <CCardBody>
              <CFormGroup>
              <CLabel htmlFor="status">Status</CLabel>
              <CSelect custom name="status" value={form.status} id="status" onChange={(e) => handleChange("status", e.target.value)}>
                {dropdown.map((v) => {
                  return (
                    <option key={v._id} value={v._id}>{v.name}</option>
                  )
                })}
              </CSelect>
            </CFormGroup>
            <CFormGroup>
              <CLabel htmlFor="category">Category</CLabel>
              <CSelect custom name="category" value={form.category} id="category" onChange={(e) => handleChange("category", e.target.value)}>
                {category.map((v) => {
                  return (
                    <option key={v._id} value={v.id}>{v.Name}</option>
                  )
                })}
              </CSelect>
            </CFormGroup>
            <CFormGroup>
                <CLabel htmlFor="addons">AddOns</CLabel>
                <Select
                closeMenuOnSelect={false}
                components={animatedComponents}
                // defaultValue={[colourOptions[4]]}
                isMulti
                options={dataAddOns}
                onChange={(e) => handleChange("addOns", e.map(v=>v.value))}
            />
            </CFormGroup>
            
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
                  form.pictures && (
                    <div className="dropzone-image-wrapper">
                        {
                            form.pictures.map(v =>{
                                return (
                                    <img src={v} alt="" style={{width: "20%"}}/>
                                )
                                
                            })
                        }
                      
                    </div>
                  )
                }
                <input {...getInputProps()} />
                <p><strong>Drag 'n' drop some files here, or click to select files</strong></p>
              </div>
              {
                form.pictures &&
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
  product: state.productReducer,
  global: state.globalReducer,
});
const mapActionToProps = { ...productAction, ...globalAction };
export default connect(mapStateToProps, mapActionToProps)(Product);