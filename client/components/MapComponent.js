import React from 'react';
import { View } from 'react-native';
import MapView from 'react-native-maps';
function MapComponent(){
    return(
        <View style={{ flex: 1 }}>
            <MapView style={{ flex: 1, width: '100%'}}
             initialRegion={{
                latitude: 37.00,
                longitude: -122.25,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0941,
             }} />
        </View>
    )
}

export default MapComponent;