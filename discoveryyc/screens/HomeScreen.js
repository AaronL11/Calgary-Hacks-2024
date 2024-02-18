import React from 'react'
import {View, Text, Image} from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { layout, text, themeColours } from '../components/Styles';

export default function HomeScreen({ navigation }) {
    return (
        <SafeAreaProvider>
            <View style={layout.homePage}>
                <Image style={{width:"100%", maxHeight:"12%", marginBottom:10}} source={require('../assets/calgaryskyline.png')}/>
                
                <View style={layout.introBox}>
                <Text style={{margin:30, textAlign:"center", textAlignVertical:"center", fontSize: 20, fontWeight:"bold", color:themeColours.teal}}>Have fun, build community, and get to know your city!</Text> 
                </View>
                
                
                <Text style={text.titlesRed}>Adventure of the Day:</Text>
                <Image style={{width:250, height:250, marginLeft: "auto", marginRight: "auto", margin:10, borderRadius: 15}} source={require('../assets/castlePicture.png')}/>
                <Text style={{textAlign:"center", marginBottom: 25}}>See More... </Text>
            </View>
        </SafeAreaProvider>
)};