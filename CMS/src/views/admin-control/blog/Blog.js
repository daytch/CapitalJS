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
  CLabel,
  CModal,
  CModalBody,
  CModalHeader,
  CModalTitle,
  CModalFooter
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Dropzone} from '../../../components';
import {blogAction, globalAction} from '../../../redux/actions';
import FormBlog from './FormBlog';

const fields = [
  {
    key: 'no',
    label: "No.",
    _style: { width: '1%'},
    sorter: false,
    filter: false
  },
  { key: 'Title', _style: { width: '80%'} },
  { key: 'MasterStatusID', _style: { width: '1%%'} },
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
  blogCategoryId: "",
  title: "",
  body: "",
  masterStatusId: "",
  headerBlogLink: ""
}

const blogCategoryFields = [
  {
    key: 'no',
    label: "No.",
    _style: { width: '1%'},
    sorter: false,
    filter: false
  },
  { key: 'id', _style: { width: '89%'} },
  {
    key: 'action',
    label: 'Action',
    _style: { width: '10%' },
    sorter: false,
    filter: false
  }
]

const BlogCategoryList = ({griddata, handleUpdate, ...props}) => {
  const [form, setForm] = React.useState([]);
  React.useEffect(() => {
    setForm(griddata.map((v) => ({
      id: v._id,
      name: v.Name
    })))
  }, [griddata])
  const handleChange = (index, value) => {
    form[index].name = value
    setForm([...form])
  }
  return (
    <CDataTable
      items={form}
      fields={blogCategoryFields}
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
        'id': (item, index) => {
          return (
            <td>
              <CInput value={form[index].name} onChange={(e) => handleChange(index, e.target.value)}/>
            </td>
          )
        },
        'action':
          (item, index)=>{
            return (
              <td className="py-2">
                <div className="icon-wrapper btn-primary" onClick={() => handleUpdate(item.id, form[index].name)}>
                  Update
                </div>
              </td>
            )
          }
      }}
    />
  )
}

const Blog = ({
  blog, global, getBlogStatusDropdown, getBlogGridData, createBlog, updateBlog, deleteBlog,
  getBlogCategory, createBlogCategory, updateBlogCategory, deleteBlogCategory, ...props
}) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false)
  const [isFormPage, setIsFormPage] = React.useState(false)
  const [formBlogCategory, setFormBlogCategory] = React.useState("")
  const [form, setForm] = React.useState(DEFAULT_FORM)

  // initial data
  React.useEffect(() => {
    getBlogCategory();
    getBlogStatusDropdown();
    getBlogGridData();
  }, []);

  const handleChange = (attr, val) => {
    setForm({
      ...form,
      [attr]: val
    })
  }
  const handleEdit = (item) => {
    setIsFormPage(true)
    setForm({
      id: item._id,
      blogCategoryId: item.BlogCategoryId,
      title: item.Title,
      body: item.Body,
      masterStatusId: item.MasterStatusID,
      headerBlogLink: item.HeaderBlogLink
    })
  }
  const handleCancel = () => {
    resetForm()
  }
  const handleButtonCreate = () => {
    setIsFormPage(true)
  }
  const resetForm  = () => {
    setForm(DEFAULT_FORM)
    setIsFormPage(false)
  }
  const handleCreate = () => {
    createBlog({
      ...form,
      blogCategoryId: form.blogCategoryId || blog.categories[0]._id,
      masterStatusId: form.masterStatusId || global.blogStatusDropdown[0].id
    }, resetForm)
  }
  const handleUpdate = () => {
    updateBlog(form, resetForm)
  }
  const handleDelete = (id) => {
    let yes = window.confirm("Are you sure to delete this Blog...?");
    if(yes){
      deleteBlog(id)
    }
  }
  const handleUpdateBlogCategory = (id, name) => {
    updateBlogCategory({id, name})
  }
  const handleCreateBlogCategory = () => {
    createBlogCategory({name: formBlogCategory}, () => {
      setFormBlogCategory("")
    })
  }
  const handleShowCategory = () => {
    setIsModalOpen(true)
  }
  return (
    <CRow>
      {
        isFormPage && (
          <CCol xs="12">
            <FormBlog
              id={form.id}
              blogCategoryDropdown={blog.categories}
              blogStatusDropdown={global.blogStatusDropdown}
              blogCategoryId={form.blogCategoryId}
              masterStatusId={form.masterStatusId}
              headerBlogLink={form.headerBlogLink}
              title={form.title}
              body={form.body}
              handleUpdate={handleUpdate}
              handleCreate={handleCreate}
              handleCancel={handleCancel}
              handleChange={handleChange}
            />
          </CCol>
        )
      }
      {
        !isFormPage && (
          <>
            <CCol xs="8">
              <CButton type="button" color="primary" onClick={handleButtonCreate} data-margin-bottom="xs">Create Blog</CButton>
              <CCard>
                <CCardHeader>
                  <strong>List Blog</strong>
                </CCardHeader>
                <CCardBody>
                  <CDataTable
                    items={blog.griddata}
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
                      'Title': (item) => {
                        return (
                          <td>
                            {item.Title}
                          </td>
                        )
                      },
                      'MasterStatusID': (item) => {
                        let status = "";
                        if(global.blogStatusDropdown && global.blogStatusDropdown.length){
                          status = global.blogStatusDropdown.find((v) => v.id==item.MasterStatusID)
                          status = status && status.name
                        }
                        return (
                          <td>
                            {status}
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
                  <strong>Header Blog</strong>
                </CCardHeader>
                <CCardBody>
                  <CFormGroup>
                    <Dropzone src={""} onChange={(url) => handleChange("picture", url)} onRemove={() => handleChange("picture", "")} />
                  </CFormGroup>
                </CCardBody>
                <CCardFooter>
                  <CButton type="button" color="success" onClick={handleUpdate}>Update</CButton>
                </CCardFooter>
              </CCard>
              <CCard>
                <CCardHeader>
                  <strong>Category Blog</strong>
                </CCardHeader>
                <CCardBody>
                  <CFormGroup>
                    <CInput id="blogCategory" placeholder="Blog Category" required value={formBlogCategory} onChange={(e) => setFormBlogCategory(e.target.value)}/>
                  </CFormGroup>
                </CCardBody>
                <CCardFooter>
                  <CButton type="button" color="primary" onClick={handleCreateBlogCategory}>Create</CButton>
                  <CButton type="button" color="secondary" onClick={handleShowCategory}>Show Category List</CButton>
                </CCardFooter>
              </CCard>
            </CCol>
          </>
        )
      }
      <CModal
        show={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        size="lg"
      >
        <CModalHeader closeButton>
          <CModalTitle>Blog Category List</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <BlogCategoryList griddata={blog.categories} handleUpdate={handleUpdateBlogCategory} />
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setIsModalOpen(false)}>Close</CButton>
        </CModalFooter>
      </CModal>
    </CRow>
  )
}

const mapStateToProps = state => ({
  blog: state.blogReducer,
  global: state.globalReducer,
});
const mapActionToProps = {...blogAction, ...globalAction};
export default connect(mapStateToProps, mapActionToProps)(Blog);