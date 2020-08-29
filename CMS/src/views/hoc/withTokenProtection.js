import React from 'react';
import history from '../../utils/history';

const withTokenProtection = (Component) => {
  if(!localStorage.getItem("idToken")){
    history.push("/login")
  }
  return Component
}

export default withTokenProtection;