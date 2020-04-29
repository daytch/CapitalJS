import React from 'react';

function TextArea(props){
  const {
    touched,
    error,
    size,
    placeholder,
    onChange,
    onBlur,
    name,
    value
  } = props;
  const textAreaSize = size || "lg";
  const mapSizeToClassname = {
    "md": "textArea-medium",
    "lg": "textArea-large"
  }

  return(
    <div>
      <textarea
        rows="4"
        name={name}
        placeholder={placeholder}
        className="textarea"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        data-error={error && touched ? true : false}
      />
      { error && touched ? (<span data-color="error" data-font="xxs">{error}</span>) : null}
    </div>
  )
}

export default TextArea;