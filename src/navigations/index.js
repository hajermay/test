import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView, StatusBar} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../scenes/home';
import DetailUser from '../scenes/detailUser';
import styles from './styles';

const Stack = createStackNavigator();
const Navigator = () => {
  return (
    <SafeAreaView style={styles.statusBarContainer}>
      <StatusBar barStyle="dark-content" backgroundColor={'#FFFF'} />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="home" mode="modal" headerMode="none">
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen name="detailUser" component={DetailUser} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};
export default Navigator;
