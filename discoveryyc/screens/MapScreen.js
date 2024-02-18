import React, {useEffect, useState} from 'react'
import {View, Text } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { layout, text } from '../components/Styles';

const url = 'http://10.13.149.40:4344/sites'

export default function MapScreen({ navigation }) {
    const [markers, setMarkers] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((responseJson) =>{
                let ms = responseJson.map(({ name, address, point: {coordinates}}) => {
                    let x = { name, address, coordinates };
                    return x;
                });
                return ms
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
            <View style={layout.page}>
                <Text style={text.heading}>Map Screen</Text>
                <MapView
                    style={{ flex : 1, marginTop: 15, marginRight: 15, marginLeft:15}}
                    provider={PROVIDER_GOOGLE}
                    showsUserLocation
                    showsMyLocationButton
                    initialRegion={{
                        latitude: 51,
                        longitude: -114,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421
                    }}
                >
                    {markers.map(({name, address, coordinates}, index) => {
                        let [lon,lat] = coordinates;
                        return (
                        <Marker
                            flat={true}
                            icon={'../assets/mapicon.png'}
                            key={index}
                            title={name}
                            description={address}
                            coordinate={{
                                latitude: lat,
                                longitude: lon,
                            }}
                        />
                    )})}
                </MapView>
                <Text style={text.titlesTeal}>Find historical sites, public art, parks, and more, on the map!</Text>

            </View>
        </SafeAreaProvider>
)};
