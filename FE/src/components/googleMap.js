import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import {GOOGLE_MAP_API} from '../constants';

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={15}
    defaultCenter={{ lat: -6.170675, lng: 106.899195 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: -6.170675, lng: 106.899195 }} />}
  </GoogleMap>
))

const GoogleMapV2 = (props) => {
  return (
    <MyMapComponent
      googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API}&v=3.exp&libraries=geometry,drawing,places`}
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `400px` }} />}
      mapElement={<div style={{ height: `100%` }} />}
      {...props}
    />
  )
}

export default GoogleMapV2;