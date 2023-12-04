import React from 'react';
import { View , Text , StyleSheet} from 'react-native';


function Comment({comment}) {
    return (
        <View key={comment.id}>
            <View className="comment__name-and-time">
                <Text className="name">{comment?.name}</Text>
                <Text className="time">{comment?.dateAndTime}</Text>
            </View>
            <View className="comment__text">
                <img source={require("/assets/img/comment.svg")} alt="" />
                {comment?.commentText}
            </View>
        </View>
    );
}

export default Comment;