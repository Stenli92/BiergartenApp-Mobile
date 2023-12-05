import React, { useState } from 'react';
import { View , StyleSheet , Text , Pressable} from 'react-native';


const GardenDetails = ({title }) => {

  const [isOpen , setIsOpen] = useState(false);

 
  
  const description = 'Lorem  ipsum dolor sit amet, consectetur rem  ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporrem  ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporrem  ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

  return (
    <View style={styles.container}>
        <View>
          <Text style={styles.title}>Title: {title}</Text>
        </View>
        <Text style={isOpen ? styles.textHidden : styles.text}>{description}</Text>
        <Pressable style={styles.button} onPress={() => setIsOpen(!isOpen)}><Text style={styles.buttonText}>{isOpen ? "Read less..." : "Read more..."}</Text></Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column', 
    gap: '1rem',
    padding: '4rem',
    marginTop: '2rem'
  },
  text: {
    color: 'white',
    WebkitLineClamp: 5,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    display: '-webkit-box',
    fontSize: '24px',
  },
  textHidden: {
    color: 'white',
    fontSize: '24px',
  },
  title: {
    color: '#FFF',
    fontSize: '40px',
    fontStyle: 'Source Sans Pro',
    fontWeight: 700,
    lineHeight: 'normal',
    display:'flex',
    alignItems: 'center'
  },
  buttonText : {
    display : 'flex',
    justifyContent: 'center',
    color: 'white',
    fontSize: '18px',
    fontWeight: 700
  }

});

export default GardenDetails;
