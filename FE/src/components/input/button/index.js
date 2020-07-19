import React from 'react';

function Button(props){
  const {buttonStyle, onClick, type, size, dataAttribute} = props;
  const buttonRef = React.createRef();
  function containerOnClick(){
    buttonRef.current.click();
  }
  let btnStyle;
  switch(buttonStyle){
    case "plain":
      btnStyle = "btn-plain";
      break;
    case "primary":
      btnStyle = "btn-primary";
      break;
    case "secondary":
      btnStyle = "btn-secondary";
      break;
    default:
      btnStyle = "btn-primary";
      break;
  }

  let buttonSize;
  switch(size){
    case "sm":
      buttonSize = "btn-small";
      break;
    case "md":
      buttonSize = "btn-medium";
      break;
    case "lg":
      buttonSize = "btn-large";
      break;
    default:
      buttonSize = "btn-large";
      break;
  }

  return(
    <div className={"btn " + btnStyle + " " + buttonSize} onClick={containerOnClick} {...dataAttribute}>
      <button ref={buttonRef} type={type} onClick={onClick}>{props.children}</button>
    </div>
  )
}
export default Button;

function ButtonPlain(props){
  return(
    <Button {...props} style="plain">{props.children}</Button>
  )
}

export {
  ButtonPlain
}