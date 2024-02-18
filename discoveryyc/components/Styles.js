import { StyleSheet, PixelRatio } from "react-native";

export const themeColours = {
    red: "#A30A11",
    silver: "#BFB5AF",
    bone: "#ECE2D0",
    pink: "#D5B9B2",
    teal: "#0F7173"};
export const bottomBarStyles = {iconSize: PixelRatio.getPixelSizeForLayoutSize(10), activeBackColour: '#C59F96', inactiveBackColour: '#D5B9B2'};

export const layout = StyleSheet.create({
    page: {
        flex: 1,
        flexDirection:'column', 
        backgroundColor: themeColours.bone,
        margin: 0
    },
    homePage: {
        flex: 1,
        flexDirection:'column',
        justifyContent: 'flex-start',
        backgroundColor: themeColours.bone,
        margin: 0
    }
});

export const text = StyleSheet.create({
    heading: {
        fontSize: 35,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black',
    },
    small: {
        fontSize: 10,
        letterSpacing: 0.25,
        color: 'white',
    },
    button: {
        fontSize: 25,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    }
});

export const buttons = StyleSheet.create({
    primary: {
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 30,
      width: '45%',
      height: '30%',
      marginTop: '15%',
      backgroundColor: themeColours.teal
    }
});

export const inputBox = StyleSheet.create({
    textInput: {
        borderRadius: 50,
        backgroundColor: 'white',
        width: '100%',
        height: '10%',
        fontSize: 15,
        marginTop: '10%',
        paddingLeft: 15
    }
});

export const centStyles = StyleSheet.create({
    page: {
        flexDirection: 'column', 
        flex: 1, 
        backgroundColor: 'black',
        marginHorizontal: PixelRatio.getPixelSizeForLayoutSize(3),
        marginBottom: 0
    },
    mainStyle: {
        flex: 2, 
        flexDirection: 'column', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        backgroundColor: themeColours.secondary, 
        borderRadius: 10, 
        marginBottom: PixelRatio.getPixelSizeForLayoutSize(5), 
        paddingBottom: PixelRatio.getPixelSizeForLayoutSize(2),
    },
    stateStyle: {
        flex: 1, 
        alignItems:'center', 
        borderRadius: 10, 
        borderWidth:PixelRatio.getPixelSizeForLayoutSize(0.3), 
        borderColor:'black', 
        margin: PixelRatio.getPixelSizeForLayoutSize(1), 
        paddingVertical: PixelRatio.getPixelSizeForLayoutSize(3), 
    },
    dataStyle: {
        flex: 1, 
        alignItems: 'center', 
        borderRadius: 10, 
        borderWidth: PixelRatio.getPixelSizeForLayoutSize(0.3), 
        borderColor: 'black', 
        marginHorizontal: PixelRatio.getPixelSizeForLayoutSize(1), 
        paddingVertical: PixelRatio.getPixelSizeForLayoutSize(2), 
        backgroundColor: "#333333"
    },
    textDisplay: {
        borderRadius:5, 
        alignItems:'center', 
        marginTop: PixelRatio.getPixelSizeForLayoutSize(1), 
        paddingVertical: PixelRatio.getPixelSizeForLayoutSize(2), 
        paddingHorizontal: PixelRatio.getPixelSizeForLayoutSize(5), 
        backgroundColor:'black'
    }
});