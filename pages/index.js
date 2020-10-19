// @generated: @expo/next-adapter@2.1.40
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
export default function Index() {
  return (
    <View style={styles.container}>
      <Text accessibilityRole="header" style  ={styles.text}>
        Expo for Web & Next.js
      </Text>

      <Header />

      <View style={styles.textContainer}>
        <Text accessibilityRole="header" aria-level="2" style={styles.text}>
          <Text style={styles.text}>Welcome to Expo + Next.js 👋</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
  },
});
