import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SearchBar } from 'react-native-ios-kit';
import { PageControlView } from 'react-native-ios-kit';
import { Title1 } from 'react-native-ios-kit';

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
        <Text>Hello world. I am killed now.</Text>
        <View style={{ flex: 0.7 }}>
          <PageControlView defaultPage={1}>
            <View style={styles.container}>
              <Title1>First page.</Title1>
            </View>
            <View style={styles.container}>
              <Title1>Second page.</Title1>
            </View>
            <View style={styles.container}>
              <Title1>Third page.</Title1>
            </View>
          </PageControlView>
        </View>
        <View style={{ flex: 0.3 }}>
          <SearchBar
            value={this.state.text}
            onValueChange={text => this.setState({ text })}
            withCancel
            animated
          />
        </View>
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;



