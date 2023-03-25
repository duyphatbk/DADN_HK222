import CheckBox from 'react-native-check-box'
import { ScreenHeight, ScreenWidth } from '@rneui/base';
import React, { createContext, useState, useContext } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, Image, TextInput, TouchableOpacity } from 'react-native';


function Login() {
    const [info, setInfo] = useState({
        email: '',
        password: ''
    })
    const [mail, setMail] = useState('')
    const [pass, setPass] = useState('')
    const [selected, setSelected] = useState(false)

    return (
        <View style={styles.container}>
            <View style={styles.logo}>
                <Image source={require('../assets/logo.png')} />
            </View>

            <View style={styles.content}>
                <Text style={styles.title}>RABBIT'S</Text>
                <Text style={styles.title}>SMART HOME</Text>

                <View style={styles.form}>
                    <View style={styles.btitle}>
                        <Text style={styles.texttitle}>Email</Text>
                    </View>
                    <View style={styles.binput}>
                        <TextInput
                            style={styles.textinput}
                            placeholder='Nhập email người dùng...'
                            value={mail}
                            onChangeText={ntext => setMail(ntext)} />
                    </View>

                    <View style={styles.btitle}>
                        <Text style={styles.texttitle}>Mật khẩu</Text>
                    </View>
                    <View style={styles.binput}>
                        <TextInput
                            style={styles.textinput}
                            name='password'
                            textContentType="newPassword"
                            secureTextEntry='true'
                            placeholder='Nhập mật khẩu...'
                            value={pass}
                            onChangeText={ntext => setPass(ntext)} />
                    </View>
                    <View style={styles.checkbox}>
                        <CheckBox
                            onClick={() => setSelected(!selected)}
                            isChecked={selected}
                            checkBoxColor='#1F66CC'
                            rightText={"Ghi nhớ mật khẩu"}
                            rightTextStyle={styles.righttext}
                        />
                    </View>
                    <TouchableOpacity
                        style={styles.btn}
                        onPress={() => {}}>
                        <Text style={{
                            fontWeight: 500,
                            color: '#fff',
                            fontSize: 18
                        }}>Đăng nhập</Text>
                    </TouchableOpacity>

                    <Text style={{fontSize: 12}}>Quên mật khẩu/chưa có tài khoản.</Text>
                    <Text style={{fontSize: 12}}>Vui lòng liên hệ: 18001001 để được tư vấn.</Text>
                </View>


            </View>


        </View>
    );
}

export default Login

const styles = StyleSheet.create({
    container: {
        height: ScreenHeight,
    },
    logo: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        // marginVertical: 55
    },
    content: {
        flex: 7,
        backgroundColor: '#EEEEEE',
        // marginTop: 160,
        paddingTop: 30,
        paddingHorizontal: 30,
        borderTopRightRadius: 60,
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        // justifyContent: 'center',
    },
    title: {
        fontSize: 38,
        fontWeight: 900,
        color: '#2C2C2C',
        // marginTop: 25,
    },
    texttitle: {
        fontWeight: 700,
        padding: 10,
        paddingLeft: 15,
    },
    btitle: {
        width: 360,
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        marginTop: 20
    },
    textinput: {
        paddingVertical: 15,
        paddingHorizontal: 10,
        paddingLeft: 15
    },
    binput: {
        width: 360,
        backgroundColor: '#FAFAFA',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        marginBottom: 10
    },
    form: {
        // flexDirection: 'column',
        alignItems: 'center',
        // justifyContent: 'center',
        width: 370,
    },
    checkbox: {
        width: ScreenWidth,
        marginLeft: 80,
        marginVertical: 10,
    },
    righttext: {
        fontStyle: 'italic',
        fontSize: 14,
        fontWeight: 300,
    },
    btn: {
        backgroundColor: '#FF9A88',
        paddingVertical: 23,
        width: 350,
        alignItems: 'center',
        borderRadius: 20,
        marginVertical: 50
    }
});
