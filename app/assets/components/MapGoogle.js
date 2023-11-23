import React from 'react';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';
import MapStyles from '../styles/js/MapStyles';

const style = {
    width: '100%',
    height: '100vh',
  };

const icon = '..img/beer-marker.svg';

function MapGoogle(props) {
    return (
        <div>
             <Map
            google={window.google}
            zoom={11}
            style={style}
            styles={MapStyles.light}
            initialCenter={{
              lat: 48.137154,
              lng: 11.576124,
             }}
                >
                  <Marker
                    position={{
                      lat: 48.137154,
                      lng: 11.576124,
                    }}
                    
                  />
              </Map>
        </div>
    );
}


export default GoogleApiWrapper({
    apiKey: 'AIzaSyBe8_zk_u23G14yExqfQvfyeZNEDWrlCmU',
  })(MapGoogle);