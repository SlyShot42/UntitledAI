import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { SearchBar } from 'react-native-ios-kit';
import { PageControlView } from 'react-native-ios-kit';
import { Title1 } from 'react-native-ios-kit';
import { DefaultTheme, ThemeProvider } from 'react-native-ios-kit';
import color from 'color';
import { KeyboardAvoidingView } from 'react-native';
import { Image } from 'react-native'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      pages: [],
      currentPage: 0,
    };
  }
  
  addPage = () => {
    this.setState(prevState => ({
      pages: [
        ...prevState.pages,
        {
          title: this.state.text,
          content: 'This is the content for the new page',
        },
      ],
      currentPage: 2 // Set the current page to the last element
    }));
    this.setState({ text: '' })
  };
  

  

  render() {
    return (
      <SafeAreaView style={styles.container}>
        
        <KeyboardAvoidingView style={styles.container} behavior="padding">
          <View style={{ flex: 0.1, justifyContent: 'center', alignItems: 'center' }}>
            <Image
              source={{ uri: 'https://static.wixstatic.com/media/55a99a_cc804f3d039b44f9be6a15c5f1ae8550~mv2.png/v1/fill/w_1024,h_1024,al_c,q_90,enc_auto/My%20project-1.png' }}
              style={{ width: 100, height: 100, marginTop: 0, }}
            />
          </View>
          <View style={{ flex: 0.82 }}>
            <PageControlView defaultPage={2} currentPageIndicatorTintColor='red'>
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
              onValueChange={text => this.setState({ text })}
              onBlur={this.addPage}
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






