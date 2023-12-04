import React , {useState} from 'react';
import { View , Text , TextInput , Pressable , StyleSheet} from 'react-native';


function CommentsForm({mobileWidth}) {

    
  const [comment, setComment] = useState('');
  const [name, setName] = useState('');


  const styles = useStyles(mobileWidth);


    return (
        <View style={styles.container}>
          <form className="comment-form" style={styles.form}>
            <label htmlFor="name" style={styles.label}>
              Name
            </label>
            <TextInput
              type="text"
              id="name"
              value={name}
              style={styles.name}
              placeholder="Insert your name here..."
              placeholderTextColor={'#8b8b8b'}
              onChange={(e) => setName(e.currentTarget.value)}
            />
            <label htmlFor="comment" style={styles.label}>
              Leave your comment here
            </label>
            <TextInput
              id="comment"
              name="comment"
              value={comment}
              style={styles.comment}
              placeholder="Insert your name here..."
              placeholderTextColor={'#8b8b8b'}
              onChange={(e) => setComment(e.currentTarget.value)}
            />
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>Comment</Text>
            </Pressable>
          </form>
        </View>
    );
};

function useStyles(mobileWidth) {

    return StyleSheet.create({
        container: {
          display : 'flex',
          flexDirection: 'column',
          padding: '4rem',
        },
        form: {
            display : 'flex',
            flexDirection: 'column', 
            gap: '1.2rem'
        },
        name: {
            color: '#000',
            fontSize:'18px',
            width: mobileWidth ? '100%' : '75%',
            padding: '.7rem',
            borderRadius: '8px',
            backgroundColor : 'white'
        } ,
        comment: {
            color: '#000',
            fontSize: '18px',
            width: mobileWidth ? '100%' : '75%',
            padding: '.7rem',
            paddingTop: 0,
            height: '200px',
            borderRadius: '8px',
            backgroundColor : 'white',
            lineHeight : '18px'
        },
        label : {
            color: '#FFF',
            fontSize: '22px',
            fontWeight: 'bold',
            fontStyle: 'italic',
        },
        placeholder: {
            color: '#8b8b8b',
            fontSize: '13px',
            fontStyle: 'italic',
        } , 
        button : {
            padding: '1.2rem',
            backgroundColor: '#313b31',
            borderRadius: '8px',
            cursor: 'pointer',
            width: 'fit-content',
        } , 
        buttonText : {
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '3px',
            fontSize: '18px',
            color: 'white'
        }
       
    });
}


export default CommentsForm;