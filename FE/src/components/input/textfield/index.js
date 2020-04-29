import React from 'react';

function TextField(props){
  const {
    formik: {touched, error},
    size,
    inputProps
  } = props;
  const textFieldSize = size || "lg";
  const mapSizeToClassname = {
    "md": "textField-medium",
    "lg": "textField-large"
  }

  return(
    <div>
      <input type="text" className={"textField " + mapSizeToClassname[textFieldSize]} data-error={error && touched ? true : false} {...inputProps} />
      { error && touched ? (<span data-color="error" data-font="xxs">{error}</span>) : null}
    </div>
  )
}

export default TextField;