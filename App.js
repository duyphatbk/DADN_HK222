import React, { createContext, useState, useEffect, useContext } from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, ScrollView } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
//import MQTTService from './src/core/services/MQTTService'

import { Account, Account_darkTheme, ChooseHome, ChooseRoom, HistoryDevice, Home, Info_user, Login} from './src/Screens/'

import MQTTProvider from './src/store/MQTTProvider'
import AppProvider from './src/store/AppProvider'
import { AppContext } from './src/store/authContext';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 45, 85)',
    background: '#363636'
  },
};

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


const MyDrawer = () => {
  return (
    <Drawer.Navigator initialRouteName="Trang chủ" >
      <Drawer.Screen name="Chọn nhà" component={ChooseHome} />
      <Drawer.Screen name="Chọn phòng" component={ChooseRoom} />
      <Drawer.Screen name="Trang chủ" component={Home} />
      <Drawer.Screen name="Tài khoản" component={Account} />
      <Drawer.Screen name="Thông tin tài khoản" component={Info_user} />
      <Drawer.Screen name="Lịch sử hoạt động" component={HistoryDevice} />
      {/* <Drawer.Screen name="Đăng xuất" component={Login}/> */}
    </Drawer.Navigator>
  )
}

const MyStack = () => {
  const context = useContext(AppContext)
  const state = context.state

  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />

      {
        state.isLogin && (
          <Stack.Screen name="UserIn" component={MyDrawer} />
        )
      }
    </Stack.Navigator>
  )
}

export default function App() {

  return (
    <NavigationContainer theme={MyTheme}>
      <AppProvider>
        <MQTTProvider>
          <MyStack />
        </MQTTProvider>
      </AppProvider>
    </NavigationContainer>
  );
}

styles = StyleSheet.create({
  base: {
    backgroundColor: '#363636',
  }
})
