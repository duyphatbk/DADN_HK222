import {SafeAreaView, View, Text, StyleSheet, Image, TextInput, Button, Alert} from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Example from './Toggle';

export default function Info_user() {
    const account_img = require('../../images/Avatar.png');
    const [text, onChangeText] = React.useState('Useless Text');
    const [number, onChangeNumber] = React.useState('');

    return (
        
    <View style = {styles.container}>
        <View style = {styles.nav}>
                <View style = {styles.icon_back}>
                    <FontAwesome5
                        name='angle-double-left'
                                size={40}
                                color='#363636'
                            />                
                </View>
                
                <Text style = {styles.nav_text}>Thông tin</Text>
            
        </View>
        <View style = {styles.infoTop}>
            <View style = {styles.infoTopLeft}>
                <Image
                    style = {styles.img}
                    source={account_img}
                />
                <Text style = {{paddingLeft: 37, paddingTop: 10, fontWeight: 'bold'}}>DƯA HẤU XX</Text>
            </View>
            <View style = {styles.infoTopRight}>
                <SafeAreaView>
                    <Text>UserName:</Text>
                    <TextInput
                        style={styles.input_Top}
                        onChangeText={onChangeText}
                        value={text}
                    />
                    <Text>Pass Word:</Text>
                    <TextInput
                        style={styles.input_Top}
                        onChangeText={onChangeNumber}
                        value={number}
                        placeholder="please type out your password"
                        keyboardType="numeric"
                    />
                </SafeAreaView>
                
            </View>
        </View>
        <View style = {styles.Bottom}>
            <SafeAreaView>
                    <Text>Location:</Text>
                    <TextInput
                        style={styles.input_Bottom}
                        onChangeText={onChangeText}
                        value={text}
                    />
                    <Text>Phone:</Text>
                    <TextInput
                        style={styles.input_Bottom}
                        onChangeText={onChangeNumber}
                        value={number}
                        placeholder=""
                        keyboardType="numeric"
                    />
                    <View style = {styles.mid}>
                        <View>
                        <Text>Payment</Text>
                        <TextInput
                            style={styles.midInput}
                            onChangeText={onChangeNumber}
                            value={number}
                            placeholder=""
                            keyboardType="numeric"
                        />
                        </View>
                        <View style={{marginLeft: 10}}>
                        <Text>Type Payment</Text>
                        <TextInput
                            style={styles.midInput}
                            onChangeText={onChangeNumber}
                            value={number}
                            placeholder=""
                            keyboardType="numeric"
                        />
                        </View>
                    </View>
                    <Text>Payment Amount/Month</Text>
                    <TextInput
                        style={styles.input_Bottom}
                        onChangeText={onChangeNumber}
                        value={number}
                        placeholder=""
                        keyboardType="numeric"
                    />
                    <Text>Concurrent User</Text>
                    <TextInput
                        style={styles.input_Bottom}
                        onChangeText={onChangeNumber}
                        value={number}
                        placeholder=""
                        keyboardType="numeric"
                    />
                    <View style={styles.fixToText}>
                        <Button
                            title="Áp dụng"
                            onPress={() => Alert.alert('Button pressed')}
                        />
                    </View>
            </SafeAreaView>
        </View>
    </View>
  )
};

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#EEEEEE'
    },
    nav : {
        marginTop: 75,
        marginLeft: 25,
        backgroundColor: 'white',
        height: 45,
        width: 225,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    icon_back : {
        flex: 1,
        width: 10,
        backgroundColor: 'yellow',
        borderRadius: 20,
        backgroundColor: '#E3E3E3',
        alignItems: 'center'
    },

    nav_text : {
        fontSize: 20,
        flex: 3,
        paddingLeft: 30,
       
    },
    infoTop : {
        flexDirection: 'row'
    },
    infoTopLeft : {
       flexDirection: 'column',
       flex: 1
    },
    img : {
        width: 100,
        height: 100,
        paddingLeft: 24,
        marginLeft: 25,
        marginTop: 30,
    },
    infoTopRight : {
        flex: 2,
        paddingTop: 15,
        marginLeft: 30
    },
    input_Top: {
        height: 35,   
        borderWidth: 1,
        width: 230 ,
        padding: 10,
        fontSize: 15,
        borderRadius: 15,
        marginTop:7,
        marginBottom: 10
      },
      mid : {
        flexDirection: 'row',
      },
      midInput : {
        height: 35,   
        borderWidth: 1,
        width: 170,
        padding: 10,
        fontSize: 15,
        borderRadius: 15,
        marginTop:10,
        marginBottom: 10
      },
      input_Bottom:{
        height: 35,   
        borderWidth: 1,
        width: 350,
        padding: 10,
        fontSize: 15,
        borderRadius: 15,
        marginTop:5,
        marginBottom: 5
      },

    fixToText: {
        width: 140,
        height: 42,
        justifyContent: 'space-between',
        marginLeft: 210,
        marginTop: 10
      },
    Bottom: {
        marginTop: 5,
        paddingLeft: 30
      }
})