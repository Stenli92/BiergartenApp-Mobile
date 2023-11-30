import  {useState} from 'react'
import {StyleSheet, TextInput, View , TouchableOpacity , Image} from 'react-native';

function SearchBar({mobileWidth}) {

    const style = handleStyles(mobileWidth);


    const [text, setText] = useState('');
    return (
        <View style={style.container}>
            <TextInput
                style={style.input}
                placeholder="Aumeister"
                onChangeText={newText => setText(newText)}
                value={text}
            />
            <View style={style.buttonsContainer}>
                <TouchableOpacity >
                    <Image style={style.icon} source={require('../assets/img/search.svg')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setText('')} >
                    <Image style={style.icon} source={require('../assets/img/x.svg')} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

function handleStyles(mobileWidth){

    return StyleSheet.create({

        buttonsContainer: {
            display: 'flex',
            flexDirection:'row',
            margin: '1vw',
            justifyContent: 'space-between',
            width: mobileWidth ? '98vw' : '78vw',
            position: 'absolute',
        },
        
        container: {
            zIndex: 1,
            display: 'flex',
            width: mobileWidth ? "100%" : '80%',
            position: 'absolute',
            backgroundColor: 'white',
            border: 'none',
            flex: 1,
            right: 0
        },
        input: {
            fontSize: 18,
            color: 'black',
            padding: '1.5rem',
            marginLeft: '2.4rem',
            width: '70%',
            zIndex: 9,
    
        },
        icon: {
            height: '27px',
            width: '27px',
            zIndex: 10,
            margin: '1rem'
        }
    });
}

export default SearchBar;