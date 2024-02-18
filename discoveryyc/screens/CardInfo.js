import React from 'react'
import {ScrollView, Text, Image} from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { layout, text, images, themeColours } from '../components/Styles';
import { IconButton } from '../components/CustomButton';

export default function CardInfo({ route, navigation }) {
    const { item } = route.params.item;
    return (
        <SafeAreaProvider style={{backgroundColor: themeColours.bone}}>
            <IconButton onPress={() => {navigation.goBack()}} name="arrow-back-outline"/>
            <ScrollView style={layout.page}>
                <Image style={images.page} source={{uri: item.pic_url}}/>
                <Text style={text.heading}>{item.name}</Text>
                <Text style={text.small}>{item.significance_summ}</Text>
            </ScrollView>
        </SafeAreaProvider>
)};