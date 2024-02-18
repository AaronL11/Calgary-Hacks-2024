import React, { useEffect, useState } from 'react'
import { Platform, Image, View, Text, Pressable, TextInput, FlatList } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { inputBox, layout, text, images } from '../components/Styles';
import RenderItem from '../components/Item';

const url = "http://10.13.149.40:4344/sites/"

export default function MenuScreen({ navigation }) {
    const [markers, setMarkers] = useState([]);
    const [renderedMarkers, setRenderedMarkers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                let ms = responseJson.map(({ _id: { $oid }, name, pic_url }) => {
                    let x = { _id: { $oid }, name, pic_url };
                    return x;
                });
                return ms
            })
            .then(markers => {
                setMarkers(markers)
                setRenderedMarkers(markers)
                setLoading(false)
            })
            .catch(error => {
                console.log(error)
            });
    }, []);

    const filterByName = () => {
        const searchTerm = search.toLowerCase();
        if (!searchTerm.length) {
            setRenderedMarkers(markers);
            return;
        }

        const result = markers.filter((marker) => {
            return marker.name.toLowerCase().includes(searchTerm);
        });

        console.log(result.length);
        setRenderedMarkers(result);
    }

    return (
        <SafeAreaProvider>
            <View style={layout.page}>
                <Text style={text.heading}>Landmarks</Text>
                <TextInput
                    onChangeText={setSearch}
                    onBlur={() => { filterByName(); }}
                    returnKeyType='done'
                    style={inputBox.searchBar}
                />
                <FlatList
                    ItemSeparatorComponent={
                        Platform.OS !== 'android' &&
                        (({ highlighted }) => (
                            <View
                                style={[highlighted && { marginLeft: 0 }]}
                            />
                        ))
                    }
                    keyExtractor={(item) => item._id.$oid}
                    data={renderedMarkers}
                    numColumns={2}
                    renderItem={(item) => RenderItem(navigation, item)}
                />
            </View>
        </SafeAreaProvider>
    )
};

function renderItem(navigation, item) {
    return (
        <Pressable style={layout.card} onPress={() => { console.log(item.item._id.$oid) }}>
            {/* // <Pressable style={layout.card} onPress={() => {navigation.navigate("CardInfo")}}> */}
            <Image style={images.card} source={{ uri: item.item.pic_url }} />
            <Text style={text.card}>{item.item.name}</Text>
        </Pressable>
    );
}

