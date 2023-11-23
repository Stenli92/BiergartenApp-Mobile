import React from 'react';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';
import {Image , StyleSheet} from 'react-native'
import MapStyles from '../styles/js/MapStyles';

const mapStyle = {
    width: '100%',
    height: '100%',
  };


function MapGoogle() {
    return (
        <div>
             <Map
            google={window.google}
            zoom={11}
            style={mapStyle}
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
                    icon={require('/app/assets/img/beer-marker.svg')}
                  />
              </Map>
        </div>
    );
  }
  const style = StyleSheet.create({
  
    marker: {
        height: '20px',
        width: '20px',
    }
    });


export default GoogleApiWrapper({
    apiKey: 'AIzaSyBe8_zk_u23G14yExqfQvfyeZNEDWrlCmU',
  })(MapGoogle);

