import React, { useState } from 'react';
import { 
    View, Text, TouchableOpacity, StyleSheet, Image, TextInput
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

function Card({ title, onPress, imageSource }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={styles.cardDesign}>
        <Text>{title}</Text>
        <Image source={imageSource} style={{ width: 100, height: 100, marginBottom: 10 }} />
      </View>
    </TouchableOpacity>
  );
}

function HomepageCards() {
const [ location, setLocation ] = useState('');
const navigation = useNavigation();
  return (
    <View style={styles.cardBox}>
      <View>
      <TextInput
       style={styles.inputLocation}
       placeholder="Enter Location"
       value={location}
       onChangeText={(text) => setLocation(text)}
      />
      <TouchableOpacity onPress={() => navigation.navigate('InputLocation')}>
      <MaterialIcons name="send" />
      </TouchableOpacity>
      </View>
      <View style={styles.cardContainer}>
      <Card title="Driver" onPress={() => navigation.navigate('InputLocation')} />
      <Card title="Rider" onPress={() => navigation.navigate('InputLocation')} />
      <Card title="Courier" onPress={() => navigation.navigate('InputLocation')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    cardDesign: {
        backgroundColor: 'lightblue',
        padding: 7,
        margin: 3,
        borderRadius: 10,
    },
    cardBox: {
        flexDirection: 'column',
        backgroundColor: '#FFAA33',
        height: 'fit-content'
    },
    cardContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    inputLocation: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 5,
        paddingLeft: 10,
        borderRadius: 10,
        backgroundColor: 'white', 
    },
})
export default HomepageCards;
