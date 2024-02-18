import React from 'react';
import { Text, Pressable } from 'react-native';
// import InsetShadow from "react-native-inset-shadow";
import { themeColours, text, buttons } from './Styles';
import { Ionicons } from '@expo/vector-icons';

export function CustomButton(props) {
  const {onPress, title} = props;
  return ( 
    <Pressable style={buttons.primary} onPress={onPress}>
      <Text style={text.button}> {title} </Text>
    </Pressable>
  );
};

export function IconButton(props) {
  const {onPress, name, size=65, color=themeColours.secondary} = props;
  return ( 
    <Pressable onPress={onPress}>
      <Ionicons name={name} size={size} color={color}/>
    </Pressable>
  );
};
