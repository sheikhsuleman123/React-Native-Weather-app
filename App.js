import React, { Component } from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';

// Component
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

let url = 'https://api.openweathermap.org/data/2.5/forecast?q=Faisalabad,pk&appid=0dc41e2809666072145b839a7fcab3a2&units=metric';

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      list: null,
      detail: null,
    }
    this.getWeatherReport = this.getWeatherReport.bind(this);
  }

  async getWeatherReport() { 
    const response = await fetch('https://api.openweathermap.org/data/2.5/forecast?q=Faisalabad,pk&appid=0dc41e2809666072145b839a7fcab3a2&units=metric')
    const data = await response.json();
      this.setState({
        report : {
          list : [data.list[0],data.list[1],data.list[2],data.list[3]],
          detail : data.city,
        }
      })
    }

 async componentDidMount() {
   await this.getWeatherReport();
    console.log(this.state.report);
  }
  render() {
    return (
  
  <SafeAreaView style={{ flex: 1 }}>
        
       <View style={styles.container}>
         <Header />
         <Content time={"12"} temp={this.state.temp} />
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