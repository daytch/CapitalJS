import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function Toast(props){
  const {message, icon} = props;
  return (
    <div className="usToast-container">
      <span className="usToast-icon"><FontAwesomeIcon icon={icon}/></span>
      <span className="usToast-message">{message}</span>
    </div>
  )
}

function ToastSuccess(props){
  return <Toast {...props} icon="check-circle"/>
}

function ToastError(props){
  return <Toast {...props} icon="times-circle"/>
}

function ToastInfo(props){
  return <Toast {...props} icon="info-circle"/>
}

function ToastWarning(props){
  return <Toast {...props} icon="exclamation-circle"/>
}

export {
  ToastError,
  ToastSuccess,
  ToastInfo,
  ToastWarning,
}