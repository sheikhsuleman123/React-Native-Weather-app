import React, { PureComponent } from 'react'
import {StyleSheet, Text, View, Image } from 'react-native'

export default class Header extends PureComponent {
    render() {
        return (
            <View>
                <Text style={styles.text}> Weather Forcast</Text>
                <Image source={{ uri: `https://openweathermap.org/img/wn/${this.props.data[0].weather[0].icon}@2x.png` }} style={styles.img} />
                <Text style={styles.degree}> {this.props.data[0].main.temp}&deg; </Text>
                <Text style={styles.cityname}> {this.props.data[1].name}, {this.props.data[1].country} </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  text: {
    fontFamily:'Arial',
      fontSize: 20,
      color: '#333',
      fontWeight: 'bold',
      textAlign:'center',
  },
  img : {
    height: 100,
    width: 100,
    alignSelf:'center',
  },
  degree: {
      fontFamily: 'Arial',
      fontSize: 27,
      fontWeight: '900',
      textAlign: 'center'
  },
  cityname: {
      fontSize: 23,
      color:'#616A6B',
      textAlign:'center',
      marginVertical: 7
  }
})