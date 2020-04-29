import React from 'react';
import 'react-confirm-alert/src/react-confirm-alert.css';
import {ButtonPlain} from '../button';

function ConfirmationDialog(props){
  const { onClose, onNegative, onPositive, title, description, negativeText, positiveText } = props;
  function onNegativeClick(e){
    e.stopPropagation();
    if(onNegative){
      onNegative();
    }
    onClose();
  }
  function onPositiveClick(e){
    e.stopPropagation();
    if(onPositive){
      onPositive();
    }
    onClose();
  }
  return(
    <div className='confirmationDialog'>
      <h1>{title}</h1>
      <p>{description}</p>
      <div className="confirmationDialog-buttonContainer">
        <ButtonPlain buttonStyle="plain" onClick={onNegativeClick}>{negativeText}</ButtonPlain>
        <ButtonPlain buttonStyle="plain" onClick={onPositiveClick}>{positiveText}</ButtonPlain>
      </div>
    </div>
  )
}
export default ConfirmationDialog;