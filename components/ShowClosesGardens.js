import React from 'react';
import { StyleSheet , View , Pressable , Text} from 'react-native';

function ShowClosesGardens({setShowClosest , mobileWidth}) {

    const styles = handleStyles(mobileWidth)

    return (
            <View style= {styles.container}>
                <Pressable onPress={() => setShowClosest(true)}><Text style={styles.buttonText}>Show Closest Gardens</Text></Pressable>
            </View>
    );
}

export default ShowClosesGardens;

function handleStyles(mobileWidth){

   return StyleSheet.create({
        container: {
            display: mobileWidth ? 'flex' : "none",
            bottom: 0,
            justifyContent: 'center',
            position: 'absolute',
            alignSelf: 'center',
            padding: '1rem',
            backgroundColor:'#8b8b8b',
            borderTopLeftRadius: 8 ,
            borderTopRightRadius: 8 ,
        },
        buttonText :{
            color: 'white',
            fontWeight: "bold",
            letterSpacing: '2px',
            fontSize: '1rem',
        }
      });
}
