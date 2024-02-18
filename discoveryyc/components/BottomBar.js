import * as React from 'react';
import { PixelRatio } from 'react-native'
import { themeColours, bottomBarStyles } from './Styles';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import MenuScreen from '../screens/MenuScreen';
import MapScreen from '../screens/MapScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return ( <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
              let iconName;
              switch (route.name) {
                  case "Home":
                      iconName = focused ? "home" : "home-outline";
                      break;
                  case "Menu":
                      iconName = focused ? "grid" : "grid-outline";
                      break;
                  case "Map":
                    iconName = focused ? "map" : "map-outline";
                    break;
                  default:
                      break;
              }

              return <Ionicons name={iconName} size={bottomBarStyles.iconSize} color={themeColours.secondary} />;
          },
          tabBarActiveBackgroundColor: bottomBarStyles.activeBackColour,
          tabBarInactiveBackgroundColor:bottomBarStyles.inactiveBackColour,
          tabBarLabelStyle: [
            {
              paddingBottom: PixelRatio.getPixelSizeForLayoutSize(3),
              fontSize: 10,
            }
          ],
          tabBarStyle: [
            {
              "display": "stretch",
              "paddingBottom": 0,
              "borderTopWidth": 0
            }
          ]
      })}
  >
    <Tab.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
      <Tab.Screen name="Menu" component={MenuScreen} options={{headerShown: false}}/>
      <Tab.Screen name="Map" component={MapScreen} options={{headerShown: false}}/>
  </Tab.Navigator>
  );
};