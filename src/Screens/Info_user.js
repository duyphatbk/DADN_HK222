import { SafeAreaView, View, Text, StyleSheet, Image, TextInput, Button, Alert, Keyboard } from 'react-native';
import React, {useState} from 'react';
import  Icon  from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import BackTo from '../components/BackTo'
import { ScrollView } from 'react-native-gesture-handler';
import Loader from '../components/Loader';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Info_user() {
    const account_img = require('../../images/Avatar.png');
    const navigation = useNavigation()
    //const [selected, setSelected] = useState(false)
    const [hideUsername, sethideUsername] = useState(true)
    const [hidepassWord, setHidepassWord] = useState(true)
    const [errors, setErrors] = useState({})
    const [loading, setLoading] = useState(false);
    const [inputs, setInputs] = useState({
        username: '',
        password: '',
        location: '',
        phoneNumber: '',
        payment: '100000',
        typePayment: 'Banking',
        month: '100000',
        concurrentUser: 'Bad Rabbit 2'
      });
      const validate = () => {
        Keyboard.dismiss();
        let isValid = true;
    
        if (!inputs.username) {
          handleError('Please input username', 'username');
          isValid = false;
        } else if (inputs.username.length < 7) {
          handleError('Min username length of 6', 'username');
          isValid = false;
        }
        if (!inputs.password) {
          handleError('Please input password', 'password');
          isValid = false;
        } else if (inputs.password.length < 5) {
          handleError('Min password length of 5', 'password');
          isValid = false;
        }
        if (!inputs.location) {
            handleError('Please input location', 'location');
            isValid = false;
        }
        if (!inputs.phoneNumber) {
            handleError('Please input phone Number', 'phoneNumber');
            isValid = false;
          } else if (inputs.phoneNumber.length != 10) {
            handleError('Max phone number length of 10', 'phoneNumber');
            isValid = false;
          }
          
        if (isValid) {
            register();
            setErrors({errors: ''})
          }
      };
      const handleError = (errors, input) => {
        setErrors(prevState => ({...prevState, [input]: errors}));
        //console.log(errors)
      };
      const handleOnchange = (text, input) => {
        setInputs(prevState => ({...prevState, [input]: text}));
      };
      const register = () => {
        setLoading(true);
        setTimeout(() => {
          try {
            setLoading(false);
            AsyncStorage.setItem('userData', JSON.stringify(inputs));
            navigation.navigate('Tài khoản');
          } catch (error) {
            Alert.alert('Error', 'Something went wrong');
          }
        }, 1800)
    };
    return (
        <ScrollView>
        <Loader visible={loading} />
        <View style={styles.container}>
            <BackTo name="Tài khoản" />
            <View style={styles.infoTop}>
                <View style = {{alignItems: 'center'}}>
                    <Image
                        style={styles.img}
                        source={account_img}
                    />
                    <Text style={{ fontWeight: 'bold', marginTop: 3 }}>Bad Rabbit</Text>
                </View>
                <View>
                    <SafeAreaView>
                        
                        <Text>UserName:</Text>
                        <View style={styles.input_Top}>
                            <Icon name='account-edit-outline' style ={{fontSize:19}} />
                            <TextInput
                                style = {{ width: 170, marginLeft: 5}} 
                                onChangeText={text => handleOnchange(text, 'username')}
                                value={inputs.username}
                                secureTextEntry = {!hideUsername}
                            />
                            <Icon
                                onPress={() => sethideUsername(!hideUsername)}
                                name={ !hideUsername ? 'eye-outline' : 'eye-off-outline'}
                                style={{fontSize: 18}}
                            />
                        </View>
                        {errors.username && (
                            <Text style={{color: 'red', fontSize: 15, marginTop:-5}}>
                                {errors.username}
                            </Text>
                        )}
                        <Text>Pass Word:</Text>
                        <View style={styles.input_Top}>
                        <Icon name='lock-outline' style ={{fontSize:18}} />
                            <TextInput
                                style = {{ width: 170, marginLeft: 5}} 
                                onChangeText = {text => handleOnchange(text, 'password')}
                                value={inputs.password}
                                //placeholder="please type out your password"
                                //keyboardType="numeric"
                                secureTextEntry={hidepassWord}
                            />
                            <Icon
                                onPress={() => setHidepassWord(!hidepassWord)}
                                name={ hidepassWord ? 'eye-outline' : 'eye-off-outline'}
                                style={{fontSize: 18}}
                            />
                        </View>
                        {errors.password && (
                            <Text style={{color: 'red', fontSize: 15, marginTop:-5}}>
                                {errors.password}
                            </Text>
                        )}
                    </SafeAreaView>
                </View>
            </View>
            <View style={styles.infoTop}>
                <SafeAreaView>
                    <Text>Location:</Text>
                    <View style={styles.input_Bottom}>
                        <Icon name='map-outline' style = {styles.icon_Bottom} />
                        <TextInput
                            style = {styles.word_input_botom}
                            onChangeText={text => handleOnchange(text, 'location')}
                            value={inputs.location}
                        />
                    
                    </View>
                    {errors.location && (
                            <Text style={{color: 'red', fontSize: 15, marginTop:-5}}>
                                {errors.location}
                            </Text>
                        )}
                    <Text>Phone:</Text>
                    <View style={styles.input_Bottom}>
                        <Icon name='phone' style = {styles.icon_Bottom} />
                        <TextInput
                            style = {styles.word_input_botom}
                            onChangeText = {phone => handleOnchange(phone, 'phoneNumber')}
                            value={inputs.phoneNumber}
                            placeholder=""
                            keyboardType="numeric"
                        />
                    </View>
                    {errors.phoneNumber && (
                            <Text style={{color: 'red', fontSize: 15, marginTop:-5}}>
                                {errors.phoneNumber}
                            </Text>
                        )}
                    <View style={styles.mid}>
                        <View>
                            <Text>Payment</Text>
                            <View style={styles.midInput}>
                                <Icon name='account-cash-outline' style = {styles.icon_Bottom} />
                                <TextInput
                                    style = {styles.word_input_botom}
                                    //onChangeText={onChangeNumber}
                                    value={inputs.payment}
                                    placeholder=""
                                    keyboardType="numeric"
                                    editable = {false}
                                />

                            </View>
                        </View>
                        <View style={{ marginLeft: 10 }}>
                            <Text>Type Payment</Text>
                            <View style={styles.midInput}>
                                <Icon name='contactless-payment-circle-outline' style = {styles.icon_Bottom} />
                                <TextInput 
                                    style = {styles.word_input_botom}
                                    //onChangeText={onChangeNumber}
                                    value={inputs.typePayment}
                                    placeholder=""
                                    keyboardType="numeric"
                                    editable = {false}
                                />
                            </View>
                        </View>
                    </View>
                    <Text>Payment Amount/Month</Text>
                    <View style={styles.input_Bottom}>
                        <Icon name='account-cash-outline' style = {styles.icon_Bottom} />
                        <TextInput
                            style = {styles.word_input_botom}
                            onChangeText={month => handleOnchange(month, 'month')}
                            value={inputs.month}
                            placeholder=""
                            keyboardType="numeric"
                            editable = {false}
                        />
                    </View>
                    <Text>Concurrent User</Text>
                    <View style={styles.input_Bottom}>
                        <Icon name='account-multiple-plus' style = {styles.icon_Bottom} />
                        <TextInput
                            style = {styles.word_input_botom}
                            //onChangeText={onChangeNumber}
                            value = {inputs.concurrentUser}
                            placeholder=""
                            keyboardType="numeric"
                            editable = {false}
                        />
                        </View>
                    <View style={styles.fixToText}>
                        <Button
                            title="Áp dụng"
                            onPress = {validate}
                        />
                    </View>
                </SafeAreaView>
            </View>
        </View>
    </ScrollView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EEEEEE',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        paddingLeft: 12,
        marginTop: -12,
        // alignItems: 'center',
    },
    infoTop: {
        marginTop: -10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    img: {
        width: 100,
        height: 100,
    },
    input_Top: {
        height: 35,
        borderWidth: 1,
        width: 230,
        padding: 8,
        fontSize: 15,
        borderRadius: 15,
        marginTop: 7,
        marginBottom: 10,
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        alignItems: 'center',
    },
    mid: {
        flexDirection: 'row',
    },
    midInput: {
        height: 35,
        borderWidth: 1,
        width: 185,
        fontSize: 15,
        borderRadius: 15,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: '#ffffff',
        flexDirection : 'row',
        alignItems: 'center',
    },
    input_Bottom: {
        height: 35,
        borderWidth: 1,
        width: 380,
        alignItems: 'center',
        fontSize: 15,
        borderRadius: 15,
        marginTop: 5,
        marginBottom: 5,
        backgroundColor: '#ffffff',
        flexDirection: 'row'
    },
    icon_Bottom : {
        fontSize:18, 
        marginLeft: 10,
        //backgroundColor: 'red',
    },
    fixToText: {
        width: 140,
        height: 42,
        marginLeft: 235,
        marginTop: 10
    },
    Bottom: {
        marginTop: 5,
        paddingLeft: 30
    },
    word_input_botom : {
        marginLeft: 10,
        fontSize: 15,
        width: 130,
       // backgroundColor: 'red'
    },
})