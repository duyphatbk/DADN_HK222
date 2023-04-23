import CheckBox from 'react-native-check-box'
import { ScreenHeight, ScreenWidth } from '@rneui/base';
import React, { createContext, useState, useContext } from 'react';
import { useTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StyleSheet, Text, View, SafeAreaView, Button, Image, TextInput, TouchableOpacity } from 'react-native';
import WhichHome from '../components/WhichHome';

const Stack = createNativeStackNavigator();

function ChooseHome({navigation}) {
    const homelist = [
        {
            id: 1,
            name: 'Nhà 1',
        },
        {
            id: 2,
            name: 'Nhà 2',
        },
        {
            id: 3,
            name: 'Nhà 3',
        }
    ]

    return (
        <View style={styles.container}>
            <View style={styles.logo}>
                <Image source={require('../assets/logo.png')} />
            </View>

            <View style={styles.content}>
                <Text style={styles.title}>RABBIT'S</Text>
                <Text style={styles.title}>SMART HOME</Text>
                <View style={styles.homelist}>
                    {homelist.map((item, idx) => <WhichHome name={item.name} key={idx}/>)}
                </View>
            </View>
        </View>
    );
}

export default ChooseHome

const styles = StyleSheet.create({
    container: {
        // minHeight: ScreenY,
    },
    logo: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 55
    },
    content: {
        minHeight: 600,
        backgroundColor: '#EEEEEE',
        // marginTop: 160,
        paddingTop: 30,
        paddingHorizontal: 30,
        borderTopRightRadius: 60,
    },
    title: {
        fontSize: 38,
        fontWeight: 900,
        color: '#2C2C2C',
        // marginTop: 25,
    },
    homelist: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginBottom: 30,
    }
});
