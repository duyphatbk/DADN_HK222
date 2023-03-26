import CheckBox from 'react-native-check-box'
import { ScreenHeight, ScreenWidth } from '@rneui/base';
import React, { createContext, useState, useContext } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, Image, TextInput, TouchableOpacit, FlatList, ScrollView } from 'react-native';

import WhichRoom from '../components/WhichRoom';
import BackTo from '../components/BackTo'


function ChooseRoom() {
    
    const roomlist = [{
        id: 1,
        name: 'Phòng khách'
    },
    {
        id: 2,
        name: 'Phòng ngủ 1'
    },
    {
        id: 3,
        name: 'Phòng ngủ 2'
    },
    {
        id: 4,
        name: 'Nhà bếp'
    },
    {
        id: 5,
        name: 'Phòng ăn'
    },
    ]



    const [modal, setModel] = useState(false);

    return (
        <ScrollView
            contentContainerStyle={{
                flexGrow: 1
            }}
            keyboardShouldPersistTaps='handled'
        >
            <View style={styles.container}>
                <View style={styles.logo}>
                    <Image source={require('../assets/logo.png')} />
                </View>

                <View style={styles.content}>
                    <Text style={styles.title}>RABBIT'S</Text>
                    <Text style={styles.title}>SMART HOME</Text>
                    <BackTo name="Chọn nhà" />
                    <View style={styles.homelist}>
                        {roomlist.map((item, idx) => <WhichRoom name={item.name} key={idx} />)}
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

export default ChooseRoom

const styles = StyleSheet.create({
    container: {

    },
    logo: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 55
    },
    content: {
        minHeight: 600,
        backgroundColor: '#EEEEEE',
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
