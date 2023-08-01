import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Nike from '../screens/Nike';
import SplashScreen from '../screens/SplashScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen() {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontSize:50}}>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function MainNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={SplashScreen} options={{headerShown: false}} />
        <Stack.Screen name="Home" component={Nike}
        options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigation;