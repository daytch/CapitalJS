import React from 'react';
import {public_path} from '../../utils/common';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import GoogleMapV2 from '../googleMap';

function OutletItem(props){
  return(
    <div className="outlet-gridItem">
      <div className="outlet-gridItemInner">
        <div className="gridItemImage">
          <img src={public_path(props.url)}/>
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
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  return(
    <div className="outlet-container">
      <section className="outlet-section">
        <div className="outlet-titleWrapper">
          <h1 className="outlet-title">OUTLET LOCATION</h1>
        </div>
        <div className="outlet-grid">
        <OutletItem name="ANGKE - CENTRAL STORE" address="Jl. Pangeran Tubagus Angke Kav 26 No 5 - 7 Jakarta Barat 11460" phone="(021) 5678 005 / 006" url="/assets/img/outlet-location1.png" />
        <OutletItem name="TAMAN PALEM - BRANCH STORE" address="Jl. Taman Palem Lestari Blok J1 no.1, Tegal Alur, Kalideres, Jakarta Barat 11830" phone="" url="/assets/img/outlet-location2.png" />
        <OutletItem name="BSD - BRANCH STORE" address="Jl. Anggrek Loka No.20, BSD, Tangerang" phone="(021) 5387 193" url="/assets/img/outlet-location3.png" />
        <OutletItem name="BSD - BRANCH STORE" address="Jl. Anggrek Loka No.20, BSD, Tangerang" phone="(021) 5387 193" url="/assets/img/outlet-location3.png" />
        <OutletItem name="ANGKE - CENTRAL STORE" address="Jl. Pangeran Tubagus Angke Kav 26 No 5 - 7 Jakarta Barat 11460" phone="(021) 5678 005 / 006" url="/assets/img/outlet-location1.png" />
        <OutletItem name="TAMAN PALEM - BRANCH STORE" address="Jl. Taman Palem Lestari Blok J1 no.1, Tegal Alur, Kalideres, Jakarta Barat 11830" phone="" url="/assets/img/outlet-location2.png" />
        <OutletItem name="BSD - BRANCH STORE" address="Jl. Anggrek Loka No.20, BSD, Tangerang" phone="(021) 5387 193" url="/assets/img/outlet-location3.png" />
        <OutletItem name="BSD - BRANCH STORE" address="Jl. Anggrek Loka No.20, BSD, Tangerang" phone="(021) 5387 193" url="/assets/img/outlet-location3.png" />
        </div>
        <div className="map-container">
          <GoogleMapV2 isMarkerShown />
        </div>
      </section>
    </div>
  )
}

export default Outlet;