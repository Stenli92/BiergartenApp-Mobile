import React from 'react';
import { View , Text , StyleSheet , Image} from 'react-native';


function Comment({comment , mobileWidth}) {

    const styles = useStyles(mobileWidth);

    return (
        <View  style={styles.container}>
            <View style={styles.nameAndTimeContainer}>
                <Text style={styles.nameAndDateText}>{comment?.name}</Text>
                <Text style={[styles.nameAndDateText , {color : '#8b8b8b'}]}>{comment?.dateAndTime}</Text>
            </View>
            <View style={styles.commentTextContainer}>
                <img style={styles.image} src={require('../assets/img/comment.svg')} alt="comment image" />
                <Text style={styles.commentText} >{comment?.commentText}</Text>
            </View>
        </View>
    );
}

function useStyles(mobileWidth) {

    return StyleSheet.create({
        container: {
            display: 'flex',
            flexDirection: 'column',
            width: mobileWidth ? '100%' : '75%',
            backgroundColor: 'rgba(0, 0, 0, 0.651)',
            borderRadius: '8px',
        },
        nameAndTimeContainer : {
            padding: '1rem',
            display: 'flex',
            flexDirection: 'row',
            width: 'auto',
            gap: '1rem',
        },
        nameAndDateText : {
            color: '#FFF',
            fontSize: '16px',
            fontStyle: 'italic',
        },
        commentTextContainer : {
            display: 'flex',
            flexDirection: 'row',
            paddingLeft: '26px',
            paddingBottom: '16px',
            minHeight: '20px',
            marginTop: '10px',
            gap: '1rem',
        },
        commentText: {
            fontSize: '18px',
            color: '#8b8b8b',
        } ,
        image: {
            height: '20px'
        }
    });
}

export default Comment;