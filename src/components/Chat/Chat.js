import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Chat extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Chats Session</Text>
            </View>
        );
    }
}

export default Chat;