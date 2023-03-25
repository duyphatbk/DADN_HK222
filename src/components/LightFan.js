import { StyleSheet, Text, View, SafeAreaView, Button, TouchableOpacity, Image, Modal, Pressable } from 'react-native';
import React, { createContext, useState, useContext } from 'react';
import CheckBox from 'react-native-check-box'
import { Icon } from '@rneui/themed';

const CB = (props) => {
    const [selected, setSelected] = useState(false);
    return (
        <View style={styles.checkbox}>
            <Text style={{ fontSize: 16, fontWeight: 500 }}>{props.id}</Text>
            <CheckBox
                onClick={() => setSelected(!selected)}
                isChecked={selected}
                checkBoxColor='#1F66CC'
            />
        </View>
    )
}

const LightFan = (props) => {
    const details = () => {
        console.log('clicked details')
    }
    const [modalVisible, setModalVisible] = useState(false);
    const list = [
        {
            id: 1,
            checked: false,
        },
        {
            id: 2,
            checked: false,
        },
        {
            id: 3,
            checked: false,
        },
        {
            id: 4,
            checked: false,
        },
        {
            id: 5,
            checked: false,
        },
        {
            id: 6,
            checked: false,
        },
        {
            id: 7,
            checked: false,
        },
        {
            id: 8,
            checked: false,
        }
    ]

    const handleChange = () => {

    }

    return (
        <TouchableOpacity
            style={props.device == "fan" ? [styles.btnWrap, styles.fan] : [styles.btnWrap, styles.light]}
            onPress={() => setModalVisible(true)}>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Chọn thiết bị</Text>
                        <View style={styles.listbox}>
                            {list.map((item, idx) => <CB id={idx + 1} />)}
                        </View>
                        <Pressable onPress={() => setModalVisible(!modalVisible)} style={styles.btn}>
                            <Text style={styles.textStyle}>Áp dụng</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>

            <View style={styles.img}>
                {
                    props.device == "fan" ?
                        < Image source={require('../assets/fan.png')} />
                        : <Image source={require('../assets/light.png')} />
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
    )
}

export default LightFan;

const styles = StyleSheet.create({
    btnWrap: {
        // backgroundColor: 'lightblue',
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 20,
        height: 180,
    },
    fan: {
        backgroundColor: 'lightblue'
    },
    light: {
        backgroundColor: '#FBE4A9'
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
        justifyContent: 'center'
    },
    icon: {
        fontWeight: 500,
        paddingRight: 10
    },
    //
    centeredView: {
        flex: 1,
        // flexDirection: 'row',
        justifyContent: 'center',
        // alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        // flexDirection: 'row',
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        fontSize: 18,
        fontWeight: 500,
        marginBottom: 15,
        textAlign: 'center',
    },
    listbox: {
        flexDirection: 'row',

    },

    checkbox: {
        margin: 10,
        alignItems: 'center',
    },
    btn: {
        backgroundColor: '#000',
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 30,
        backgroundColor: '#1F66CC',
        marginTop: 10,
    }
});