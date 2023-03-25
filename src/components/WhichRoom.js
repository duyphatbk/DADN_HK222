import React from 'react'
import { useState } from 'react';
import { StyleSheet, Text, View, Switch, TouchableOpacity, Image } from 'react-native';
import { Icon } from '@rneui/themed';

const WhichRoom = (props) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const details = () => {
        console.log('clicked details')
    }
    return (
        <TouchableOpacity style={styles.container} onPress={details}>
            <View style={styles.img}>
                <Icon
                    name='doubleright'
                    type='antdesign'
                    color='#363636'
                    size='60'
                />
            </View>
            <View style={styles.text}>
                <Text style={{ fontSize: 18, fontWeight: 500 }}>{props.name}</Text>
            </View>
        </TouchableOpacity >
    )
}

export default WhichRoom;

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
        backgroundColor: '#A0DEEC',
        borderRadius: 20,
        width: 170,
        height: 130,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {

        marginTop: 15,
    }
});