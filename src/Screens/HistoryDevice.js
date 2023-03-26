import { SafeAreaView, View, Text, StyleSheet, Image, TextInput, Button, Alert } from 'react-native';
import React, { useState } from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SelectList } from 'react-native-dropdown-select-list'
import { TouchableOpacity } from 'react-native';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import BackTo from '../components/BackTo';

const data = [
    { key: '1', value: 'Đèn 1' /*disabled:true*/ },
    { key: '2', value: 'Đèn 2' },
    { key: '3', value: 'Đèn 3' },
    { key: '4', value: 'Đèn 4' },
]
export default function HistoryDevice() {
    const icon_light = require('../../images/Light_Icon.jpg');
    const [selected, setSelected] = React.useState("");
    return (

        <View style={styles.container}>
            <BackTo name='Tài khoản' />
            <View style={styles.button}>
                <View >
                    <SelectList
                        setSelected={(val) => {
                            return setSelected(val);
                        }
                        }
                        data={data}
                        save="value"
                        placeholder='Lựa chọn thiết bị'
                        dropdownStyles={{ backgroundColor: '#F3F3F3' }}
                        dropdownItemStyles={{ alignItems: 'center' }}
                        dropdownTextStyles={{ color: '#000', fontSize: '16', fontWeight: '500' }}
                        // maxHeight= {1000}
                        inputStyles={{ color: '#fff', fontWeight: '500', fontSize: '16' }}
                        boxStyles={styles.select}
                        disabledTextStyles={{ color: '#fff' }}
                    />
                </View>
            </View>

            <View style={styles.formInfo}>
                <View style={styles.datepicker}>
                    <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Lịch sử hoạt động</Text>
                    <View style={styles.Calender}>
                        <Text style={{ fontSize: 18 }}>vamos</Text>
                    </View>
                </View>
                <View style={styles.HistoryInfo}>
                    <Image style={styles.iconLight} source={icon_light} />
                    <View>
                        <Text style={{ fontSize: 16 }}>{selected} bật lúc 00:01</Text>
                    </View>
                </View>
            </View>

            <Text style={{ paddingTop: 10, color: '#827A7A', paddingLeft: 100, marginTop: 45 }}>CopyRight @ 2023 by BadRabbit</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EEEEEE',
        padding: 20,
        // alignItems: 'center'
    },

    nav: {
        marginTop: 75,
        marginLeft: 25,
        backgroundColor: 'white',
        height: 45,
        width: 225,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },

    icon_back: {
        flex: 1,
        width: 10,
        backgroundColor: 'yellow',
        borderRadius: 20,
        backgroundColor: '#E3E3E3',
        alignItems: 'center'
    },

    nav_text: {
        fontSize: 20,
        flex: 3,
        paddingLeft: 30,

    },

    button: {
        height: 100,
        width: 200,
        marginLeft: 190,
        marginTop: 20,
        borderRadius: 9,
        Color: '#1F66CC',
        zIndex: 1
    },

    formInfo: {
        backgroundColor: '#FFFFFF',
        height: 400,
        borderRadius: 20,

    },

    datepicker: {
        backgroundColor: '#EEF3FA',
        height: 50,
        paddingLeft: 20,
        paddingTop: 15,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        flexDirection: 'row'
    },
    iconLight: {
        width: 40,
        height: 40,
        marginRight: 20,

    },
    HistoryInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20,
        marginTop: 10,
    },
    Calender: {
        backgroundColor: 'white',
        marginLeft: 20
    },
    select: {
        borderRadius: 50,
        backgroundColor: '#1F66CC',
        color: '#fff'
    }
})