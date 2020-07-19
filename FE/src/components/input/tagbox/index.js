import React from 'react';
import SelectBox from '../selectbox';

function TagBox(props){
  return <SelectBox {...props} isMulti={true} />
}

export default TagBox;