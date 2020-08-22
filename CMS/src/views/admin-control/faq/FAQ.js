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
  CSelect,
  CFormGroup,
  CLabel
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {useDropzone} from 'react-dropzone';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {outletLocationAction, globalAction} from '../../../redux/actions';
import {Dropzone} from '../../../components';
import {faqAction} from '../../../redux/actions';
import {Editor} from '../../../components';

const fields = [
  {
    key: 'no',
    label: "No.",
    _style: { width: '1%'},
    sorter: false,
    filter: false
  },
  { key: 'question', _style: { width: '80%'} },
  { key: 'sequence', _style: { width: '1%%'} },
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
  sequence: "",
  question: "",
  answer: ""
}

const FAQ = ({faq, getFAQGridData, createFAQ, updateFAQ, deleteFAQ, ...props}) => {
  const [create, setCreate] = React.useState(true)
  const [form, setForm] = React.useState(DEFAULT_FORM)

  // initial data
  React.useEffect(() => {
    getFAQGridData();
  }, []);

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
      sequence: item.sequence,
      question: item.question,
      answer: item.answer
    })
  }
  const handleCancel = () => {
    setCreate(true)
    resetForm()
  }
  const resetForm  = () => {
    setForm(DEFAULT_FORM)
  }
  const handleCreate = () => {
    createFAQ(form, resetForm)
  }
  const handleUpdate = () => {
    setCreate(true)
    updateFAQ(form, resetForm)
  }
  const handleDelete = (id) => {
    let yes = window.confirm("Are you sure to delete this FAQ...?");
    if(yes){
      deleteFAQ(id)
    }
  }
  return (
    <CRow>
      <CCol xs="8">
        <CCard>
          <CCardHeader>
            <strong>List FAQ</strong>
          </CCardHeader>
          <CCardBody className="faq_table">
            <CDataTable
              items={faq.griddata}
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
                'question': (item) => {
                  return (
                    <td>
                      <strong>{item.question}</strong>
                      <br/>
                      <div dangerouslySetInnerHTML={{__html: item.answer}} />
                    </td>
                  )
                },
                'sequence': (item) => {
                  return (
                    <td>
                      {item.sequence}
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
                        <div className="icon-wrapper btn-danger" onClick={() => handleDelete(item._id)}>
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
            <strong>{create ? "Add FAQ" : "Update FAQ"}</strong>
          </CCardHeader>
          <CCardBody>
            <CFormGroup>
              <CLabel htmlFor="sequence">FAQ Number List:</CLabel>
              <CInput id="sequence" placeholder="" required value={form.sequence} onChange={(e) => handleChange("sequence", e.target.value)}/>
            </CFormGroup>
            <CFormGroup>
              <CLabel htmlFor="question">Pertanyaan:</CLabel>
              <CInput id="question" placeholder="" required value={form.question} onChange={(e) => handleChange("question", e.target.value)}/>
            </CFormGroup>
            <CFormGroup>
              <Editor
                data={form.answer}
                onChange={ ( event, editor ) => {
                  const data = editor.getData();
                  handleChange("answer", data);
                }}
              />
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
  faq: state.faqReducer
});
const mapActionToProps = {...faqAction};
export default connect(mapStateToProps, mapActionToProps)(FAQ);