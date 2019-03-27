import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Firebase from 'firebase';
import Spinner from './src/components/Layouts/Spinner';
import Navigation from './src/components/Navigation/Navigation';

export default class App extends React.Component {
  componentWillMount(){
    Firebase.initializeApp({
        apiKey: "AIzaSyDzLr8G02nlyNHSFAq74aleaFvTd59U564",
        authDomain: "mfclogin-58f78.firebaseapp.com",
        databaseURL: "https://mfclogin-58f78.firebaseio.com",
        projectId: "mfclogin-58f78",
        storageBucket: "mfclogin-58f78.appspot.com",
        messagingSenderId: "553868055243"
      
    });

   
  }

 

  render() {
    return (
      <Navigation />
    );
  }
}

