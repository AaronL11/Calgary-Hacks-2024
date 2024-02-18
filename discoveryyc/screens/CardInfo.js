import React from 'react'
import {View, Text, Button} from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { layout, text } from '../components/Styles';
import { CustomButton } from '../components/CustomButton';

export default function CardInfo({ navigation }) {
    return (
        <SafeAreaProvider>
            <View style={layout.page}>
                <CustomButton title="Go back" onPress={() => {navigation.goBack()}}>Go Back</CustomButton>
                <Text style={text.heading}>Card Info</Text>
            </View>
        </SafeAreaProvider>
)};