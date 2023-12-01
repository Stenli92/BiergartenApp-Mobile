import React , {useState , useEffect} from 'react';
import {View , Text , StyleSheet , Image} from 'react-native';
import WeatherWeekDay from './WeatherWeekDay';


function Weather({mobileWidth}) {

  
    const [ data , setData] = useState();

    const styles = handleStyles(mobileWidth);
          
    const getWeather = async () => {
        const res = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=48.1374&longitude=11.5755&current=temperature_2m,weather_code&daily=weather_code,temperature_2m_max`,
        );
    
        if (res.ok) {
          const data = await res.json();
          setData(data);
        }
      };
    
      useEffect(() => {
        getWeather();
      }, []);

    const  weekdays = data?.daily?.time;
    const temperature = data?.daily?.temperature_2m_max;

    console.log(weekdays);
    console.log(typeof temperature);

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Image style={styles.icon} source={require("../assets/img/sun.svg")} alt="sun" />
                <Text style={styles.title}>Weather</Text>
            </View>
            <View style={styles.currentWeatherContainer}>
               <Text style={styles.city}>Munich</Text>
                
                <Text style={styles.temp}>
                {data?.current?.temperature_2m.toFixed(0)}&#xb0;
                </Text>
            </View>
            <View style={styles.weekDayContainer}>
                    { temperature?.map((element, index) => {
                        if (index >0 && index < 6) {
                            return (
                            <WeatherWeekDay
                                temp={element}
                                day={weekdays[index]}
                                index={index}
                            />
                            );
                        }
                    })}
            </View>
        </View>
    );
}
function handleStyles(mobileWidth){

    return StyleSheet.create({

        container: {
            padding: '3rem',
            margin:'1rem',
            gap: '2rem',
            display: 'flex',
            borderRadius: "8px",
            flexDirection: 'column',
            overflow: 'hidden',
            backgroundColor: 'rgba(0, 0, 0, 0.459)'

        },
        titleContainer : {
            display : 'flex',
            flexDirection: 'row',
            gap: '2rem',
            alignItems: 'center'

        },
        title: {
            color: '#FFF',
            fontSize: '40px',
            fontStyle: 'normal',
            fontWeight: 700,
            lineHeight: 'normal'
        },
        icon : {
            width: '38px',
            height: '36px',
            flexShrink: 0
        },
        currentWeatherContainer : {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems:'center',
            gap: '2rem',
            width: '50%'

        },
        city : {
            color: '#FFF',
            padding: '4.5rem',
            fontSize:'32px'
        },
        temp : {
            color: '#FFF',
            fontSize: '96px',
            fontStyle: 'normal',
            fontWeight: 700,
            lineHeight: 'normal',
            textAlign: 'bottom',
        },
        weekDayContainer: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent:'space-around',
            fontSize: '32px',
            gap: '2rem',
            textAlign: 'center',
            color: '#FFF',
            fontSize: '20px',
            fontStyle: 'normal',
            fontWeight: 700,
            lineHeight: 'normal',
        }
    })
}
export default Weather;