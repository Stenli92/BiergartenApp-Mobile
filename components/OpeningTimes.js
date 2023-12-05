import React from 'react';
import {View  , Text} from 'react-native';


function OpeningTimes({styles}) {
    return (
        <View style={styles.detailsContainer}>
          <View style={styles.titleAndIcon}>
            <Text style={styles.title}><img src={require("/assets/img/opentimes.svg")} alt="open-times" /> Offnungszeiten</Text>
          </View>
          <Text style={styles.text}>12:30 - 16:30</Text>
        </View>
      );
}


export default OpeningTimes;