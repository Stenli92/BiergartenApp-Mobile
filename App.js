// import {useNavigate}  from 'react-router-dom';
import { StatusBar } from 'expo-status-bar';
import {ImageBackground, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-web';


export default function App() {

  function handleRedirect(){
  }

  return (
    <View style={styles.container} >
      <ImageBackground source={require('/assets/img/home-background.svg')} style={styles.image} resizeMode="cover">
      <Button  onClick={handleRedirect}>Click for Beergarden App</Button>
        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    // alignItems: 'center',
    // justifyContent: 'center',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  }
});
