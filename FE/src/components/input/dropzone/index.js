import React from 'react';
import {useDropzone} from 'react-dropzone';
import '../../../style/component/_dropzone.scss';

function Dropzone(props){
  const {onDrop} = props;
  const {getRootProps, getInputProps} = useDropzone({
    accept: 'image/*',
    onDrop: onDrop
  });

  return (
    <div className="usDropzone-container">
      <div {...getRootProps({className: 'usDropzone'})}>
        <input {...getInputProps()} />
        <div data-margin-top="sm" data-margin-bottom="sm">Drag 'n' drop some files here, or click to select files</div>
      </div>
    </div>
  );
}

export default Dropzone;