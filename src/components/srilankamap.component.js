import React, {Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export default class SriLankaMap extends Component {
  render() {
    return (
        <Map
        item
        xs = { 12 }
        // style = { style }
        google = { this.props.google }
        onClick = { this.onMapClick }
        zoom = { 14 }
        initialCenter = {{ lat: 7.8731, lng: -80.7718 }}
      >
        <Marker
          onClick = { this.onMarkerClick }
          title = { 'Changing Colors Garage' }
          position = {{ lat: 39.648209, lng: -75.711185 }}
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