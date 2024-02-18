import React from 'react'
import {View, Text} from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { layout, text } from '../components/Styles';

export default function MenuScreen({ navigation }) {
    return (
        <SafeAreaProvider>
            <View style={layout.page}>
                <Text style={text.heading}>Menu Screen</Text>
            </View>
        </SafeAreaProvider>
)};