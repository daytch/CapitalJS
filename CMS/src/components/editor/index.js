import React from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from 'ckeditor5/packages/ckeditor5-build-classic/build/ckeditor';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {URL} from '../../constants';
import UploadAdapter from './UploadAdapter';

// ClassicEditor.builtinPlugins.map( plugin => console.log(plugin.pluginName) );
// console.log(ClassicEditor)

const editorConfiguration = {
  ckfinder: {
    uploadUrl: URL.UPLOAD_IMAGE
  }
};

const Editor = ({onChange, ...props}) => {
  const focus = React.useRef(false);
  function handleFocus(){
    focus.current = true;
  }
  function handleBlur(){
    focus.current = false;
  }
  return (
    <CKEditor
      editor={ ClassicEditor }
      config={editorConfiguration}
      onInit={ editor => {
        editor.plugins.get("FileRepository").createUploadAdapter = function(loader) {
          return new UploadAdapter(loader);
        };
      } }
      onFocus={handleFocus}
      onBlur={handleBlur}
      onChange={(event, editor) => {
        if(focus.current){
          onChange(event, editor);
        }
      }}
      {...props}
    />
  )
}

export default Editor;