import React ,{Component} from 'react';
import { View,Text,TextInput } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';

const MfcButton = (props)=>{
   
    return(

        <Button
        raised
        buttonStyle={styles.Button}
        icon={
          <Icon
            name="ios-arrow-dropright-circle"
            size={25}
            color="white"
            style={styles.icon}
          />
        }
        iconRight={true}
        title={props.title}
        onPress={props.action}
      />

    )
}

const styles={
    Button:{
        backgroundColor:'#294C98'
    },
    icon:{
        padding:5
    }
}

export default MfcButton;