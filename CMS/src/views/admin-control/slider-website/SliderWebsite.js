import React from 'react'
import {connect} from 'react-redux';
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

const dummyData = [
  {Picture: "https://picsum.photos/500/300", RowStatus: true },
  {Picture: "https://picsum.photos/500/300", RowStatus: true }
]
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

const SliderWebsite = ({global, sliderWebsite, getSliderStatusDropdown, getGridData, ...props}) => {
  const [create,setCreate] = React.useState(true)
  const [form, setForm] = React.useState({
    id: "",
    linkslider: "",
    show: false,
    image: "",
    filename: "410 xx 20.jpg"
  })

  // initial data
  React.useEffect(() => {
    getSliderStatusDropdown()
    getGridData()
  }, [])

  const {acceptedFiles, getRootProps, getInputProps} = useDropzone({
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
      image: "",
      filename: ""
    })
  }
  const handleEdit = (item) => {
    setCreate(false)
    setForm({
      id: item._id,
      linkslider: item.Picture,
      show: item.RowStatus,
      image: item.Picture,
      filename: ""
    })
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
            <strong>List Slider Website</strong>
          </CCardHeader>
          <CCardBody>
            <CDataTable
              items={sliderWebsite.griddata}
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
                        <CIcon name={"cil-trash"} size="lg"/>
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
      <CCol xs="4">
        <CCard>
          <CCardHeader>
            <strong>Add Slider Website</strong>
          </CCardHeader>
          <CCardBody>
            <CFormGroup>
              <CLabel htmlFor="status">Status</CLabel>
              <CSelect custom name="status" id="status" onChange={(e) => handleChange("RowStatus", e.target.value)}>
                {global.sliderStatusDropdown.map((v) => {
                  return (
                    <option key={v.id} value={v.id}>{v.name}</option>
                  )
                })}
              </CSelect>
            </CFormGroup>
            <CFormGroup>
              <CLabel htmlFor="add-linkslider">Link Slider</CLabel>
              <CInput id="add-linkslider" placeholder="Insert Link Slider" required />
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

const mapStateToProps = state => ({
  sliderWebsite: state.sliderWebsiteReducer,
  global: state.globalReducer,
});
const mapActionToProps = { ...sliderWebsiteAction, ...globalAction };
export default connect(mapStateToProps, mapActionToProps)(SliderWebsite);