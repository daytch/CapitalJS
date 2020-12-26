import React, { useEffect } from 'react'
import {connect, useDispatch} from 'react-redux';
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
  // CInputCheckbox,
  CFormGroup,
  CLabel
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
// import {useDropzone} from 'react-dropzone';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {outletLocationAction, globalAction} from '../../../redux/actions';
import {Dropzone} from '../../../components';
import { createOutletLocation, deleteOutletLocation, updateOutletLocation } from '../../../redux/actions/outletLocationAction';

const fields = [
  {
    key: 'no',
    label: "No.",
    _style: { width: '1%'},
    sorter: false,
    filter: false
  },
  { key: 'Name', _style: { width: '30%'} },
  { key: 'Address', _style: { width: '40%'} },
  { key: 'Telephone', _style: { width: '10%'} },
  { key: 'isDelivery', _style:{width: '10%'}},
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
  branch: "",
  phone: "",
  address: "",
  map: "",
  status: "",
  picture: "",
  isDelivery: ""
}

const OutletLocation = ({outletLocation, getGridData, global, getBranchStatusDropdown,...props}) => {
  const [create,setCreate] = React.useState(true)
  const [form, setForm] = React.useState(DEFAULT_FORM)
  const dispatch = useDispatch()
  useEffect(() => {
   dispatch(globalAction.getBranchStatusDropdown())
  }, [])

  useEffect(() => {
    dispatch(getGridData())
  }, [])

  console.log(form)


  // initial data
  // React.useEffect(() => {
  //   getBranchStatusDropdown();
  //   getGridData();
  // }, []);

  const handleChange = (attr, val) => {
    setForm({
      ...form,
      [attr]: val
    })
  }
  const handleEdit = (item) => {
    setCreate(false)
    setForm({
      id: item._id,
      branch: item.Name,
      phone: item.Telephone,
      address: item.Address,
      isDelivery: item.isDelivery,
      map: item.Maps,
      status: item.MasterStatusId,
      picture: item.Picture
    })
  }
  const handleCancel = () => {
    setCreate(true)
    setForm(DEFAULT_FORM)
  }
  const handleCreate = () => {
    setCreate(false)
    dispatch(createOutletLocation({
      ...form,
      status: form.status || global.branchStatusDropdown[0].id,
      isDelivery: form.isDelivery || '1'
    }))
    setForm(DEFAULT_FORM)
  }
  const handleUpdate = () => {
    setCreate(true)
    dispatch(updateOutletLocation(form))
    setForm(DEFAULT_FORM)
  }

  const handleDelete = (item) => {
    let userid = localStorage.getItem('userid')
    console.log('ini view ' + userid)
    dispatch(deleteOutletLocation({
      id: item._id,
      userId: userid
    }))
    setForm(DEFAULT_FORM)
  }
  return (
    <CRow>
      <CCol md="8" xs="12">
        <CCard>
          <CCardHeader>
            <strong>List Branch</strong>
          </CCardHeader>
          <CCardBody>
            <CDataTable
              items={outletLocation.griddata}
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
                'Name': (item) => {
                  return (
                    <td>
                      {`${item.Name} [${item.status}]`}
                    </td>
                  )
                },
                'Address': (item) => {
                  return (
                    <td>
                      {item.Address}
                      <br/>
                      <a href={item.Maps || "#"}>View Maps...</a>
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
                        <div className="icon-wrapper btn-danger" onClick={()=> handleDelete(item)}>
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
      <CCol md="4" xs="12">
        <CCard>
          <CCardHeader>
            <strong>Add Branch</strong>
          </CCardHeader>
          <CCardBody>
            <CFormGroup>
              <CLabel htmlFor="status">Status</CLabel>
              <CSelect  custom name="status" id="status" value={form.status} onChange={(e) => handleChange("status", e.target.value)}>
                {global.branchStatusDropdown.map((v) => {
                  return (
                    <option key={v.id} value={v.id}>{v.name}</option>
                  )
                })}
              </CSelect>
            </CFormGroup>
            <CFormGroup>
              <CLabel htmlFor="isDelivery">Is Delivery</CLabel>
              <CSelect  custom name="isDelivery" id="isDelivery" value={form.isDelivery} onChange={(e) => handleChange("isDelivery", e.target.value)}>
                    <option value="1" defaultValue>Bisa Delivery</option>
                    <option value="0"> Tidak Bisa Delivery</option>
                  
              </CSelect>
            </CFormGroup>
            <CFormGroup>
              <CLabel htmlFor="branch">Nama Cabang:</CLabel>
              <CInput id="branch" placeholder="" required value={form.branch || ''} onChange={(e) => handleChange("branch", e.target.value)}/>
            </CFormGroup>
            <CFormGroup>
              <CLabel htmlFor="phone">No. Telpon:</CLabel>
              <CInput id="phone" placeholder="" required value={form.phone || ''} onChange={(e) => handleChange("phone", e.target.value)}/>
            </CFormGroup>
            <CFormGroup>
              <CLabel htmlFor="address">Alamat:</CLabel>
              <CInput id="address" placeholder="" required value={form.address || ''} onChange={(e) => handleChange("address", e.target.value)}/>
            </CFormGroup>
            <CFormGroup>
              <CLabel htmlFor="map">Link Slider</CLabel>
              <CInput id="map" placeholder="" required value={form.map || ''} onChange={(e) => handleChange("map", e.target.value)}/>
            </CFormGroup>
            <Dropzone src={form.picture} onChange={(url) => handleChange("picture", url)} onRemove={() => handleChange("picture", "")} />
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
  outletLocation: state.outletLocationReducer,
  global: state.globalReducer,
});
const mapActionToProps = {...outletLocationAction, ...globalAction};
export default connect(mapStateToProps, mapActionToProps)(OutletLocation);