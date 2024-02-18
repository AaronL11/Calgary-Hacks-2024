import { StyleSheet, PixelRatio } from "react-native";

export const themeColours = {
    red: "#A30A11",
    silver: "#BFB5AF",
    bone: "#ECE2D0",
    pink: "#D5B9B2",
    teal: "#0F7173"
};
export const bottomBarStyles = { iconSize: PixelRatio.getPixelSizeForLayoutSize(10), activeBackColour: '#C59F96', inactiveBackColour: '#D5B9B2' };

export const layout = StyleSheet.create({
    page: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: themeColours.bone,
        margin: 0
    },
    homePage: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: themeColours.bone,
        margin: 0
    },
    card: {
        flex: 1,
        backgroundColor: 'white',
        padding: 20,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
    },
    card1:  {
        flex:2,
        backgroundColor: 'white',
        padding: 20,
        maxHeight: 300,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 8,
        marginHorizontal: 16,
        marginBottom:5,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
    }
});

export const text = StyleSheet.create({
    heading: {
        fontSize: 35,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: themeColours.red,
        marginTop: 20,
        
        textAlign:"center"
    },
    small: {
        fontSize: 15,
        // fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black',
        marginTop: 0,
        margin: 20
    },
    button: {
        fontSize: 25,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white'
    },
    card: {
        flex: 1,
        fontSize: 10,
        fontWeight: 'bold',
        textAlign: 'center',
        color: themeColours.teal,
        marginTop: 20
    },
    titlesRed: {
        marginBottom:5,
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: themeColours.red,
        marginTop: 20
    }, 
    titlesTeal: {
        marginBottom:15,
        marginLeft: 10,
        marginRight: 10,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: themeColours.teal,
        marginTop: 20
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
    },
    searchBar: {
        borderRadius: 50,
        fontSize: 24,
        margin: 10,
        paddingLeft: 22,
        width: '75%',
        marginLeft: "auto",
        height: 50,
        backgroundColor: 'white',
    }
});

export const images = StyleSheet.create({
    card: {
        flex: 2,
        aspectRatio: 1.5,
        maxHeight: 90,
        resizeMode: 'contain',
    },
    page: {
        margin: 20,
        marginBottom: 0,
        minHeight: 200,
        resizeMode: 'contain',
    }
});