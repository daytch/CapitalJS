import React from 'react'
import {connect} from 'react-redux';
import {
  CToaster,
  CToast,
  CToastHeader,
  CToastBody
} from '@coreui/react'

const TheToaster = ({global, ...props}) => {
  return (
    <div>
      {
        global.data.message &&
        <CToaster
          key={global.counter}
          position={global.data.position}
          className={"toaster-" + global.data.type}
        >
          <CToast
            show={true}
            autohide={global.data.autoHide}
            fade={true}
          >
            <CToastHeader closeButton={global.data.closeButton}>
              {global.data.title}
            </CToastHeader>
            <CToastBody>
              {global.data.message}
            </CToastBody>
          </CToast>
        </CToaster>
      }
    </div>
  )
}

const mapStateToProps = state => ({
  global: state.globalReducer
});
const mapActionToProps = {};
export default connect(mapStateToProps, mapActionToProps)(TheToaster);