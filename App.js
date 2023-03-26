import React, { createContext, useState, useEffect, useContext } from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, ScrollView } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Account from './src/Screens/Account';
import Info_user from './src/Screens/Info_user';
import HistoryDevice from './src/Screens/HistoryDevice';
import Account_darkTheme from './src/Screens/Account_darkTheme';

import Login from './src/Screens/Login'
import ChooseHome from './src/Screens/ChooseHome'
import ChooseRoom from './src/Screens/ChooseRoom'
import Home from './src/Screens/Home'

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
    <Drawer.Navigator initialRouteName="Login" >
      {/* <Drawer.Screen name="Login" component={Login}/> */}
      <Stack.Screen name="Login" component={Login} />
      <Drawer.Screen name="Chọn nhà" component={ChooseHome} />
      <Drawer.Screen name="Chọn phòng" component={ChooseRoom} />
      <Drawer.Screen name="Trang chủ" component={Home} />
      <Drawer.Screen name="Tài khoản" component={Account} />
      <Drawer.Screen name="Thông tin tài khoản" component={Info_user} />
      <Drawer.Screen name="Lịch sử hoạt động" component={HistoryDevice} />
    </Drawer.Navigator>
  )
}

export default function App() {

  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator initialRouteName="x" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="x" component={MyDrawer} />
        {/* <Drawer.Screen name="Chọn nhà" component={ChooseHome} />
        <Drawer.Screen name="Chọn phòng" component={ChooseRoom} />
        <Drawer.Screen name="Trang chủ" component={Home} />
        <Drawer.Screen name="Tài khoản" component={Account} />
        <Drawer.Screen name="Thông tin tài khoản" component={Info_user} />
        <Drawer.Screen name="Lịch sử hoạt động" component={HistoryDevice} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

styles = StyleSheet.create({
  base: {
    backgroundColor: '#363636',
  }
})
