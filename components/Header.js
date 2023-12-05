import React from 'react';
import { Pressable, View , StyleSheet , Text } from 'react-native';

function Header({mobileWidth}) {
    const styles = handleStyles(mobileWidth);
    return (
        <View style={styles.container}>
            <Pressable style={styles.titleContainer} >
                <Text style={styles.title}><img  src={require("../assets/img/back.svg")} alt="back" />Back </Text>
            </Pressable>
            <Pressable style={[styles.titleContainer , styles.hidden]} >
                <Text style={styles.title}><img  src={require("../assets/img/home.svg")} alt="home" />Home</Text>
            </Pressable>
            <Pressable style={[styles.titleContainer , styles.hidden]} >
                <Text style={styles.title}><img  src={require("../assets/img/fav.svg")} alt="add-to-favs" /> Add to Favourites</Text>
            </Pressable>
            <Pressable  style={[styles.titleContainer , styles.hidden]} >
                <Text style={styles.title}><img className="image" src={require("../assets/img/gallery.svg")} alt="favs" /> Favourites</Text>
            </Pressable>
        </View>
    );
}

function handleStyles(mobileWidth){
    return StyleSheet.create({
        container: {
            display: 'flex',
            flexDirection: 'row',
            backgroundColor: 'rgba(0, 0, 0, 0.568)',
            padding: '1rem',
            overflow: 'hidden',
            justifyContent: 'space-between',
            transition: 'top 0.2s ease-in-out',
        } ,
        title : {
            display: 'flex',
            alignItems: 'center',
            gap: '.5rem',
            fontWeight: '100',
            fontSize: '16px',
            color : 'white'
        },
        hidden : {
            display : mobileWidth ? "none" : 'flex'
        }
    })
}

export default Header;