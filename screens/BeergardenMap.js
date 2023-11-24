import React from 'react';
import { View , StyleSheet , Text } from 'react-native';
// import MapGoogle from "../components/MapGoogle"
import SearchBar from '../components/SearchBar';

function BeergardenMap() {
    return (
        <View style={styles.container} >
            <SearchBar/>
            {/* <MapGoogle/> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1, 
    },
  });

export default BeergardenMap;