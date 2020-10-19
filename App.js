import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import Index from './pages/index';
import Alternate from './pages/Alternate';
import Test from './pages/Test';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Index></Index>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const AppNavigator = createStackNavigator({
  'index': Index,
  'Alternate': Alternate,
  'Test': Test,
})

export default createAppContainer(AppNavigator)
