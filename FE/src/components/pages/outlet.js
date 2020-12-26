import React from 'react';
import {public_path} from '../../utils/common';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import GoogleMapV2 from '../googleMap';
import { useDispatch, useSelector } from 'react-redux';
import { getOutlet } from '../../redux/actions/outletAction';

function OutletItem(props){
  return(
    <div className="outlet-gridItem">
      <div className="outlet-gridItemInner">
        <div className="gridItemImage">
          <img src={props.url}/>
        </div>
        <h3 className="outlet-locationName">{props.name}</h3>
        <p className="outlet-locationAddress">{props.address}</p>
        {
          props.phone && 
          <span className="outlet-phone">Phone: {props.phone}</span>
        }
      </div>
    </div>
  )
}

function Outlet(props){
  const dispatch = useDispatch()
  React.useEffect(() => {
    window.scrollTo(0, 0)
    dispatch(getOutlet())
  }, []);

  const outlet = useSelector(state => state.outletReducer.data)
  return(
    <div className="outlet-container">
      <section className="outlet-section">
        <div className="outlet-titleWrapper">
          <h1 className="outlet-title">OUTLET LOCATION</h1>
        </div>
        <div className="outlet-grid">
          {
            outlet.map(v=>{
              return (
                  <OutletItem name={v.Name} address={v.Address} phone={v.Telephone} url={v.Picture} />
              )
            })
          }
        
        </div>
        <div className="map-container">
          <GoogleMapV2 isMarkerShown />
        </div>
      </section>
    </div>
  )
}

export default Outlet;