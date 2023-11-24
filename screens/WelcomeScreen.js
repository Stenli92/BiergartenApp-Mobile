import React from 'react';
import {ImageBackground, StyleSheet, Button, View } from 'react-native';

function WelcomeScreen({navigation}) {
    return (
        <View style={styles.container} >
            <ImageBackground source={require('../assets/home-mobile.svg')} style={styles.image} resizeMode="cover">

                    <Button
                      title="Go to BeergardenMap"
                      onPress={() => navigation.navigate('BeergardenMap')}/>
            </ImageBackground>
        </View>
    );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  }
});

export default WelcomeScreen;