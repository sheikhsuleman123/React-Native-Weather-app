import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

export default class Card extends Component {
    render() {
        return (
            <View style={{backgroundColor:'orange'}}>
              <View style={{...styles.bgCard,backgroundColor:'orange' }}> 
                <Text style={styles.text} > 18:00 </Text>
                <Image source={require('../../assets/rain.png')} style={{...styles.img,marginVertical:20}} />
              </View>
               <View style={{...styles.bgCard ,zIndex: -1,backgroundColor:'#E74C3C',borderTopLeftRadius:60  }}>
                 <Text style={styles.text}> 12 &deg;</Text>
               </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    img : {
        height: 50,
        width: 50,
        marginTop: 75,
        alignSelf: 'center',
        position:'absolute',
        zIndex: 99,
    },
    bgCard : {
        width:'100%',
        height: 130,
        alignSelf:'center',
    },
    text : {
        color: '#fff',
        fontSize:25,
        textAlign:'center',
        marginVertical: 17
    }
})