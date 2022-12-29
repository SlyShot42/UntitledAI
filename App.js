import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SearchBar } from 'react-native-ios-kit';
import { PageControlView } from 'react-native-ios-kit';
import { Title1 } from 'react-native-ios-kit';
import { Title2 } from 'react-native-ios-kit';
import { Headline } from 'react-native-ios-kit';
import { Image } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }
  
  render() {
    return (
      <View style={styles.container}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'  }}>
      <Image
      source={{ uri: 'https://static.wixstatic.com/media/55a99a_cc804f3d039b44f9be6a15c5f1ae8550~mv2.png/v1/fill/w_1024,h_1024,al_c,q_90,enc_auto/My%20project-1.png' }}
      style={{ width: 100, height: 100, marginTop: 125 }}
      />
      <PageControlView defaultPage={1}>
      <View style={styles.container}>
      <Title2>"What are some differences between Shakespeare and Donald Trump's communication style?</Title2>
      </View>
      <View style={styles.container}>
      <Title2>"What role does geometry play in theoretical physics?"</Title2>
      </View>
      <View style={styles.container}>
      <Title2>"How to build an app that teaches  about philosophy?"</Title2>
      </View>
      </PageControlView>
      </View>
      <View style={{ flex: .1 }}>
      <SearchBar
      value={this.state.text}
      onValueChange={text => this.setState({ text })}
      withCancel
      animated
      />
      </View>
        <Text> {this.state.text}</Text>
      <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 5,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;