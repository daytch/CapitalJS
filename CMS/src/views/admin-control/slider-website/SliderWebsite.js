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
  CInputCheckbox,
  CFormGroup,
  CLabel
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {useDropzone} from 'react-dropzone';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

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

async function fileGetter(event) {
  const files = [];
  const fileList = event.dataTransfer ? event.dataTransfer.files : event.target.files;

  for (var i = 0; i < fileList.length; i++) {
    const file = fileList.item(i);
    
    Object.defineProperty(file, 'myProp', {
      value: true
    });

    files.push(file);
  }

  return files;
}

const SliderWebsite = ({...props}) => {
  const [create,setCreate] = React.useState(true)
  const [form, setForm] = React.useState({
    linkslider: "",
    show: false,
    image: "https://picsum.photos/500/300",
    filename: "410 xx 20.jpg"
  })
  const {acceptedFiles, getRootProps, getInputProps} = useDropzone({
    getFilesFromEvent: event => fileGetter(event)
  });
  const files = acceptedFiles.map(f => (
    <li key={f.name}>
      {f.name} has <strong>myProps</strong>: {f.myProp === true ? 'YES' : ''}
    </li>
  ));
  const handleDropzoneImageRemove = () => {
    return setForm({
      ...form,
      image: "",
      filename: ""
    })
  }
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
            <strong>List Slider Website</strong>
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
              <CLabel htmlFor="add-linkslider">Link Slider</CLabel>
              <CInput id="add-linkslider" placeholder="Insert Link Slider" required />
            </CFormGroup>
            <CFormGroup variant="custom-checkbox">
              <CInputCheckbox 
                custom 
                id={"add-show"}
                name={"add-show"}
                value={"add-show"}
              />
              <CLabel variant="custom-checkbox" htmlFor={"add-show"}>Show</CLabel>
            </CFormGroup>
            <div className="dropzone-wrapper">
              <div {...getRootProps({className: 'dropzone'})} data-margin-top="xs">
                {
                  form.image && (
                    <div className="dropzone-image-wrapper">
                      <img src={form.image} alt="" style={{width: "50px",height: "50px"}}/>
                      <span data-margin-left="xxs"><strong>{form.filename}</strong></span>
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

export default SliderWebsite