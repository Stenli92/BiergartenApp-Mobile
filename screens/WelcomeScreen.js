import React, { useEffect, useState } from 'react';
import {ImageBackground, StyleSheet, View , useWindowDimensions, TouchableOpacity } from 'react-native';

function WelcomeScreen({navigation}) {
  const {width , height} = useWindowDimensions();
  const styles = useStyles(width , height);

  const [image , setImage] = useState()

  useEffect(() => {
    if(width < 768){
      setImage(require('../assets/img/home-mobile.svg'));
    }else{
      setImage(require('../assets/img/home-background.svg'));
    }
  } , [width])

    return (
        <View style={styles.container} >
            <ImageBackground source={image} style={styles.image} resizeMode="cover">
              <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('BeergardenMap')}>
              </TouchableOpacity>
            </ImageBackground>
        </View>
    );
}

function useStyles(width , height) {

  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      
    },
    image: {
      flex: 1,
      justifyContent: 'center',
    }
  });
}

export default WelcomeScreen;