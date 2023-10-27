import React, { useState } from 'react';
import { View, TextInput } from 'react-native';

export default function InputLocation() {
  const [ myLocation, setMyLocation] = useState('');
  return (
    <View style={styles.inputField}>
      <TextInput 
      placeholder="Enter your Location"
      value={myLocation}
      onChangeText={(text) => setMyLocation(text)} />
      <TextInput 
      placeholder="Enter your Location"
      value={myLocation}
      onChangeText={(text) => setMyLocation(text)} />
    </View>
  );
}
