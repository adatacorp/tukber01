import React from 'react';
import { View, StyleSheet } from 'react-native';
import HomepageCards from './HomepageCards';
import MapComponent from './MapComponent';

export default function Homepage() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={styles.HomeBtmSection}>
      <MapComponent />
      <HomepageCards />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  HomeBtmSection: {
  }
})