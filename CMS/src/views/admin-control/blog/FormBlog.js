import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCol,
  CRow,
  CForm,
  CFormGroup,
  CInput,
  CInputFile,
  CFormText,
  CSelect,
  CLabel
} from '@coreui/react'
import {Editor} from '../../../components';

import {UploadImage} from '../../../services';

const FormBlog = ({
  id,
  blogCategoryDropdown,
  blogStatusDropdown,
  blogCategoryId,
  masterStatusId,
  headerBlogLink,
  title,
  body,
  handleUpdate,
  handleCreate,
  handleCancel,
  handleChange,
  ...props
}) => {
  // const [form, setForm] = React.useState({
  //   id: id,
  //   blogCategoryDropdown: blogCategoryDropdown,
  //   blogStatusDropdown: blogStatusDropdown,
  //   blogCategoryId: blogCategoryId,
  //   masterStatusId: masterStatusId,
  //   headerBlogLink: headerBlogLink,
  //   title: title,
  //   body: body
  // })

  const handleHeaderBlogChange = (e) => {
    if(e.target.files.length) {
      UploadImage(e.target.files[0], (data) => {
        handleChange("headerBlogLink", data);
      })
    }
  }
  return (
    <CRow>
      <CCol xs="12">
        <CCard>
          <CCardBody>
            <CForm action="" method="post" className="form-horizontal">
              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="blogCategory">Blog Category</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CSelect custom name="blogCategory" id="blogCategory" value={blogCategoryId} onChange={(e) => handleChange("blogCategoryId", e.target.value)}>
                    {blogCategoryDropdown.map((v) => {
                      return (
                        <option key={v._id} value={v._id}>{v.Name}</option>
                      )
                    })}
                  </CSelect>
                </CCol>
              </CFormGroup>
              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="title">Judul Blog</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CInput id="title" value={title} onChange={(e) => handleChange("title", e.target.value)} placeholder="Judul Blog..."/>
                </CCol>
              </CFormGroup>
              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="body">Isi Blog</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <Editor
                    data={body}
                    onChange={ ( event, editor ) => {
                      const data = editor.getData();
                      handleChange("body", data);
                    }}
                  />
                </CCol>
              </CFormGroup>
              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="status">Status</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CSelect custom name="status" id="status" value={masterStatusId} onChange={(e) => handleChange("masterStatusId", e.target.value)}>
                    {blogStatusDropdown.map((v) => {
                      return (
                        <option key={v.id} value={v.id}>{v.name}</option>
                      )
                    })}
                  </CSelect>
                </CCol>
              </CFormGroup>
              <CFormGroup row>
                <CCol md="3">
                  <CLabel>Header Blog</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <div>
                    {
                      headerBlogLink && (
                        <div>
                          <img className="preview_image" src={headerBlogLink} />
                        </div>
                      )
                    }
                    <div style={{position: "relative"}}>
                      <CInputFile custom id="headerBlogLink" onChange={(e) => handleHeaderBlogChange(e)}/>
                      <CLabel htmlFor="headerBlogLink" variant="custom-file">
                        Choose file...
                      </CLabel>
                    </div>
                  </div>
                </CCol>
              </CFormGroup>
            </CForm>
          </CCardBody>
          <CCardFooter>
            {
              id ? 
              <CButton type="button" color="success" onClick={handleUpdate}>Update</CButton> :
              <CButton type="button" color="primary" onClick={handleCreate}>Create</CButton>
            }
            <CButton type="button" color="danger" onClick={handleCancel}>Cancel</CButton>
          </CCardFooter>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default FormBlog;