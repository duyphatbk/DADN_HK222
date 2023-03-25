import { StyleSheet, Text, View, Button } from 'react-native';
import Account from './src/Screens/Account';
import Info_user from './src/Screens/Info_user';
import HistoryDevice from './src/Screens/HistoryDevice';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Account_darkTheme from './src/Screens/Account_darkTheme';

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    //<HistoryDevice />
    <Stack.Navigator>
      <Stack.Screen name="Tài khoản" component={Account} />
      <Stack.Screen name="Thông tin tài khoản" component={Info_user} />
      <Stack.Screen name="Chế độ ban đêm" component={Account_darkTheme} />
      <Stack.Screen name="Lịch sử thiết bị" component={HistoryDevice} />
    </Stack.Navigator>
    
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
