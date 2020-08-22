import React from 'react'
import {connect} from 'react-redux';
import {
  CToaster,
  CToast,
  CToastHeader,
  CToastBody
} from '@coreui/react'
import {globalAction} from '../redux/actions';

const areEqual = (prevProps, nextProps) => {
  var equal = prevProps.global.counter === nextProps.global.counter;
  return equal;
}

const TheToaster = React.memo(({global, ...props}) => {
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
}, areEqual)

const mapStateToProps = state => ({
  global: state.globalReducer
});
const mapActionToProps = globalAction;
export default connect(mapStateToProps, mapActionToProps)(TheToaster);