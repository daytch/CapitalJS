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
  CSelect
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {useDropzone} from 'react-dropzone';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {sliderWebsiteAction, globalAction} from '../../../redux/actions';

import {UploadImage} from '../../../services';

const fields = [
  {
    key: 'check',
    label: "",
    _style: { width: '1%'},
    sorter: false,
    filter: false
  },
  { key: 'Picture', _style: { width: '79%'} },
  { key: 'RowStatus', _style: { width: '10%'} },
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
  linkslider: "",
  status: "",
  image: ""
}
const SliderWebsite = ({
  global, sliderWebsite, getSliderStatusDropdown, getGridData,
  saveSliderWebsite, updateSliderWebsite, deleteSliderWebsite, ...props
}) => {
  const [create,setCreate] = React.useState(true)
  const [form, setForm] = React.useState(DEFAULT_FORM)
  const [checkList,setCheckList] = React.useState([])
  const dispatch = useDispatch()

  useEffect(() => {
   dispatch(getSliderStatusDropdown())
  }, [])

  useEffect(()=>{
    dispatch(getGridData())
  },[])
  const slider = useSelector(state => state)

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
          handleChange("image", url)
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
      image: ""
    })
  }
  const resetCheckList = () => {
    setCheckList(new Array(sliderWebsite.griddata.length).fill(false))
  }
  const resetForm  = () => {
    setForm(DEFAULT_FORM)
    setCreate(true)
  }
  const handleChecked = (index, checked) => {
    checkList[index] = checked
    setCheckList([...checkList])
  }
  const handleCreate = () => {
    saveSliderWebsite({
      ...form,
      status: form.status || global.sliderStatusDropdown[0].id
    }, resetForm)
  }
  const handleEdit = (item) => {
    setCreate(false)
    setForm({
      id: item._id,
      linkslider: item.Description,
      show: item.MasterStatusId,
      image: item.Picture
    })
  }
  const handleCancel = () => {
    setCreate(true)
  }
  const handleDeleteSelected = () => {
    const deletedIds = []
    checkList.forEach((v, i) => {
      if(v){
        deletedIds.push(sliderWebsite.griddata[i]._id)
      }
    })
    deleteSliderWebsite(deletedIds, resetCheckList)
  }
  const handleDelete = (item) =>{
    deleteSliderWebsite(item, resetCheckList)
  }

  const handleUpdate = () => {
    updateSliderWebsite(form)
  }
  return (
    <CRow>
      <CCol xs="12" md="8">
        <CCard>
          <CCardHeader>
            <strong>List Slider Website</strong>
          </CCardHeader>
          <CCardBody>
            <CDataTable
              items={sliderWebsite.griddata}
              fields={fields}
              tableFilter
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
                          checked={checkList[index] || false}
                          onChange={(e) => handleChecked(index, e.target.checked)}
                        />
                        <CLabel variant="custom-checkbox" htmlFor={index}></CLabel>
                      </CFormGroup>
                    </td>
                  )
                },
                'Picture': (item) => {
                  return (
                    <td align="center">
                      <img className="sw_table__image" src={item.Picture} alt="" />
                    </td>
                  )
                },
                'RowStatus': (item) => {
                  return (
                    <td>
                      {item.RowStatus ? "SHOW" : "UNSHOW"}
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
          <CCardFooter>
            <CButton type="button" color="danger" onClick={handleDeleteSelected}>Delete</CButton>
          </CCardFooter>
        </CCard>
      </CCol>
      <CCol xs="12" md="4">
        <CCard>
          <CCardHeader>
            <strong>Add Slider Website</strong>
          </CCardHeader>
          <CCardBody>
            <CFormGroup>
              <CLabel htmlFor="status">Status</CLabel>
              <CSelect custom name="status" value={form.status} id="status" onChange={(e) => handleChange("status", e.target.value)}>
                {global.sliderStatusDropdown.map((v) => {
                  return (
                    <option key={v.id} value={v.id}>{v.name}</option>
                  )
                })}
              </CSelect>
            </CFormGroup>
            <CFormGroup>
              <CLabel htmlFor="add-linkslider">Link Slider</CLabel>
              <CInput id="add-linkslider" placeholder="Insert Link Slider" required value={form.linkslider} onChange={(e) => handleChange("linkslider", e.target.value)}/>
            </CFormGroup>
            <div className="dropzone-wrapper">
              <div {...getRootProps({className: 'dropzone'})} data-margin-top="xs">
                {
                  form.image && (
                    <div className="dropzone-image-wrapper">
                      <img src={form.image} alt="" style={{width: "100%"}}/>
                    </div>
                  )
                }
                <input {...getInputProps()} />
                <p><strong>Drag 'n' drop some files here, or click to select files</strong></p>
              </div>
              {
                form.image &&
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
  sliderWebsite: state.sliderWebsiteReducer,
  global: state.globalReducer,
});
const mapActionToProps = { ...sliderWebsiteAction, ...globalAction };
export default connect(mapStateToProps, mapActionToProps)(SliderWebsite);