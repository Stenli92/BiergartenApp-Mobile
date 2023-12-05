import React from 'react';
import {View , StyleSheet , Text} from 'react-native';


function Address({styles}) {
    return (
        <View style={styles.detailsContainer}>
          <View style={styles.titleAndIcon}>
                <Text style={styles.title}><img src={require("/assets/img/address.svg")} style={styles.icon} alt="Address" /> Address / Reservierung</Text>
          </View>
          <Text style={styles.text}>1234 NW Bobcat Lane, St. Robert, MO 65584-5678</Text>
        </View>
      );
}
export default Address;