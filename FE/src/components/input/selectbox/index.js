import React from 'react';
import vars from '../../../style/base/_vars.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Select, { components } from 'react-select';

const customStyles = (size) => {
  return{
    input: (provided, state) => {
      return {
        ...provided,
        display: "flex",
        flex: "1 1 auto"
      }
    },
    valueContainer: (provided, state) => {
      delete provided["padding"];
      return{
        ...provided,
        paddingLeft: "8px",
        paddingRight: "8px",
      }
    },
    dropdownIndicator: (provided, state) => {
      delete provided[":hover"];
      return{
        ...provided,
        padding: "0 12px 0 0",
        color: "inherit"
      }
    },
    singleValue: (provided, state) => {
      return{
        ...provided,
        color: "black"
      }
    },
    multiValue: (provided, state) => {
      delete provided["backgroundColor"];
      return{
        ...provided,
        minHeight: "28px",
        border: "1px solid #bec0c2",
        display: "flex",
        alignItems: "center"
      }
    },
    multiValueLabel: (provided, state) => {
      return{
        ...provided,
        fontSize: "13px",
        lineHeight: 1.2,
        color: "black"
      }
    },
    multiValueRemove: (provided, state) => {
      delete provided[":hover"];
      return{
        ...provided,
        paddingLeft: "6px",
        paddingRight: "8px",
      }
    },
    control: (provided, state) => {
      delete provided["minHeight"];
      delete provided["borderColor"];
      delete provided["borderRadius"];
      delete provided["boxShadow"];
      delete provided["&:hover"];
      return{
        ...provided
      }
    }
  }
}

function Control(props){
  var {error,touched} = props;
  const {size,innerProps} = props;
  
  if(error instanceof Object){
    error = error.value;
  }
  if(touched instanceof Object){
    touched = true;
  }

  const isErrorAndTouched = error && touched;
  let sizeClassName = "select__control-customLarge";
  if(size=="md"){
    sizeClassName = "select__control-customMedium";
  }
  const [className, setClassName] = React.useState("select__control-custom " + sizeClassName);
  function onFocus(){
    setClassName("select__control-custom " + (isErrorAndTouched ? "" : "select__control-customFocused ") + sizeClassName);
  }
  function onBlur(){
    setClassName("select__control-custom " + sizeClassName);
  }
  return(
    <div onFocus={onFocus} onBlur={onBlur}>
      <components.Control
        {...props}
        className={className}
        innerProps={{
          ...innerProps,
          "data-error": isErrorAndTouched
        }}
      />
      { error && touched ? (<span data-color="error" data-font="xxs">{error}</span>) : null}
    </div>
  )
}

function DropdownIndicator(props){
  return(
    <components.DropdownIndicator {...props}>
      <FontAwesomeIcon icon="chevron-down" />
    </components.DropdownIndicator>
  )
}
function ValueContainer(props){
  const {size} = props;
  let className = "select__value-container-customLarge";
  if(size=="md"){
    className = "select__value-container-customMedium";
  }
  return(
    <components.ValueContainer {...props} className={className} />
  )
}
function MultiValueRemove(props){
  return(
    <components.MultiValueRemove {...props}>
      <FontAwesomeIcon icon="times" />
    </components.MultiValueRemove>
  )
}
function Input(props){
  const {
    selectProps: {placeholder}
  } = props;
  return(
    <components.Input {...props} className="select__input-custom" placeholder={placeholder} width="100%">
    </components.Input>
  )
}
function Placeholder(props){
  return null
}

function SelectContainer(props){
  const {dataAttribute} = props;
  function onInnerClick(e){
    e.stopPropagation();
  }
  return(
    <components.SelectContainer {...props} innerProps={{onClick:onInnerClick, ...dataAttribute}}>
    </components.SelectContainer>
  )
}

function SelectBox(props){
  const {
    options,
    name,
    onChange,
    onBlur,
    error,
    touched,
    value,
    placeholder,
    isMulti,
    size="lg",
    dataAttribute
  } = props;
  
  return React.useMemo(() => {
    const components = {
      IndicatorSeparator:null,
      SelectContainer: (oldProps) => <SelectContainer {...oldProps} dataAttribute={dataAttribute} />,
      DropdownIndicator,
      Control: (oldProps) => <Control {...oldProps} size={size} error={error} touched={touched} />,
      MultiValueRemove,
      ValueContainer: (oldProps) => <ValueContainer {...oldProps} size={size} />
    }
    if(isMulti){
      components["Input"] = Input;
      components["Placeholder"] = Placeholder;
    }

    return (
      <>
        <Select
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder || ""}
          isMulti={isMulti}
          value={value}
          // menuIsOpen={true}
          components={components}
          styles={customStyles(size)}
          options={options}
          className="basic-multi-select usSelect"
          classNamePrefix="select"
        />
      </>
    )
  }, [options,value,error,touched]);
}

// function SelectBox(props){
//   const {inputProps} = props;
//   return(
//     <div className="selectCustom-container" onClick={(e) => e.stopPropagation()}>
//       <select {...inputProps}>
//         {inputProps.options.map((data)=>{
//           return (
//             <option key={data.value} value={data.value}>{data.label}</option>
//           )
//         })}
//       </select>
//       <FontAwesomeIcon icon="chevron-down" />
//     </div>
//   )
// }

export default SelectBox;