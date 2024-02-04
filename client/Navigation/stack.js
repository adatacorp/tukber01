import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import Homepage from '../components/Homepage';
import InputLocation from '../components/InputLocation';
import HomepageCards from '../components/HomepageCards';
import HomeScreen from '../components/HomeScreen';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Homepage" component={Homepage} 
     options={{ headerTitle: 'Tukber', headerRight: () => (  
      <TouchableOpacity>
        <Image source={require('../assets/profile-icon.png')} style={styles.profileImg} />
      </TouchableOpacity>
     ),
     }} 
     />
     <Stack.Screen name="InputLocation" component={InputLocation}/>
     <Stack.Screen name="HomepageCards" component={HomepageCards}/>

  </Stack.Navigator>
  )
}

  
const styles = StyleSheet.create({
  profileImg: {
    width: '10%',
    height: '10%'
  }
});

export default HomeStack;