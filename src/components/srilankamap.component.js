import React, {Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

//Map Component
export class SriLankaMap extends Component {
  render() {
    return (
        <Map
        item
        xs = { 12 }
        // style = { style }
        google = { this.props.google }
        onClick = { this.onMapClick }
        zoom = { 7 }
        initialCenter = {{ lat: 6.927079, lng: 79.861244 }}
      >
        <Marker
          onClick = { this.onMarkerClick }
          title = { 'Changing Colors Garage' }
          position = {{ lat: 6.927079, lng: 79.861244 }}
          name = { 'Changing Colors Garage' }
        />
        <InfoWindow
          // marker = { this.state.activeMarker }
          // visible = { this.state.showingInfoWindow }
        >
        </InfoWindow>
      </Map>
    //   <Map google={this.props.google} zoom={14}>

    //     <Marker onClick={this.onMarkerClick}
    //             name={'Current location'} />

    //     <InfoWindow onClose={this.onInfoWindowClose}>
    //         <div>
    //           <h2>Sri Lanka Map</h2>
    //         </div>
    //     </InfoWindow>
    //   </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyC5e8t7mEesa2KaYqJfOQesagQjcTV9fdA'
})(SriLankaMap);