import React, { Component } from 'react';
import { Text, View, Image,Button,TextInput } from 'react-native';
import LoginHeader from './LoginHeader';
import MfcButton from './MfcButton';


class Login extends Component{
        state ={
          email:'',
          password:''
        }
        moveOn=()=>{
          this.props.navigation.navigate('Dashboard');
        };
        handleEmail = (text) => {
          this.setState({ email: text })
        };
        handlePassword = (text) => {
            this.setState({ password: text })
        };
        handleLogin = (email, pass) => {
          console.log('email: ' + email + ' password: ' + pass);
          this.moveOn();
        }
    render(){
        return(
            <View style={styles.container}>
              <LoginHeader/>
              <View style={styles.formContainer}>
              <TextInput 
              onChangeText = {this.handleEmail}
              placeholder= 'E-mail Address' style={styles.input}/>
              <TextInput 
              onChangeText = {this.handlePassword}
              secureTextEntry={true}
              placeholder= 'Password' style={styles.input}/>

              <MfcButton action={() => this.handleLogin(this.state.email, this.state.password)} title='EINLOGGEN'/>
              
              <Text style={styles.ptext}  onPress={() => this.props.navigation.navigate('ResetLogin')}> Passwort vergessen  </Text>
              
              <Text style ={styles.footer}>MY FINANCECOACH @ 2019</Text>
              
            </View>
            </View>
        )
    }
}


const styles = {
    container: {
      flex: 1,
    },
    formContainer:{
      marginTop:100,
      padding:20,
  },
    logoContainer:{
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop:35,
      marginBottom:19
    },
    logo:{
      width:80,
      height:80
    },
    title:{
      opacity:0.4,
      textAlign:'center'
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
      marginTop:142,
      textAlign:'center'
  }
  };
export default Login; 