import { SafeAreaView, View, Text, StyleSheet, Image, TextInput, Button, Alert, useEffect } from 'react-native';
import React, { useReducer, useState} from 'react';
import { SelectList } from 'react-native-dropdown-select-list'
import BackTo from '../components/BackTo';
import { getValue } from '../utils/API'
import { deviceTypeInfo } from '../utils/API';
// call historydevice api

//----fake_data
//key == value(in DB), value == device_id.
let data1 = [
    { key: 0, value: 'Đèn 1', time : '22h', type : 'light'},
    { key: 1, value: 'Quạt 1' , time : '21h', type : 'fan'},
    { key: 0, value: 'Quạt 2', time: '20h', type: 'fan'},
    { key: 1, value: 'Quạt 2', time: '23h', type: 'fan'},
    { key: 28, value: 'Nhiệt độ', time: '6h', type: 'temp_humi'},
]

const icon_light = require('../../images/Light_Icon.jpg');
const icon_fan = require('../../src/assets/fan.png');
const icon_temp = require('../../src/assets/temp.png');
const icon_door = require('../../src/assets/lockdoor.png');

let q = [];

function word_action(item) {
    if(item.type == 'light' || item.type == 'fan') {
        if(item.key == 1) return 'mở'
        else return 'tắt'
    }
    else if (item.type == 'temp_humi'){
        return 'phòng là ' + item.key.toString();
    }
    else if( item.type == 'servo' && item.key == 0) {
        return 'đã đóng'
    }
    else if( item.type == 'servo' && item.key == 1) {
        return 'đã mở'
    }
}
function icon(item) {
    if(item.type=='light') {
        return <Image style={styles.iconLight} source={icon_light} />
    }
    else if(item.type=='fan') {
        return <Image style={styles.iconFan} source={icon_fan} />
    }
    else if(item.type=='servo') {
        return <Image style={styles.iconFan} source={icon_door} />
    }
    else if(item.type=='temp_humi') {
        return <Image style={styles.iconFan} source={icon_temp} />
    }
}
function filter_ (value) {
    for ( let i = 0; i < data1.length ; i++){
        if(data1[i].value == value){
            q.push(data1[i]);
            //console.log(q)
        }
        if(i == data1.length - 1) {return q};
    }
}
function render (array) {
    return array.map((item)=>(
    <View style = {{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
        {icon(item)}
        <View style= {styles.item_History}>
            <Text style={{ fontSize: 16 }}> {item.value} {word_action(item)} lúc {item.time}</Text>
        </View>
    </View>
    ))
    }

export default function HistoryDevice() {
    const [selected, setSelected] = useState("");
    const [a, seta] = useState([]);

    return (
        <View style={styles.container}>
            <BackTo name='Tài khoản' />
            <View style={styles.button}>
                <View >
                    <SelectList
                            setSelected={(val) => {
                                seta(filter_(val));
                                q = [];
                                return setSelected(val)
                            }
                        }
                        data={data1}
                        save="value"
                        placeholder='Lựa chọn thiết bị'
                        dropdownStyles={{ backgroundColor: '#F3F3F3' }}
                        dropdownItemStyles={{ alignItems: 'center' }}
                        dropdownTextStyles={{ color: '#000000', fontSize: 16, fontWeight: 500 }}
                        maxHeight= {1000}
                        inputStyles={{ color: '#ffffff', fontWeight: '500', fontSize: 16 }}
                        boxStyles={styles.select}
                        disabledTextStyles={{ color: '#ffffff' }}
                    />
                </View>
            </View>

            <View style={styles.formInfo}>
                <View style={styles.datepicker}>
                    <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Lịch sử hoạt động</Text>
                    <View style={styles.Calender}>
                        <Text style={{ fontSize: 18 }}></Text>
                    </View>
                </View>
                <View style={styles.HistoryInfo}>
                    {render(a)}
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
        paddingLeft: 20,
        paddingTop: 30,
        justifyContent: 'center',
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
        //marginTop: 20,
        borderRadius: 9,
        Color: '#1F66CC',
        zIndex: 1
    },

    formInfo: {
        backgroundColor: '#FFFFFF',
        height: 400,
        borderRadius: 20,
        width: 370,
        marginTop: -20,
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
    iconFan: {
        width: 25,
        height: 30,
        marginRight: 20,

    },
    HistoryInfo: {
        flexDirection: 'column',
        //alignItems: 'center',
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
    },
    item_History : {
       flexDirection: 'row' 
    }
})