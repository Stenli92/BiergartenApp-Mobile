// import React from 'react';
// import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';
// import {Image , StyleSheet} from 'react-native';

// const styleMap = {
//     width: '100%',
//     height: '100%',
//   };


// function MapGoogle() {
//     return (
//         <div>
//              <Map
//             google={window.google}
//             zoom={11}
//             style={styleMap}
//             styles={mapStyle}
//             initialCenter={{
//               lat: 48.137154,
//               lng: 11.576124,
//              }}
//                 >
//                   <Marker
//                     position={{
//                       lat: 48.137154,
//                       lng: 11.576124,
//                     }}
//                     icon={require('../assets/beer-marker.svg')}
//                   />
//               </Map>
//         </div>
//     );
//   }
//   const style = StyleSheet.create({
  
//     marker: {
//         height: '20px',
//         width: '20px',
//     }
//     });


//     const mapStyle = [
//       {
//         featureType: 'all',
//         elementType: 'labels.text',
//         stylers: [
//           {
//             color: '#878787',
//           },
//         ],
//       },
//       {
//         featureType: 'all',
//         elementType: 'labels.text.stroke',
//         stylers: [
//           {
//             visibility: 'off',
//           },
//         ],
//       },
//       {
//         featureType: 'landscape',
//         elementType: 'all',
//         stylers: [
//           {
//             color: '#f9f5ed',
//           },
//         ],
//       },
//       {
//         featureType: 'road.highway',
//         elementType: 'all',
//         stylers: [
//           {
//             color: '#f5f5f5',
//           },
//         ],
//       },
//       {
//         featureType: 'road.highway',
//         elementType: 'geometry.stroke',
//         stylers: [
//           {
//             color: '#c9c9c9',
//           },
//         ],
//       },
//       {
//         featureType: 'water',
//         elementType: 'all',
//         stylers: [
//           {
//             color: '#aee0f4',
//           },
//         ],
//       },
//     ];
    
// export default GoogleApiWrapper({
//     apiKey: 'AIzaSyBe8_zk_u23G14yExqfQvfyeZNEDWrlCmU',
//   })(MapGoogle);
