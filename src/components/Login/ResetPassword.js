import React, { Component } from 'react';
import { Text, View,TextInput } from 'react-native';
import MfcButton from './MfcButton';
import LoginHeader from './LoginHeader';
import FlexColumn from './../Layouts/FlexColumn';


class ResetPassword extends Component{
 
    render(){
        return(
           <FlexColumn>
             <LoginHeader/>
              <View style={styles.formContainer}>
              <TextInput placeholder= 'E-mail Address' style={styles.input}/>
              <MfcButton action={this.handleClick} title='ÄNDERE DAS PASSWORT'/>
              <Text style={styles.ptext}  onPress={() => this.props.navigation.navigate('Login')}> Anmelden  </Text>
              </View>
              <View>
              <Text style ={styles.footer}>MY FINANCECOACH @ 2019</Text>
              </View>
           </FlexColumn>
        )
    }
}


const styles = {
 
    formContainer:{
      paddingLeft:20,
      paddingRight:20
  },
    input:{
        height:40,
        marginBottom:40,
        borderBottomWidth: 0.5,
        paddingLeft:15
    },
    ptext:{
        color:'#006CE5',
        textAlign:'center',
        marginTop:50
    },
    footer:{
        textAlign:'center'
    }
  };
export default ResetPassword;