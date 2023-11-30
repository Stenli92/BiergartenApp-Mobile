import React from 'react';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';

import {View , StyleSheet} from 'react-native';

const styleMap = {
    width: '100%',
    height: '100%',
  };


function MapGoogle({navigation}) {
    return (
        
             <Map
            google={window.google}
            zoom={11}
            style={styleMap}
            styles={mapStyle}
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
                    icon={require('../assets/img/beer-marker.svg')}
                    onClick={() => navigation.navigate('BiergardenDetails' ,  {title : "Marker Title " , id: "Marker ID", distance: "Marker Distance"}) }
                  />
              </Map>
       
    );
  }
  const style = StyleSheet.create({
  
    marker: {
        height: '20px',
        width: '20px',
    }
    });


    const mapStyle = [
      {
        featureType: 'all',
        elementType: 'labels.text',
        stylers: [
          {
            color: '#878787',
          },
        ],
      },
      {
        featureType: 'all',
        elementType: 'labels.text.stroke',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'landscape',
        elementType: 'all',
        stylers: [
          {
            color: '#f9f5ed',
          },
        ],
      },
      {
        featureType: 'road.highway',
        elementType: 'all',
        stylers: [
          {
            color: '#f5f5f5',
          },
        ],
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [
          {
            color: '#c9c9c9',
          },
        ],
      },
      {
        featureType: 'water',
        elementType: 'all',
        stylers: [
          {
            color: '#aee0f4',
          },
        ],
      },
    ];
    
export default GoogleApiWrapper({
    apiKey: 'AIzaSyBe8_zk_u23G14yExqfQvfyeZNEDWrlCmU',
  })(MapGoogle);
