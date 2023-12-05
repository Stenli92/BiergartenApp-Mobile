import React , {useState , useEffect} from 'react';
import { View, StyleSheet , ImageBackground , useWindowDimensions} from 'react-native';
import GardenDetails from '../components/GardenDetails';
import Weather from '../components/Weather';
import CommentsForm from '../components/CommentsForm';
import CommentList from '../components/CommentList';
import MapGarden from '../components/MapGarden';
import Address from '../components/Address';
import OpeningTimes from '../components/OpeningTimes';
import Footer from '../components/Footer';
import Header from '../components/Header';

function BiergardenDetails({route}) {

    const [image , setImage] = useState()

    const {width , height} = useWindowDimensions();
    const mobileWidth = (width < 768);
    
    const {title , id , distance} = route.params; 
    const styles = useStyles(width , height , mobileWidth);
    
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
                <Header mobileWidth={mobileWidth}/>
                {mobileWidth ? '' : <MapGarden />}
                <GardenDetails title={title} id={id} distance={distance}/>
                <Address styles={styles} />
                <OpeningTimes styles={styles}/>
                <Weather mobileWidth={mobileWidth}/>
                <CommentsForm mobileWidth={mobileWidth}></CommentsForm>
                <CommentList mobileWidth={mobileWidth}></CommentList>
            </ImageBackground>
            {mobileWidth ? <Footer/> : ''}
        </View>
    );
}

function useStyles(width , height , mobileWidth) {

    return StyleSheet.create({
        container: {
          flex: 1, 
        },
        image : {
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover'
        },
        detailsContainer : {
          padding: '4rem',
          paddingTop: 0,
          minHeight: '180px',
          gap: '1rem'
      },
      titleAndIcon : {
          transform : 'translateX(-3rem)'
      },
      text : {
          color: 'white',
          fontSize: '24px',
          lineHeight: '24px',
          textAlign: 'left'
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
      icon : {
          height: '40px',
      },
    });
}

export default BiergardenDetails;