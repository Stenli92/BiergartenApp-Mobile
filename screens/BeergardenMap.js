import React ,{useState} from 'react';
import { View , StyleSheet , useWindowDimensions} from 'react-native';
import MapGoogle from "../components/MapGoogle"
import SearchBar from '../components/SearchBar';
import CloseGardens from '../components/CloseGardens';
import ShowClosesGardens from '../components/ShowClosesGardens';

function BeergardenMap({navigation}) {

  const [showClosest, setShowClosest] = useState(true);

    const {width , height} = useWindowDimensions();
    const mobileWidth = (width < 768);

    return (
        <View style={styles.container} >
            <SearchBar mobileWidth={mobileWidth}/>
            <MapGoogle mobileWidth={mobileWidth} navigation={navigation}/>
            <CloseGardens width={width} mobileWidth={mobileWidth} showClosest={showClosest} setShowClosest={setShowClosest} navigation={navigation}/>
            <ShowClosesGardens mobileWidth={mobileWidth} setShowClosest={setShowClosest}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1, 
    },
  });

export default BeergardenMap;