import { useEffect } from 'react';
import CheckBox from 'react-native-check-box'
import { ScreenHeight, ScreenWidth } from '@rneui/base';
import React, { createContext, useState, useContext } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Loader from '../components/Loader';

import { AppContext } from '../store/authContext'
import { login } from '../utils/API'

function Login() {
    const navigation = useNavigation()
    const [selected, setSelected] = useState(false)
    const [hidepassWord, setHidepassWord] = useState(true)
    const [hideEmail, setHideEmail] = useState(true)
    const [errors, setErrors] = React.useState({})
    const [loading, setLoading] = React.useState(false);
    const [inputs, setInputs] = React.useState({
        email: '',
        password: '',
    });

    const context = useContext(AppContext)

    const validate = async (e) => {
        e.preventDefault()
        Keyboard.dismiss();
        let isValid = true;

        if (!inputs.email) {
            handleError('Please input email', 'email');
            isValid = false;
        } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
            handleError('Please input a valid email', 'email');
            isValid = false;
        }
        if (!inputs.password) {
            handleError('Please input password', 'password');
            isValid = false;
        } else if (inputs.password.length < 5) {
            handleError('Min password length of 5', 'password');
            isValid = false;
        }

        if (isValid) {
            register();
            setErrors({ errors: '' })
        }

        // call login api
        const res = await login(inputs)
        const user = res.user
        if (res.status) {
            console.log("Successfully logged in with email: ", user.email)
            await context.login(res.token, user)
            navigation.navigate('UserIn')
            console.log(context.state.token)
            //clear input values
            setInputs({
                email: '',
                password: '',
            })
        } else {
            // handleError(res.msg, )
            // isValid = false;
            console.log(res.msg)
        }
    }

    const handleError = (errors, input) => {
        setErrors(prevState => ({ ...prevState, [input]: errors }));
    }

    const handleOnchange = (text, input) => {
        setInputs(prevState => ({ ...prevState, [input]: text }));
    }

    const register = () => {
        setLoading(true);
        setTimeout(() => {
            try {
                setLoading(false);
            } catch (error) {
                Alert.alert('Error', 'Something went wrong');
            }
        }, 1800)
    };

    return (
        <ScrollView>
            {<Loader visible={loading} />}
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
                            <Icon name='email-outline' style={{ fontSize: 20, marginLeft: 15 }} />
                            <TextInput
                                secureTextEntry={!hideEmail}
                                style={styles.textinput}
                                value={inputs.email}
                                placeholder='Nhập email người dùng...'
                                onChangeText={text => handleOnchange(text, 'email')}
                            />
                            <Icon
                                onPress={() => setHideEmail(!hideEmail)}
                                name={!hideEmail ? 'eye-outline' : 'eye-off-outline'}
                                style={{ fontSize: 20, marginRight: -20 }}
                            />
                        </View>
                        {errors.email && (
                            <Text style={{ color: 'red', fontSize: 15, marginRight: 170, }}>
                                {errors.email}
                            </Text>
                        )}

                        <View style={styles.btitle}>
                            <Text style={styles.texttitle}>Mật khẩu</Text>
                        </View>
                        <View style={styles.binput}>
                            <Icon name='lock-outline' style={{ fontSize: 20, marginLeft: 15 }} />
                            <TextInput
                                autoCorrect={false}
                                value={inputs.password}
                                style={styles.textinput}
                                name='password'
                                textContentType="newPassword"
                                secureTextEntry={hidepassWord}
                                placeholder='Nhập mật khẩu...'
                                onChangeText={text => handleOnchange(text, 'password')}
                            />
                            <Icon
                                onPress={() => setHidepassWord(!hidepassWord)}
                                name={hidepassWord ? 'eye-outline' : 'eye-off-outline'}
                                style={{ fontSize: 20, marginRight: -20 }}
                            />
                        </View>
                        {errors.password &&
                            (
                                <Text style={{ color: 'red', fontSize: 15, marginRight: 175, }}>
                                    {errors.password}
                                </Text>
                            )
                        }
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
                            onPress={(e) => validate(e)}>
                            <Text style={{
                                fontWeight: 500,
                                color: '#fff',
                                fontSize: 18
                            }}>Đăng nhập</Text>
                        </TouchableOpacity>
                        <Text style={{ fontSize: 12 }}>Quên mật khẩu/chưa có tài khoản.</Text>
                        <Text style={{ fontSize: 12 }}>Vui lòng liên hệ: 18001001 để được tư vấn.</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
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
        marginTop: 10,
        flexDirection: 'row'
    },
    textinput: {
        paddingVertical: 15,
        paddingHorizontal: 10,
        //width: '80%',
        marginLeft: 10,
        //backgroundColor: 'red', 
        width: '75%',
    },
    binput: {
        width: 360,
        backgroundColor: '#FAFAFA',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        marginBottom: 10,
        alignItems: 'center',
        flexDirection: 'row',

    },
    form: {
        //flexDirection: 'column',
        alignItems: 'center',
        //justifyContent: 'center',
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
        paddingVertical: 20,
        width: 350,
        alignItems: 'center',
        borderRadius: 20,
        marginVertical: 10
    }
});