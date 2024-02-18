import React from 'react'
import {View, Text, Image, Pressable} from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { layout, text, themeColours, images } from '../components/Styles';

export default function Rewards({ navigation }) {
    return (
        <SafeAreaProvider>
            <View style={layout.homePage}>
                <Text style={{fontSize: 40,fontWeight: 'bold',letterSpacing: 0.25,color: "black",margin: 20}}>Rewards Coming Soon!!</Text>
                <Text style={{fontSize: 20,fontWeight: 'bold',letterSpacing: 0.25,color: themeColours.teal,margin: 20}}>Visit heritage sites in real life to collect points! Then, redeem your points for free passes to exciting places like Calgary Zoo and Heritage Park.</Text>
            </View>
        </SafeAreaProvider>
)};