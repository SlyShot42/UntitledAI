import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [name, setName] = useState('');

  const askName = () => {
    Alert.prompt(
      'What is your name?',
      'Enter your name below:',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: (name) => setName(name),
        },
      ],
      'plain-text'
    );
  };

  return (
    <View style={styles.container}>
      {name ? (
        <Text>Hello {name}!</Text>
      ) : (
        <Text onPress={askName}>
          Hello world. Click here to tell me your name.
        </Text>
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
