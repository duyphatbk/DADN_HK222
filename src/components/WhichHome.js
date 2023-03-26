import React from 'react'
import { useState } from 'react';
import { StyleSheet, Text, View, Switch, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icon } from '@rneui/themed';

const WhichHome = (props) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const navigation = useNavigation();

    const details = () => {
        console.log('clicked details')
    }

    const chooseHome = () => {
        // do sth greater
        console.log('choose home') 
        navigation.navigate('Chọn nhà')
    }

    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Chọn phòng')}> 
                <View style={styles.img}>
                    < Image source={require('../assets/home.png')} />
                </View>
                <View style={styles.text}>
                    <Text style={{fontSize: 18, fontWeight: 500}}>{props.name}</Text>
                </View>
        </TouchableOpacity >
    )
}

export default WhichHome;

const styles = StyleSheet.create({
    container: {
        borderRadius: 20,
        marginTop: 20,
        height: 180,
        width: 170,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 0,
    },
    img: {
        backgroundColor: '#ECC5A0',
        // marginRight: 10,
        borderRadius: 20,
        // padding: 20,
        width: 170,
        height: 130,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        
        marginTop: 15,
    }
});