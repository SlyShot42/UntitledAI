import { StatusBar } from 'expo-status-bar';
import { Ionicons } from "@expo/vector-icons"
import { TouchableOpacity } from 'react-native'
import React, { Component, useState } from 'react';
import { ScrollView } from 'react-native';
import { StyleSheet, SafeAreaView } from 'react-native';
import { View } from 'react-native';
import { KeyboardAvoidingView } from 'react-native';
import { TextInput } from 'react-native';

export default function App() {
  const [input, setInput] = useState('');

  const submitPrompt = () => {};
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
        keyboardVerticalOffset={0}
        >
          
          <ScrollView></ScrollView>
          <View style={styles.footer}>
            <TextInput
            allowFontScaling
            style={styles.input}
            placeholder='enter prompt...'
            placeholderTextColor='grey'
            value={input}
            onChange={text => setInput(text)}
            />
            <TouchableOpacity onPress={submitPrompt} activeOpacity={0.5}>
              <Ionicons name='arrow-forward-circle-outline' size={30} color='#2B68E6'/>
            </TouchableOpacity>
          </View>
       
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    padding: 10
  },
  input: {
    bottom: 0,
    height: 40,
    flex: 1,
    marginRight: 10,
    borderColor: 'transparent',
    backgroundColor: '#ECECEC',
    borderWidth: 1,
    padding: 10,
    color: 'grey',
    borderRadius: 30,
  },
});
