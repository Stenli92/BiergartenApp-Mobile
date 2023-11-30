import React  from 'react';
import {View , Text} from 'react-native';


function Weather() {

  
          
          fetch('https://api.open-meteo.com/v1/forecast?latitude=48.1374&longitude=11.5755&current=temperature_2m,weather_code&daily=weather_code,temperature_2m_max')
          .then(response => response.json())
          .then(data => console.log(data))
          .catch(error => console.error(error));


    return (
        <View>
            <View className="weather__title">
                <img src="/img/sun.svg" alt="sun" />
                <Text>Weather</Text>
            </View>
            <View className="weather__current">
               <Text className="city">Munich</Text>
                
                
                <Text className="weather__current--temp">
                    &#xb0;
                </Text>
            </View>
        </View>
    );
}

export default Weather;