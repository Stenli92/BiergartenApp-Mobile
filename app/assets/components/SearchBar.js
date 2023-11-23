import React, {useState} from 'react'
import {StyleSheet, TextInput, View , TouchableOpacity , Image} from 'react-native';
import { Button } from 'react-native-web';

function SearchBar() {

    const [text, setText] = useState('');

    return (
        <View style={style.container}>
            <TextInput
                style={style.input}
                placeholder="Aumeister"
                onChangeText={newText => setText(newText)}
                defaultValue={text}
            />
            <div style={style.buttonsContainer}>
                <TouchableOpacity style={style.icon} >
                    <Image style={style.icon} source={require('../img/search.svg')} />
                </TouchableOpacity>
                <TouchableOpacity style={style.icon} >
                    <Image style={style.icon} source={require('../img/x.svg')} />
                </TouchableOpacity>
            </div>
        </View>
    );
}


const style = StyleSheet.create({

    buttonsContainer: {
        display: 'flex',
        padding: '1rem',
        justifyContent: 'space-between',
        width: '100%',
        position: 'absolute',
    },
    
    container: {
        zIndex: 1,
        display: 'flex',
        width: '100%',
        position: 'absolute',
        backgroundColor: 'white',
        border: 'none',
        alignContent: 'center',
        justifyContent: 'center'
    },
    input: {
        fontSize: '18px',
        color: 'black',
        padding: '1.5rem',
        marginLeft: '2rem',
        width: '100%'
    },
    icon: {
        height: '27px',
        width: '27px',
        zIndex: 2,
    }
});
export default SearchBar;