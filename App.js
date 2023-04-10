import React, { createContext, useState, useEffect, useContext } from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, ScrollView } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
//import MQTTService from './src/core/services/MQTTService'

import { Account, Account_darkTheme, ChooseHome, ChooseRoom, HistoryDevice, Home, Info_user, Login } from './src/Screens/'

import MQTTProvider from './src/store/MQTTProvider'

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
      <MQTTProvider>
        <Stack.Navigator initialRouteName="Trang chủ" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="x" component={MyDrawer} />
          {/* <Drawer.Screen name="Chọn nhà" component={ChooseHome} />
              <Drawer.Screen name="Chọn phòng" component={ChooseRoom} />
              <Drawer.Screen name="Trang chủ" component={Home} />
              <Drawer.Screen name="Tài khoản" component={Account} />
              <Drawer.Screen name="Thông tin tài khoản" component={Info_user} />
              <Drawer.Screen name="Lịch sử hoạt động" component={HistoryDevice} /> */}
        </Stack.Navigator>
      </MQTTProvider>
    </NavigationContainer>
  );
}

styles = StyleSheet.create({
  base: {
    backgroundColor: '#363636',
  }
})
