import { View, Text, StyleSheet,Image, TouchableOpacity} from 'react-native'
import React, {useState, createContext, useContext} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useTheme } from '@react-navigation/native';    

export default function Account({navigation}) {
    const {colors} = useTheme();
    const account_img = require('../../images/Avatar.png');
    let lightTheme = () => {
        styles.container.backgroundColor = 'white';
    }
    return (
    <View style = {styles.container}>
        <View style = {styles.image}>
            <Image
            style={styles.logo}
            source={account_img}
            />
        </View>
        <Text style = {styles.welcome_text}>Hello, BadRabbit</Text>
        <View style = {styles.body}>
            <TouchableOpacity onPress={()=>navigation.navigate('Thông tin tài khoản')}>
                <View style = {styles.info}>
                    <Image source = {account_img} style={styles.icon_info}/>
                    <View style = {styles.info_backg}>
                        <Text style = {styles.info_text}>Thông tin cá nhân</Text>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('Chế độ ban đêm')}>
                <View style = {styles.info}>
                    <View style = {{backgroundColor: '#FCE19C', justifyContent: 'center', alignItems:'center', borderRadius: 30, width: 50}}>
                        <FontAwesome5
                            name='sun'
                            size={30}
                        />
                    </View>                  
                    <View style = {styles.info_backg}>
                        <Text style = {styles.info_text}>Chế độ ban ngày</Text>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style = {styles.info}>
                    <View style = {{backgroundColor: '#C4C6E5', justifyContent: 'center', alignItems:'center', borderRadius: 30, width: 50}}>
                        <FontAwesome5
                            name='bell'
                            size={30}
                            color='#252DF5'
                        />
                    </View>
                    <View style = {styles.info_backg}>
                        <Text style = {styles.info_text}>Thông báo</Text>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style = {styles.info}>
                    <View style = {{backgroundColor: '#363636', justifyContent: 'center', alignItems:'center', borderRadius: 30, width: 50}}>
                        <FontAwesome5
                            name='book'
                            size={20}
                            color='#FFFFFF'
                            solid
                        />
                    </View>
                    <View style = {styles.info_backg}>
                        <Text style = {styles.info_text}>Hướng dẫn</Text>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
                <View style = {styles.info}>
                    <View style = {{backgroundColor: '#F57C7C', justifyContent: 'center', alignItems:'center', borderRadius: 30, width: 50}}>
                        <FontAwesome5
                            name='sign-out-alt'
                            size={20}
                            color='black'
                        />
                    </View>
                    <View style = {styles.info_backg}>
                        <Text style = {styles.info_text}>Đăng xuất</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
        <Text style ={{paddingTop: 10, color: '#827A7A'}}>CopyRight @ 2023 by BadRabbit</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#EEEEEE',
    },
    header : {
        backgroundColor: '#D9D9D9',
        flex: 2,
    },
    welcome_text : {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        fontSize: 28
    },
    image: {
        borderTopRightRadius: 20,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },

    body : {
        paddingTop: 60,
        paddingVertical: 60,
        marginTop: 20,
        borderColor: 'black',
        backgroundColor: '#D9D9D9',
        width: 330,
        height: 325,
        borderRadius: 20,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: 130,
        height: 130,
    },
   
    font : {
        fontSize: 18,
        color: 'black',
    },
    info : {
        flexDirection: 'row',
        paddingVertical: 6
    },
    icon_info : {
        width:50,
        height: 50,
        borderRadius:40
    },
    info_text : {
        fontSize: 18,
        color: 'black',
        paddingLeft: 15,
    },
    info_backg : {
        backgroundColor: '#D9D9D9', 
        height: 50, 
        width: 240, 
        justifyContent: 'center'
    }
})