import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HomepageCards from '/components/HomepageCards';

export default function Homepage() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to the Homepage</Text>
      <View style={styles.HomeBtmSection}>
      <HomepageCards />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  HomeBtmSection: {
    marginTop: 20,
  }
})