import React from 'react'
import {View, Text} from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { layout, text } from '../components/Styles';

export default function MapScreen({ navigation }) {
    return (
        <SafeAreaProvider>
            <View style={layout.page}>
                <Text style={text.heading}>Map Screen</Text>
            </View>
        </SafeAreaProvider>
)};