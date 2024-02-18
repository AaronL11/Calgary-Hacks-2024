import React from 'react'
import { View, Text, TextInput } from 'react-native';
import { CustomButton } from '../components/CustomButton';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { layout, inputBox, text } from '../components/Styles';

export default function LoginScreen({ navigation }) {
        return (
            <SafeAreaProvider>
                <View style={layout.page}>
                    <View style={{flex:1}} />
                    <View style={{flex:15, marginTop:60}}>
                        <Text style={text.heading}> Login </Text>
                        <TextInput style={inputBox.textInput}> Username </TextInput>
                        <TextInput style={inputBox.textInput}> Password </TextInput>
                        <View style={{flexDirection:'column', alignItems:'center'}}>
                            <CustomButton onPress={() => navigation.navigate("TabNavigator")} title="Connect" />
                        </View>
                    </View>
                    <View style={{flex:1}} />
                </View>
            </SafeAreaProvider>
        );
};

