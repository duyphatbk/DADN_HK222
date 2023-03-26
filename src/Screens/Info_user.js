import { SafeAreaView, View, Text, StyleSheet, Image, TextInput, Button, Alert } from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import BackTo from '../components/BackTo'

export default function Info_user() {
    const account_img = require('../../images/Avatar.png');
    const [text, onChangeText] = React.useState('Useless Text');
    const [number, onChangeNumber] = React.useState('');

    return (
        <View style={styles.container}>
            <BackTo name="Cá nhân" />
            <View style={styles.infoTop}>
                <View>
                    <Image
                        style={styles.img}
                        source={account_img}
                    />
                    <Text style={{ fontWeight: 'bold', marginTop: 10 }}>DƯA HẤU XX</Text>
                </View>
                <View>
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
            <View style={styles.infoTop}>
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
                    <View style={styles.mid}>
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
                        <View style={{ marginLeft: 10 }}>
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
    container: {
        flex: 1,
        backgroundColor: '#EEEEEE',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        padding: 20,
        // alignItems: 'center',
    },
    infoTop: {
        marginTop: 10,
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
        padding: 10,
        fontSize: 15,
        borderRadius: 15,
        marginTop: 7,
        marginBottom: 10,
        backgroundColor: '#fff'
    },
    mid: {
        flexDirection: 'row',
    },
    midInput: {
        height: 35,
        borderWidth: 1,
        width: 185,
        padding: 10,
        fontSize: 15,
        borderRadius: 15,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: '#fff'
    },
    input_Bottom: {
        height: 35,
        borderWidth: 1,
        width: 380,
        padding: 10,
        fontSize: 15,
        borderRadius: 15,
        marginTop: 5,
        marginBottom: 5,
        backgroundColor: '#fff'
    },
    fixToText: {
        width: 140,
        height: 42,
        marginLeft: 210,
        marginTop: 10
    },
    Bottom: {
        marginTop: 5,
        paddingLeft: 30
    }
})