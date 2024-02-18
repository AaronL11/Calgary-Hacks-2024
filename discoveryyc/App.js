import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { HeaderBackButton } from '@react-navigation/elements';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Header } from './components/TopBar';
import LoginScreen from './screens/LoginScreen';
import CardInfo from './screens/CardInfo';
import TabNavigator from './components/BottomBar';

const Stack = createNativeStackNavigator();

export default function App() {
  let loggedIn = true;
  let startScreen;
  if (loggedIn) {
    startScreen = "TabNavigator";
  } else {
    startScreen = "Login";
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={startScreen}>
        <Stack.Screen name="Login" component={LoginScreen} options={{header: (props) => <Header/>}}/>
        <Stack.Screen name="TabNavigator" component={TabNavigator} options={{header: (props) => <Header/>}}/>
        <Stack.Screen name="CardInfo" component={CardInfo} options={{ header: (props) => <Header/> }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
