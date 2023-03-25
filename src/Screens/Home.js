import React, { createContext, useState, useEffect, useContext } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, Modal, Pressable } from 'react-native';
import TempHum from '../components/TempHum'
import BackTo from '../components/BackTo'
import LightFan from '../components/LightFan'
import AlertDevice from '../components/AlertDevice'
import LockDoor from '../components/LockDoor'
import Paho from 'paho-mqtt'
import uuid from 'react-native-uuid'

function Home() {
    const [temp, setTemp] = useState(0);
    const [humit, setHumit] = useState(0);

    const client = new Paho.Client(
        'io.adafruit.com',
        433,
        '/mqtt',
        uuid.v4().slice(0, 23)
    )

    useEffect(() => {
        client.connect({
            userName: 'tracogt',
            password: 'aio_nCtU79BNZaG27EJhzxolf0nBRp2Y',
            onSuccess: () => {
                console.log('connected')
            },
            onFailure: () => {
                console.log('failed to connect')
            },
            useSSL: true,
        })
    }, [])

    return (
        <View style={styles.container}>

            <BackTo name="Chọn phòng" />

            <View style={styles.content}>
                <TempHum type="Nhiệt độ" val="29" />
                <TempHum type="Độ ẩm" val="50" />
            </View>
            <Text style={styles.title}>
                Điều khiển thiết bị
            </Text>
            <View style={styles.content}>
                <LightFan device="fan" />
                <LightFan device="light" />
            </View>
            <View style={styles.content}>
                <LockDoor />
            </View>
            <View style={styles.content}>
                <AlertDevice device="fire" />
                <AlertDevice device="thef" />
            </View>
        </View>
    );
}

export default Home

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EEEEEE',
        marginTop: 60,
        borderTopRightRadius: 96,
        padding: 20
        // alignItems: 'flex-start',
    },
    content: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        justifyContent: 'space-around'
    },
    title: {
        fontSize: 20,
        fontWeight: 700,
        marginHorizontal: 20,
        marginTop: 25,
    },

});
