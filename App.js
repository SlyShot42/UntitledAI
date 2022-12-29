import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { SearchBar } from 'react-native-ios-kit';
import { PageControlView } from 'react-native-ios-kit';
import { Title1 } from 'react-native-ios-kit';
import { DefaultTheme, ThemeProvider } from 'react-native-ios-kit';
import color from 'color';
import { KeyboardAvoidingView } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      pages: [
        {
          title: 'First page',
          content: 'This is the content for the first page',
        },
        {
          title: 'Second page',
          content: 'This is the content for the second page',
        },
        {
          title: 'Third page',
          content: 'This is the content for the third page',
        },
      ],
    };
  }
  
addPage = text => {
  this.setState(prevState => ({
    pages: [
      ...prevState.pages,
      {
        title: text,
        content: 'This is the content for the new page',
      },
    ],
  }));
};


  render() {
    return (
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView style={styles.container} behavior="padding">
          <View style={{ flex: 0.92 }}>
            <PageControlView defaultPage={1}>
              {this.state.pages.map(page => (
                <View style={styles.container}>
                  <Title1>{page.title}</Title1>
                  <Text>{page.content}</Text>
                </View>
              ))}
            </PageControlView>
          </View>
          <View style={{ flex: 0.08 }}>
            <SearchBar
              value={this.state.text}
              onValueChange={this.addPage}
              withCancel
              animated={true}
            />
          </View>
          <StatusBar style="auto" />
        </KeyboardAvoidingView>
      </SafeAreaView> 
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




