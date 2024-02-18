import React from 'react';
import { Text, Pressable, Image } from 'react-native';
import { text, layout, images } from './Styles';

export default function RenderItem( navigation, item ) {
  // console.log(item)
  return (
      <Pressable style={layout.card} onPress={() => {navigation.navigate("CardInfo", {item})}}>
          <Image style={images.card} source={{uri: item.item.pic_url}}/>
          <Text style={text.card}>{item.item.name}</Text>
      </Pressable>
  );
}