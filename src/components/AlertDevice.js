import React from 'react'
import { useState } from 'react';
import { StyleSheet, Text, View, Switch, TouchableOpacity, Image } from 'react-native';
import { Icon } from '@rneui/themed';
import MQTTService from '../core/services/MQTTService'

const AlertDevice = (props) => {
    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => {
        isEnabled == true ? MQTTService.setValue('tracogt/feeds/bbc-led', 0) : MQTTService.setValue('tracogt/feeds/bbc-led', 1)
        setIsEnabled(previousState => !previousState);
    }

    const details = () => {
        console.log('clicked details')
    }
    return (
        <View style={props.device == "fire" ? [styles.container, styles.fire] : [styles.container, styles.thef]}>
            <Text style={styles.label}>{props.device == "fire" ? "Báo cháy" : "Báo trộm"}</Text>
            <TouchableOpacity
                style={styles.btnWrap}
                onPress={details}>
                <View style={styles.img}>
                    {
                        props.device == "fire" ?
                            < Image source={require('../assets/fire_alert.png')} />
                            : <Image source={require('../assets/thef_alert.png')} />
                    }
                </View>

                <View style={styles.icon}>
                    <Icon
                        name='doubleright'
                        type='antdesign'
                        color='#363636'
                    />
                </View>
            </TouchableOpacity >
            <View style={styles.btnWrap}>
                {isEnabled ? <Text style={styles.state}>BẬT</Text>
                    : <Text style={styles.state}>TẮT</Text>}

                <Switch
                    style={styles.switch}
                    trackColor={{ false: '#FFA899', true: '#C9EA6C' }}
                    thumbColor={isEnabled ? '#fff' : '#1A1A1A'}
                    ios_backgroundColor="#FFA899"
                    onValueChange={toggleSwitch}
                    value={isEnabled} />
            </View>
        </View>
    )
}

export default AlertDevice;

const styles = StyleSheet.create({
    container: {
        borderRadius: 20,
        marginVertical: 20,
        height: 260,
        justifyContent: 'space-evenly'
    },
    fire: {
        backgroundColor: '#FBC0AD',
    },
    thef: {
        backgroundColor: '#C2D1F5',
    },
    btnWrap: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    img: {
        backgroundColor: '#fff',
        marginRight: 10,
        margin: 10,
        borderRadius: 10,
        padding: 20,
        width: 100,
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        fontWeight: 500,
        paddingRight: 10
    },
    switch: {
        transform: [{ scale: 1.4 }],
        marginBottom: 10
    },
    state: {
        fontSize: 23,
        fontWeight: 500,
    },
    label: {
        fontSize: 20,
        fontWeight: 500,
        paddingTop: 10,
        paddingLeft: 10
    }
});