import React, { createContext, useState, useEffect, useContext } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, Modal, Pressable, ScrollView, ToastAndroid } from 'react-native';
import TempHum from '../components/TempHum'
import BackTo from '../components/BackTo'
import LightFan from '../components/LightFan'
import AlertDevice from '../components/AlertDevice'
import LockDoor from '../components/LockDoor'
import Paho from 'paho-mqtt'
import uuid from 'react-native-uuid'
import { TouchableOpacity } from 'react-native-gesture-handler';
import MQTTService from '../core/services/MQTTService'
function Home() {

    return (
        <ScrollView
            contentContainerStyle={{
                flexGrow: 1
            }}
            keyboardShouldPersistTaps='handled'
        >
            <View style={styles.container}>

                <BackTo name="Chọn phòng" />
                
                <View style={styles.content}>
                     <TempHum type="Nhiệt độ" val="29" /> 
                     <TempHum type="Độ ẩm" val="80" /> 
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
        </ScrollView>
    );
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EEEEEE',
        marginTop: 60,
        borderTopRightRadius: 96,
        padding: 20
        // alignItems: 'flex-start',

    },
    content: {
        // flex: 1,
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
