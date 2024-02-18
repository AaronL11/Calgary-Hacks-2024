import React from 'react'
import {View, Text, Button} from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { layout, text } from '../components/Styles';

export default function CardInfo({ navigation }) {
    return (
        <SafeAreaProvider>
            <View style={layout.page}>
                <Button title="Go back" onPress={() => {console.log("hi")}}>Go Back</Button>
                <Text style={text.heading}>Card Info</Text>
            </View>
        </SafeAreaProvider>
)};