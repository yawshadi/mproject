import React, { Component } from 'react';

import { 
    createSwitchNavigator, 
    createAppContainer, 
    createBottomTabNavigator, 
    createStackNavigator, createDrawerNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import Login from '../Login/Login';
import Dashboard from '../Dashboard/Dashboard';
import ChatScreen from '../Chat/Chat';
import CalendarScreen from '../Calendar/Calendar';
import AccountScreen from '../Account/Account';
import ResetPasswordScreen from '../Account/ResetPassword';
import ResetPassword from '../Login/ResetPassword';

class Navigation extends Component {
    render() {
        return (<AppContainer />);
    }
} 

export default Navigation;

const CourseStack = createStackNavigator({
    Account: { 
        screen : Dashboard 
    }
});


const AccountStack = createStackNavigator({
    AccountNav: {
        screen: AccountScreen 
    }
}, {
    defaultNavigationOptions: ({ navigation }) => {
        return {
            headerLeft: (
                <Icon name="ios-menu" style={{ paddingLeft: 12 }} size={30} onPress={() => navigation.openDrawer()} />
            )
        };
    }
});

const AccountDrawer = createDrawerNavigator({
    Account: {
        screen: AccountStack
    },
    ResetPassword: {
        screen: ResetPasswordScreen
    }
});

const DashboardTabNavigator = createBottomTabNavigator({
    MeinKurs: { screen: CourseStack,
    navigationOptions: {
        tabBarLabel: 'Mein Kurs',
        tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-document" size={24} color={tintColor} />
        )
    } },
    Chat: { screen: ChatScreen,
        navigationOptions: {
            tabBarLabel: 'Chat',
            tabBarIcon: ({ tintColor }) => (
                <Icon name="ios-chatboxes" size={24} color={tintColor} />
            )
        } },
    Kalendar: { screen: CalendarScreen,
        navigationOptions: {
            tabBarLabel: 'Kalendar',
            tabBarIcon: ({ tintColor }) => (
                <Icon name="ios-calendar" size={24} color={tintColor} />
            )
        } },
    Account: { screen: AccountDrawer,
        navigationOptions: {
            tabBarLabel: 'Account',
            tabBarIcon: ({ tintColor }) => (
                <Icon name="ios-settings" size={24} color={tintColor} />
            )
        } }
});

const AppSwitchNavigator = createSwitchNavigator({
    Login: { screen: Login },
    ResetLogin:{screen:ResetPassword},
    Dashboard: { screen: DashboardTabNavigator }
});

const AppContainer = createAppContainer(AppSwitchNavigator);