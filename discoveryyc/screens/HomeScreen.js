import React from 'react'
import {View, Text, Image} from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { layout, text } from '../components/Styles';

export default function HomeScreen({ navigation }) {
    return (
        <SafeAreaProvider>
            <View style={layout.homePage}>
                <Image style={{width:"100%", maxHeight:"12%", }} source={require('../assets/calgaryskyline.png')}/>
            </View>
        </SafeAreaProvider>
)};