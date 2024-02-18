import React from 'react'
import {View, Text, Image} from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { layout, text } from '../components/Styles';

export default function HomeScreen({ navigation }) {
    return (
        <SafeAreaProvider>
            <View style={layout.homePage}>
                <Image style={{flex: 1, aspectRatio: 0.7, maxHeight:100, minWidth:700, resizeMode:"contain"}} source={require('../assets/calgaryskyline.png')}/>
                <Text style={text.heading}>Home Screen</Text>
            </View>
        </SafeAreaProvider>
)};