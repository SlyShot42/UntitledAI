import { StatusBar } from 'expo-status-bar';
import { Ionicons } from "@expo/vector-icons"
import { TouchableOpacity } from 'react-native'
import React, { Component, useState } from 'react';
import { ScrollView } from 'react-native';
import { StyleSheet, SafeAreaView } from 'react-native';
import { View } from 'react-native';
import { KeyboardAvoidingView } from 'react-native';
import { TextInput } from 'react-native';
import { Keyboard } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native';
import Carousel from 'react-native-snap-carousel'
import * as Haptics from 'expo-haptics';


export default function App() {
  const [input, setInput] = useState('');


  const submitPrompt = () => {
    Keyboard.dismiss()
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
  };

  const _renderItem = ({item, index}) => {
    return (
        <View style={styles.slide}>
            <Text style={styles.title}>{ item.title }</Text>
        </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
        keyboardVerticalOffset={0.5}
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss()}>
            <>
              {/* <Carousel
                ref={(c) => { this._carousel = c; }}
                data={this.state.entries}
                renderItem={_renderItem}
                sliderWidth={sliderWidth}
                itemWidth={itemWidth}
              /> */}
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
                  <Ionicons name='arrow-forward-circle' size={40} color='#0BE23B'/>
                </TouchableOpacity>
              </View>
            </>
          </TouchableWithoutFeedback>
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
    alignItems: 'flex-start',
    borderTopWidth: 1,
    borderTopColor: '#EBEBEB',
    
    width: '100%',
    padding: 10
  },
  input: {
    bottom: 0,
    height: 40,
    flex: 1,
    marginRight: 11,
    borderColor: 'transparent',
    backgroundColor: '#ECECEC',
    borderWidth: 1,
    padding: 10,
    color: 'grey',
    borderRadius: 30,
  },
});
