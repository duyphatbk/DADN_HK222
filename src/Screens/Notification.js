import React, { createContext, useState, useContext } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, Image, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
export default function Notification() {
    const iconTool = require('../../src/assets/fire_alert.png');
    const logo = require('../../src/assets/logo.png');
    const [bgColor, setBgColor] = useState('#EDF5EA');
    var _styles = {
        seen : {
            flexDirection: 'row',
            alignItems: 'center',
            borderRadius: 15,
            padding:10,
            marginBottom: 20,
        }
      };
    return (
        <ScrollView
            contentContainerStyle={{
                flexGrow: 1
            }}
            keyboardShouldPersistTaps='handled'
        >
            <View style={styles.container}>
                <View style={styles.content}>
                    <View style={styles.homelist}>
                        <Text style = {styles.today}>HÔM NAY</Text>
                        <TouchableOpacity onPress={()=> bgColor != 'white'? setBgColor('white') : setBgColor('#EDF5EA')}>
                            {
                                bgColor == '#EDF5EA' ? <Text style = {{color: 'green'}}>Đánh dấu đã đọc</Text>
                                :    <Text style = {{color: '#959595'}}>Đánh dấu chưa đọc</Text>
                            }
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity>
                    <View style = {[_styles.seen, {backgroundColor: bgColor}]}>
                        <Image style={styles.iconLight} source={iconTool} />
                        <View>
                            <Text style = {styles.titleNoti}>Thông báo hệ thống</Text>
                            <Text>Nồng độ khí gas đang ở mức an toàn</Text>
                            <Text>8h45 PM</Text>
                        </View>
                    </View>
                    </TouchableOpacity>
                    <View style={styles.homelist}>
                        <Text style = {styles.today}>HÔM QUA</Text>
                    </View>
                    <TouchableOpacity>
                    <View style = {styles.notiForm_Seen_HardAlert}>
                        <Image style={styles.iconLight} source={iconTool} />
                        <View>
                            <Text style = {styles.titleNoti}>Thông báo hệ thống</Text>
                            <Text>Phát hiện cháy</Text>
                            <Text>8h45 AM</Text>
                        </View>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <View style = {styles.notiForm_Seen_MediumAlert}>
                        <Image style={styles.iconLight} source={iconTool} />
                        <View>
                            <Text style = {styles.titleNoti}>Thông báo hệ thống</Text>
                            <Text>Phát hiện nồng độ khí gas cao bất thường</Text>
                            <Text>8h40 AM</Text>
                        </View>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <View style = {styles.notiForm_Seen}>
                        <Image style={styles.iconLight} source={logo} />
                        <View>
                            <Text style = {styles.titleNoti}>Thông báo Admin</Text>
                            <Text>Bạn đã đăng nhập thành công</Text>
                            <Text>5h40 AM</Text>
                        </View>
                    </View>
                    </TouchableOpacity>
                </View>        
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        
    },
    today : {
        color: '#959595',
        fontSize: 15,
    },

    notiForm_notSeen : {
        //backgroundColor: 'red',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#EDF5EA',
        borderRadius: 15,
        padding:10,
        marginBottom: 20,
    },

    notiForm_Seen : {
        //backgroundColor: 'red',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        padding:10,
        marginBottom: 20,
    },

    notiForm_Seen_MediumAlert : {
        //backgroundColor: 'red',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#EC9393',
        borderRadius: 15,
        padding:10,
        marginBottom: 10,
    },
    notiForm_Seen_HardAlert : {
        //backgroundColor: 'red',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#EA4E4E',
        borderRadius: 15,
        padding:10,
        marginBottom: 10,
    },
    titleNoti : {
        fontWeight: 600,
    },

    logo: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 55
    },
    iconLight: {
        width: 35,
        height: 35,
        marginRight: 35,

    },
    content: {
        minHeight: 600,
        backgroundColor: '#FFFFFF',
        paddingTop: 30,
        marginTop: 15,
        paddingHorizontal: 30,
        borderTopRightRadius: 60,
        borderTopLeftRadius: 60,

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
        marginBottom: 18,
    }
});