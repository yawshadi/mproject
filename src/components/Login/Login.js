import React, { Component } from 'react';
import { Text, View,TextInput } from 'react-native';
import  Firebase  from 'firebase';
import LoginHeader from './LoginHeader';
import MfcButton from './MfcButton';
import FlexColumn from './../Layouts/FlexColumn';
import Spinner from './../Layouts/Spinner';


class Login extends Component{
        state ={
          email:'',
          password:'',
          error:'',
          loading:false,
          loggedIn:null
        };

        // before we render the app we call a lifecyle hook
        // and get the current session from the firebase auth
        // with the function below
        componentWillMount(){
          Firebase.auth().onAuthStateChanged((user)=>{
            if(user){
              this.setState({loggedIn:true});
            }else{
              this.setState({loggedIn:false});
            }
          })

        }

        // the login state function  first checks the session from
        // the firebase auth to see if the user is logged in
        // if the user is logged in he is redirected to the dashboard else we show the login form
        loginSate=()=>{
          switch(this.state.loggedIn){
            case true:
            //On case true it means the user has a session 
            //and we just redirects to the dashboard
              this.props.navigation.navigate('Dashboard');
            case false:
            //if the state.loggedIn is false 
            // we return the entire login form for new login
              return (
                  <View style={styles.formContainer}>
                  <Text style={styles.error}>{this.state.error}</Text>
                  <TextInput 
                  onChangeText = {email=>this.setState({email:email})}
                  autoCorrect={false}
                  placeholder= 'E-mail Address' style={styles.input}/>
                  
                  <TextInput 
                  onChangeText = {password=>this.setState({password:password})}
                  secureTextEntry={true}
                  placeholder= 'Password' style={styles.input}/>
                  {this.renderButton()}
                  <Text style={styles.ptext}  onPress={() => this.props.navigation.navigate('ResetLogin')}> Passwort vergessen  </Text> 
                </View>
              )
            default:
              return <Spinner size="large"/>
          }
        }
        
        // handle login function with firebase
        handleLogin = (email, password) => {

          // we set the loading state to true so 
          // we can show the spinner on the view
          // we are now logging in so error is set to false
          this.setState({error:'', loading:true}); 


          // the firebase auth for loggin in with email and password
          // we get the params from the input of the user

          Firebase.auth().signInWithEmailAndPassword(email,password)
          //we call a promise on the function 
          //on success that .then
          //we invoke the onlogin helper function to login the user in
          .then((this.onLogin.bind(this)))
          //on error thats is user doesnot exsist
          // we call the firebase create user with email and password method 
          // to create a new user
          .catch(()=>{
            Firebase.auth().createUserWithEmailAndPassword(email,password)
            //when the user creation is successfull
            //we invoke the helper function onLogin to log the user in
            .then((this.onLogin.bind(this)))    // you can also do .then(()=>{ and put all the this.setstate({ stuff there })})
            //On this catch block, means a user exist but the login credentials are wrong
            // so we call the onLoginFail helper function to inform the user 
            .catch((this.onLoginFail.bind(this)))
          })
         }

         //This is a helper function we created to handle the login success
         //It just sets the state of the app so it can be re rendered
         //and as well redirects the user to the dashboard
         onLogin=()=>{
           this.setState({
             error:'',
             email:'',
             password:'',
             loading:false
           })

           // this is a navigation method created ih the app & navigation component
           //to handle app navigations
           this.props.navigation.navigate('Dashboard');
          }


          // Another helper function to handle 
          //login failure
         onLoginFail=()=>{
          this.setState({
            error:'Authentication Failed',
            loading:false
          })
        }


        //a helper function we call
        //when the login button is clicked
        // so we display a spinner for the user to know something is happening
        renderButton=()=>{
          if(this.state.loading){

            //if the state of the loading is true we display a spinner
            //that means the button has been cliked
            return <Spinner size="small"/>
          }else{
            //ELse we display the button itself
            //meaning button is yet to be clicked
          return(
            <MfcButton action={()=>this.handleLogin(this.state.email,this.state.password)} title='EINLOGGEN'/>
          )
          }
        }

    render(){
        return(
          <FlexColumn>
             <LoginHeader/> 
              {/* 
                we had our login form here
                but to use the loginsate method to determine whether a session 
                is set or not from the firebase auth
                we removed the entire form from here and wrap it in the helper function
                below 
              */}
             {this.loginSate()}

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
  },
  error:{
    color:'red',
    fontSize:20,
    textAlign:'center'
  }
  };
export default Login; 