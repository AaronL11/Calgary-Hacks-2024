import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginHeader, Header } from './components/TopBar';
import LoginScreen from './screens/LoginScreen';
import TabNavigator from './components/BottomBar';

const Stack = createNativeStackNavigator();

export default function App() {
  let loggedIn = false;
  let startScreen;
  if (loggedIn) {
    startScreen = "TabNavigator";
  } else {
    startScreen = "Login";
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={startScreen}>
        <Stack.Screen name="Login" component={LoginScreen} options={{header: (props) => <LoginHeader/>}}/>
        <Stack.Screen name="TabNavigator" component={TabNavigator} options={{header: (props) => <Header/>}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
