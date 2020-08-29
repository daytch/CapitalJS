import React from 'react';
import {
  TheToaster
} from '../../containers/index'

const withToaster = (Component) => {
  const NewComponent = (props) => {
    return (
      <>
        <TheToaster/>
        <Component {...props}/>
      </>
    )
  }
  return NewComponent
}

export default withToaster;