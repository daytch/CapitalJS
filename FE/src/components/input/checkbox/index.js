import React from 'react';

function Checkbox(props){
  const {
    formik: {touched, error},
    inputProps
  } = props;
  const inputRef = React.createRef();
  function onChangeCheckbox(){
    inputRef.current.click();
  }
  return(
    <span onClick={onChangeCheckbox}>
      <input ref={inputRef} className="checkbox-input" type="checkbox" data-error={error && touched ? true : false} {...props.inputProps} />
      <label className="checkbox-label">{props.label}</label>
    </span>
  )
}

export default Checkbox;