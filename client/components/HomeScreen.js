import React from 'react';
import { Text, StatusBar, View, Button, StyleSheet, TouchableOpacity} from "react-native";
function HomeScreen({ navigation }) {
    const handleHomeScreen = () => {
      navigation.navigate('Homepage');
    }
   
    return (
      <View style={styles.container}>
        <Text>Welcome to Tukber</Text>
        <StatusBar style="auto" />
        <View style={styles.buttons}>
          <Button title="Request a Ride" onPress={handleHomeScreen}/>
          <View style={styles.userbtn}>
          <Button title="Log in" onPress={() => hendlebutton}  />
          <Button title="Sign in" onPress={() => hendlebutton} />
          </View>
        </View>
      </View>
    )
}
  
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttons: {
      alignItems: 'flex-end',
      width: '100%',
      gap: 20,
    },
    userbtn: {
     justifyContent: 'space-around',
     alignItems: 'flex-start',
     flexDirection: 'row',
     width: '100%',
    },
    profileImg: {
      width: '10%',
      height: '10%'
    }
});

export default HomeScreen;