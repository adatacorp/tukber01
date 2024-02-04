import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

export default function InputLocation() {
  const [location, setMyLocation] = useState('');
  const [destination, setDestination] = useState ('');

  return (
    <View style={styles.inputField}>
      <GooglePlacesAutocomplete
        placeholder="Enter your Location"
        minLength={2}
        autoFocus={false}
        returnKeyType={'search'}
        fetchDetails={true}
        onPress={(data, details = null) => {
          // Handle the selected location here
          console.log(data, details);
          setMyLocation(data.description);
        }}
        query={{
          key: 'AIzaSyDyril7q0T7GTHNIksKwCFcJP9s9VkHunM',
          language: 'en',
        }}
        requestUrl={{
        useOnPlatform: 'web',
         url: 'https://maps.googleapis.com/maps/api',
          }}
      />
      <GooglePlacesAutocomplete
        placeholder="Enter your Destination"
        minLength={2}
        autoFocus={false}
        returnKeyType={'search'}
        fetchDetails={true}
        onPress={(data, details = null) => {
          // Handle the selected destination here
          console.log(data, details);
          setDestination(data.description);
        }}
        query={{
          key: 'AIzaSyDyril7q0T7GTHNIksKwCFcJP9s9VkHunM',
          language: 'en',
        }}
        requestUrl={{
    useOnPlatform: 'web', // Specify that this is for the web platform
    url: 'https://maps.googleapis.com/maps/api',
  }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputField: {
    display: 'flex',
  },
});
