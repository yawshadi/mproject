import React from 'react';
import {  View } from 'react-native';



FlexColumn = (props)=>{
      
        return(
          <View style={styles.container}>
            {props.children}
          </View>
        )
    
}


const styles = {
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-between',
      marginTop:20,
      marginBottom:20
        }
  };

export default FlexColumn; 