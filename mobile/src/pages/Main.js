import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, View, Text, TextInput, TouchableOpacity } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location';
import { MaterialIcons } from '@expo/vector-icons';

function Main({ navigation }) {
    const [currentRegion, setCurrentRegion] = useState(null);

    useEffect(() => {
        async function loadInitialPosition() {
            const granted = await requestPermissionsAsync();

            if (granted) {
                const { coords } = await getCurrentPositionAsync({
                    enableHighAccuracy: true,
                });

                const { latitude, longitude } = coords;
                setCurrentRegion({
                    latitude,
                    longitude,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                })
            }
        }

        loadInitialPosition();
    }, []);

    if (!currentRegion) {
        return null;
    }
    return (
        <>
            <MapView initialRegion={currentRegion} style={styles.map}>
                <Marker coordinate={{ latitude: -28.443098, longitude: -52.201851 }}>
                    <Image style={styles.avatar} source={{ uri: 'https://avatars2.githubusercontent.com/u/34141109?s=460&v=4' }} />

                    <Callout onPress={() => {
                        navigation.navigate('Profile', { github_username: 'diego3g' });
                    }}>
                        <View style={styles.callout}>
                            <Text style={styles.devName}>Roger Brusamarello</Text>
                            <Text style={styles.devBio}>Acadêmico em Análise e Desenvolvimento de Sistema pela Universidade de Passo Fundo. Desenvolvedor Mobile. Desenvolvedor Front-End.</Text>
                            <Text style={styles.devTechs}>Flutter, ReactJS</Text>
                        </View>
                    </Callout>
                </Marker>
            </MapView>
            <View style={styles.searchForm}>
                <TextInput
                    styles={styles.searchInput}
                    placeholder="Buscar devs por techs..."
                    placeholderTextColor="#999"
                    autoCapitalize="words"
                    autoCorrect={false}
                />
                <TouchableOpacity onPress={ () => {} } styles={styles.loadButton}>
                    <MaterialIcons name="my-location" size={20} color="#FFF"/>
                </TouchableOpacity>
            </View>
        </>
    );

}

const styles = StyleSheet.create({
    map: {
        flex: 1
    },
    avatar: {
        height: 54,
        width: 54,
        borderRadius: 4,
        borderWidth: 4,
        borderColor: '#FFF',
    },
    callout: {
        width: 260
    },
    devName: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    devBio: {
        color: '#666',
        marginTop: 5,
    },
    devTechs: {
        marginTop: 5,
    },
});

export default Main;