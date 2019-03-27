import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';


class LoginHeader extends Component{

    render(){
        return(
            <View>
              <View style={styles.logoContainer}>
                <Image 
                style={styles.logo}
                source={require('../../assets/mfc-logo.png')}/> 
              </View>
              <Text style={styles.title}>Geben Sie unten Ihre Anmeldeinformationen ein</Text>
            </View>
        )
    }
}


const styles = {
    container: {
      flex: 1,
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
    }
  };
export default LoginHeader;