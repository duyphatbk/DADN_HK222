import React, { useState, useEffect, useContext } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Button, ImageBackground } from 'react-native';

const TempHum = (props) => {
    // const context = useContext(MQTTContext)
    const topic = props.typ === "Nhiệt độ" ? 'tracogt/feeds/mb-temp' : 'tracogt/feeds/mb-humid'

    return (
        <ImageBackground
            style={styles}
            source={props.type == "Nhiệt độ" ? require('../assets/temp.png') : require('../assets/humit.png')}>
            <View style={styles.tmp}>
                <View style={styles.label}>
                    <Text style={styles.label}>{props.type}</Text>
                </View>
                <View style={styles.measureWrapper}>
                    <Text style={props.type == "Nhiệt độ" ? styles.temp : styles.humit}>{props.val}</Text>
                    <Text style={styles.measure}>{props.type == "Nhiệt độ" ? "°C" : "%"}</Text>
                </View>
            </View>
        </ImageBackground>
    )
}

export default TempHum;

const styles = StyleSheet.create({
    tmp: {
        height: 140,
        width: 145,
        padding: 30,
        borderRadius: 175,
        margin: 20,
        justifyContent: 'space-evenly',
        flex: 1,
    },
    label: {
        fontSize: 16,
        alignItems: 'flex-start',
    },
    measureWrapper: {
        fontWeight: 700,
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    temp: {
        fontSize: 42,
        fontWeight: 700,
        color: '#CC5F30',
    },
    humit: {
        fontSize: 42,
        fontWeight: 700,
        color: '#1F66CC'
    },
    measure: {
        fontSize: 32,
        fontWeight: 700,
    }
});