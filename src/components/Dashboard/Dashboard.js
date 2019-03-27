import React, { Component } from 'react';
import { View, Text, Image, Button } from 'react-native';
import * as Progress from 'react-native-progress';


class Dashboard extends Component {
    render() {
        return (
            <View>
                <View style={styles.headerContainer}>
                    <Image style={styles.headerImg} source={require('../../assets/header.jpg')} />
                </View>

                <View style={{ alignItems: 'center' }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 4 }}> MY MENTOR</Text>
                    <Text style={{ fontSize: 12, fontStyle: 'italic', marginBottom: 33 }}> Online. Für dich. Für deine Zukunft.</Text>
                    <View style={styles.headerTitle}>
                        <Text style={{ color: '#fff', fontWeight: 'bold' }}> MEIN KURS </Text>
                    </View>
                    <Text> 13 von 72 Aufgaben abgeschlossen </Text>
                    <View style={{ marginTop: 10, marginBottom: 16, width: '80%' }}>
                        <Progress.Bar progress={0.3} width={null} height={13} color='#514343' unfilledColor='#DBD99C' borderWidth={0} />
                    </View>
                </View>

                <View style={styles.headerContent}>
                    <View style={{ width: '40%', marginRight: 18, backgroundColor: 'powderblue' }}>
                        <Button title='Nächste Lektion' />                       
                    </View>

                    <View style={{ width: '40%', backgroundColor: 'skyblue' }} >
                        <Text >DropDown</Text>
                    </View>
                </View>

            </View>
        );
    }
} 

const styles = {
    headerContainer: {
        width: '100%',
        height: 144,
        marginBottom: 27
    },
    headerImg: {
        height: 144,
        width: '100%'
    },
    headerTitle: {
        width: '90%',
        height: 30,
        backgroundColor: '#294C98',
        borderRadius: 3,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 18
    },
    headerContent: {
        width: '90%',
        flexDirection: 'row',
        paddingLeft: 17,
        paddingRight: 17
    }
}

export default Dashboard;