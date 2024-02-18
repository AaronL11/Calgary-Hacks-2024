import React, {useEffect, useState} from 'react'
import {View, Text } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { layout, text } from '../components/Styles';

const markers = [[-114.0586247,51.0405913]]


export default function MapScreen({ navigation }) {
    return (
        <SafeAreaProvider>
            <View style={layout.page}>
                <Text style={text.heading}>Map Screen</Text>
                <MapView
                    style={{ flex: 1 }}
                    provider={PROVIDER_GOOGLE}
                    showUserLocation
                    initialRegion={{
                        latitude: 51,
                        longitude: -114,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421
                    }}
                >
                    {
                        <Marker
                            key={{ index: 1 }}
                            coordinate={{
                                latitude=51.0405913,
                                longitude=-114.0586247
                            }}
                            title={{title: "hi"}}
                        />
                    }
                </MapView>
            </View>
        </SafeAreaProvider>
)};
