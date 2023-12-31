import React , {useState , useEffect} from 'react';
import { View, StyleSheet , ImageBackground , useWindowDimensions} from 'react-native';
import GardenDetails from '../components/GardenDetails';
import Weather from '../components/Weather';

function BiergardenDetails({route}) {

    const [image , setImage] = useState()

    const {width , height} = useWindowDimensions();
    const styles = useStyles(width , height);

    const {title , id , distance} = route.params; 

    useEffect(() => {
        if(width < 768){
          setImage(require('../assets/img/mobile-background.svg'));
        }else{
          setImage(require('../assets/img/garden-background.svg'));
        }
      } , [width])

    return (
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.image} resizeMode="cover">
                <GardenDetails  title={title} id={id} distance={distance}/>
                <Weather/>
            </ImageBackground>
        </View>
    );
}

function useStyles(width , height) {

    return StyleSheet.create({
        container: {
          flex: 1, 
        },
        image : {
            height: '100vh',
        }
    });
}

export default BiergardenDetails;