import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '400px',
  height: '300px'
  
};

export class Mapa extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={
          {
            lat: -6.886944257322147,
            lng: -38.557521304831454
          }
        }
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCdjJLgiXQaPIccPfH2ZoRt3eZilZwS3Kw&callback'
})(Mapa);