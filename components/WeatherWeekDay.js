import React from 'react';
import {View , Text , StyleSheet , Image} from 'react-native';

function WeatherWeekDay({day , temp ,index}) {

    const gsDayNames = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

    const d = new Date(day);
    const dayName = gsDayNames[d.getDay()];

    const styles = handleStyles()

    return (
        <View style={styles.container} key={index}>
            <Text style={styles.day}>{dayName}</Text>
            <Text style={styles.temp}>{temp.toFixed(0)}&#xb0;</Text>
        </View>
    );
}

export default WeatherWeekDay;

function handleStyles(mobileWidth){

    return StyleSheet.create({

        container: {
            display: 'flex',
            padding: '1rem',
            width: '15%',
            gap: '1rem'
        },
        day : {
            fontSize: '26px',
            color: "#FFF",
            whiteSpace: "nowrap"
        },
        temp: {
            color: "#FFF",
            fontSize: '40px',
            whiteSpace: "nowrap"
        }
    
    })}