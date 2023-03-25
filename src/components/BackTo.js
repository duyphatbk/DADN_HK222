import { StyleSheet, Text, View, SafeAreaView, Button, TouchableOpacity } from 'react-native';
import { Icon } from '@rneui/themed';

const BackTo = (props) => {
    const backTo = () => {
        console.log('clicked')
    }
    return (
        <TouchableOpacity style={styles.btnWrap} onPress={backTo}>
            <View style={styles.icon}>
                <Icon
                    name='doubleleft'
                    type='antdesign'
                    color='#363636'
                />
            </View>
            <Text style={styles.title}>{props.name}</Text>
        </TouchableOpacity>
    )
}

export default BackTo;

const styles = StyleSheet.create({
    btnWrap: {
        backgroundColor: '#fff',
        borderRadius: 30,
        alignSelf: 'flex-start',
        marginTop: 20,
        // marginLeft: 20,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon: {
        backgroundColor: '#FAFAFA',
        marginRight: 10,
        margin: 0,
        padding: 12,
        borderRadius: 23,
    },
    title: {
        fontSize: 20,
        fontWeight: 500,
        paddingHorizontal: 12,
        paddingRight: 25,
    }
});