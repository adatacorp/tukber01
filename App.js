import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Homepage from '/components/Homepage'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Homepage" component={Homepage} 
         options={{ headerTitle: 'Tukber', headerRight: () => (  
          <TouchableOpacity>
            <Image source={require('./assets/profile-icon.png')} style={styles.profileImg} />
          </TouchableOpacity>
         ),
         }} 
         />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

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
});
