import React from 'react';
import {  StyleSheet, View } from 'react-native';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';

function MapGarden({mobileWidth}) {

    const styles = handleStyles(mobileWidth);

    return (

            <Map
            containerStyle={styles.containerStyles}
            styles={mapStyle.light}
            style={styles.mapStyle}
            google={window.google}
            zoom={14}
            center={{
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
            />
            </Map>
      );
}
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
    })(MapGarden);
    
    function handleStyles(mobileWidth) {
        return StyleSheet.create({
            
            containerStyles : {
                width: '45%',
                height: '40%',
            },
            container : {
                display : mobileWidth ? 'none' : "flex"
            }
        }
    )
}