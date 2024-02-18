import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { Image } from 'react-native';
import { themeColours } from './Styles';
// import { IconButton } from './CustomButton';

const LoginHeader = () => {

  return (
    <Appbar.Header style={{margin:20, justifyContent:'center', alignItems:'center', backgroundColor:themeColours.pink}}>
      <Image style={{flex: 1, aspectRatio: 1.5, resizeMode: 'contain',}} source={require('../assets/DiscoverYYC_logo.png')}/>
    </Appbar.Header>
  );
};

const Header = () => {

  return (
    <Appbar.Header style={{margin:20, justifyContent:'center', alignItems:'center', backgroundColor:themeColours.pink}}>
      <Image style={{flex: 1, aspectRatio: 1.5, resizeMode: 'contain',}} source={require('../assets/DiscoverYYC_logo.png')}/>
        {/* <IconButton onPress={() => console.log("Open Menu")} name={"list-outline"}/> */}
    </Appbar.Header>
  );
};

export { LoginHeader, Header };