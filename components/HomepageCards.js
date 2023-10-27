import React, { useState } from 'react';
import { 
    View, Text, TouchableOpacity, StyleSheet, Image, TextInput
 } from 'react-native';

function Card({ title, onPress, imageSource }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={styles.cardDesign}>
        <Text>{title}</Text>
        <Image source={imageSource} style={{ width: 100, height: 100, marginBottom: 10 }} />      </View>
    </TouchableOpacity>
  );
}

function HomepageCards({ navigation }) {
const [ location, setLocation ] = useState('');
  return (
    <View style={styles.cardBox}>
      <View style={{ }}>
      <TextInput
       style={styles.inputLocation}
       placeholder="Enter Location"
       value={location}
       onChangeText={(text) => setLocation(text)}
      />
      </View>
      <View style={styles.cardContainer}>
      <Card title="Driver" onPress={() => console.log('Card 1 clicked')} />
      <Card title="Rider" onPress={() => console.log('Card 2 clicked')} />
      <Card title="Courier" onPress={() => console.log('Card 3 clicked')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    cardDesign: {
        backgroundColor: 'lightblue',
        padding: 20,
        margin: 10,
        borderRadius: 10,
    },
    cardBox: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end', // Push everything to the bottom
        backgroundColor: '#FFAA33',
        width: '100%',
    },
    cardContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between', // Arrange cards in a row with space between
    },
    inputLocation: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 10,
        paddingLeft: 10,
        borderRadius: 10,
        backgroundColor: 'white', // Add a white background to the input field
    },
})
export default HomepageCards;
