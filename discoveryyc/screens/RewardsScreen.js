import React from 'react'
import {View, Text, Image} from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { layout, text, themeColours } from '../components/Styles';

export default function RewardsScreen({ navigation }) {
    return (
        <SafeAreaProvider>
            <View style={layout.page}>
                <Image style={{width:"100%", maxHeight:"12%", marginBottom:10}} source={require('../assets/calgaryskyline.png')}/>
                
                <Text style={text.heading}>Rewards System</Text>
                <Text style={{textAlign:"center", margin: 15}}>
                    Our rewards system is set up for you to be able to enjoy DiscoverYYC to the fullest. 
                    Everytime you visit any site that we know of, our app will sense youre location, and give you a point! 
                    Coming with friends or family gives you extra points. 
                    With these points you can gain free access to many paid sites in Calagry so that you can experience the culture and history!
                </Text>
            </View>
        </SafeAreaProvider>
)};