import { StyleSheet, Text, View, SafeAreaView, Button, TouchableOpacity, Image} from 'react-native';
import { Icon } from '@rneui/themed';
import MQTTService from '../core/services/MQTTService';
import { useContext, useState } from 'react';
import { MQTTContext } from '../store/authContext';


const LockDoor = (props) => {
    const [state, dispatch] = useContext(MQTTContext);
    const [bgcolor, setbgcolor] = useState('red')
    const details = () => {
        styles.label.backgroundColor = bgcolor;
        
        state.door = state.door == 4 ? 5 : 4;
        MQTTService.setValue('hienhien612/feeds/dadn-door', state.door);
    }
    return (
        <TouchableOpacity style={[styles.btnWrap]} onPress={details}>
            <View style={styles.img}>
                < Image source={require('../assets/lockdoor.png')} />
            </View>
            {state.door == 5 ? <Text style={styles.label}>Cửa đã khoá</Text> : 
                <Text style={styles.label}>Cửa đang mở</Text>}
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

export default LockDoor;

const styles = StyleSheet.create({
    btnWrap: {
        backgroundColor: '#F4F6FD',
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        // margin: 20,
        height: 90,
    },
    img: {
        backgroundColor: 'none',
        borderRadius: 10,
        transform: [{scale: 0.5}]
    },
    icon: {
        fontWeight: 500,
        paddingRight: 10
    },
    label: {
        fontSize: 20,
        fontWeight: 500,
        marginHorizontal: 12,
    }
});