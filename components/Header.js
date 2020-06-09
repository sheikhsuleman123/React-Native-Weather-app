import React, { PureComponent } from 'react'
import {StyleSheet, Text, View, Image } from 'react-native'

export default class Header extends PureComponent {
    render() {
        return (
            <View>
                <Text style={styles.text}> Weather Forcast</Text>
                <Image source={require('../assets/sun.png')} style={styles.img} />
                <Text style={styles.degree}>31,9&deg; </Text>
                <Text style={styles.cityname}> FSD </Text>
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
    height: 50,
    width: 50,
    alignSelf:'center',
    marginVertical:7
  },
  degree: {
      fontFamily: 'Arial',
      fontSize: 30,
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