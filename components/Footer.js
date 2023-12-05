import React from 'react';
import { Pressable, View , Text , StyleSheet} from 'react-native';

function Footer() {

    const styles = useStyles();

    return (
    <View style={styles.container}>
      <Pressable style={styles.pressable} >
        <img className="image" src={require("../assets/img/home.svg")} alt="back" />
      </Pressable>
     
        <Pressable
          style={styles.pressable} 
        >
          <img className="image" src={require("../assets/img/fav.svg")} alt="back" />
        </Pressable>
    
      <Pressable
        style={styles.pressable} 
        
      >
          <img className="image" src={require("../assets/img/gallery.svg")} alt="back" />
    
      </Pressable>
    </View>
    );
}

function useStyles(width , height , mobileWidth) {
    return StyleSheet.create({
        container: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '.5rem',
            fontWeight: '100',
            fontSize: '16px',
            overflow: 'hidden',
            justifyContent: 'space-evenly',
            padding: '1rem',
            position: 'fixed',
            width: '100%',
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.452)',
        },
        title: {
            display: 'flex',
            flexDirection: 'column',
            gap: '.5rem',
            justifyContent: 'center',
            alignItems: 'center',
            color: "white"
        } , 
        pressable : {
            display: 'flex',
            flexDirection: "row"
        }
    })
}

export default Footer;