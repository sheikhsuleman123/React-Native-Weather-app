import React, { Component } from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';

// Component
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
       <View style={styles.container}>
         <Header />
         <Content />
         <Footer />
       </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    margin: 20,
  }
})