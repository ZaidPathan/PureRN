import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TodayComponent from './Component/TodayComponent';
import LoginComponent from './Component/LoginComponent';

export default function App() {
  return (
    <View style={styles.container}>
      <LoginComponent></LoginComponent>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0fff0',
  },
});
