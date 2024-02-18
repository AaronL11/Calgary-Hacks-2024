import React, {useEffect, useState} from 'react'
import {View, Text, Image, Pressable} from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RenderItem from '../components/Item';
import { layout, text, themeColours, images } from '../components/Styles';

const url = "http://10.13.149.40:4344/sites/"

export default function HomeScreen({ navigation }) {
    const [markers, setMarkers] = useState({_id:{$oid:1}, name:"", significance_summ:"", pic_url:"text.png"});
    const [loading, setLoading] = useState(true);
    // setMarkers({})
    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((responseJson) =>{
                let { _id:{$oid}, name, significance_summ, pic_url} = responseJson[Math.floor(Math.random() * responseJson.length) + 1]
                return { _id:{$oid}, name, significance_summ, pic_url}
            })  
            .then( markers => {
                setMarkers(markers)
                setLoading(false)
            })
            .catch( error => {
                console.log(error)
            });
    }, []);
     
    return (
        <SafeAreaProvider>
            <View style={layout.homePage}>
                <Image style={{width:"100%", maxHeight:"12%", marginBottom:10}} source={require('../assets/calgaryskyline.png')}/>
                
                <View style={layout.introBox}>
                <Text style={{margin:30, textAlign:"center", textAlignVertical:"center", fontSize: 20, fontWeight:"bold", color:themeColours.teal}}>Have fun, build community, and get to know your city!</Text> 
                </View>
                
                <Text style={text.titlesRed}>Adventure of the Day:</Text>
                <Pressable style={layout.card1} onPress={() => {navigation.navigate("CardInfo", {item:{item:markers}})}}>
                    <Image style={{flex: 2, aspectRatio: 1.5, resizeMode: 'contain'}} source={{uri: markers.pic_url}}/>
                    <Text style={{ flex: 1,fontSize: 25,fontWeight: 'bold',textAlign: 'center',color: themeColours.teal,marginTop: 20}}>{markers.name}</Text>
                </Pressable>
            </View>
        </SafeAreaProvider>
)};

function renderItem( navigation, item ) {
    console.log(item)
    console.log(item.pic_url)
    return (
        <Pressable style={layout.card} onPress={() => {navigation.navigate("CardInfo", {item})}}>
            <Image style={{flex: 2, aspectRatio: 1.5,  resizeMode: 'contain',}} source={{uri: item.pic_url}}/>
            <Text style={text.card}>{item.name}</Text>
        </Pressable>
    );
}