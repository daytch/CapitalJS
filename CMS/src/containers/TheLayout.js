import React from 'react'
import {
  TheContent,
  TheSidebar,
  TheFooter,
  TheHeader,
  TheToaster
} from './index'

const TheLayout = () => {

  return (
    <div className="c-app c-default-layout">
      <TheSidebar/>
      <div className="c-wrapper">
        <TheHeader/>
        {/* <TheToaster/> */}
        <div className="c-body">
          <TheContent/>
        </div>
        <TheFooter/>
      </div>
    </div>
  )
}

export default TheLayout
