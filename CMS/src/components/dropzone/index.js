import React from 'react'
import {useDropzone} from 'react-dropzone';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {UploadImage} from '../../services';

const Dropzone = ({src, onChange, onRemove, ...props}) => {
  const {acceptedFiles, getRootProps, getInputProps} = useDropzone({
    getFilesFromEvent: event => {
      const files = [];
      const fileList = event.dataTransfer ? event.dataTransfer.files : event.target.files;

      for (var i = 0; i < fileList.length; i++) {
        const file = fileList.item(i);
        
        Object.defineProperty(file, 'myProp', {
          value: true
        });

        files.push(file);
      }
      if(files.length){
        UploadImage(files[0], (url) => {
          onChange(url)
        })
      }

      return files;
    }
  });

  return(
    <div className="dropzone-wrapper">
      <div {...getRootProps({className: 'dropzone'})} data-margin-top="xs">
        {
          src && (
            <div className="dropzone-image-wrapper">
              <img src={src} alt="" style={{width: "100%"}}/>
            </div>
          )
        }
        <input {...getInputProps()} />
        <p><strong>Drag 'n' drop some files here, or click to select files</strong></p>
      </div>
      {
        src &&
        <FontAwesomeIcon icon="times-circle" size="lg" className="dropzone-image-close" onClick={onRemove}/>
      }
    </div>
  )
}


export default Dropzone;