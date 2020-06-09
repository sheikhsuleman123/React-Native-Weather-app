import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

export default class Card extends Component {
    render() {
        return (
            <View style={{backgroundColor:this.props.bgcolor,alignItems:'center',borderRadius:10}}>
              
              <View style={{...styles.bgCard,backgroundColor:this.props.color1,borderTopRightRadius:10,borderTopLeftRadius:10, ...this.props.style}}> 
                <Text style={styles.time} > 18:88 </Text>
                <Image source={this.props.img} style={{...styles.img,}} />
              </View>

               <View style={{...styles.bgCard ,zIndex: -1,backgroundColor:this.props.color2,...this.props.style,borderBottomRightRadius:10,borderBottomLeftRadius:10  }}>
                 <Text style={styles.deg}> 12 &deg;</Text>
               </View>
            
            </View>
        )
    }
}

const styles = StyleSheet.create({
    img : {
        height: 45,
        width: 45,
        marginTop: 70,
        alignSelf: 'center',
        position:'absolute',
        zIndex: 99,
    },
    bgCard : {
        width: 100,
        height: 100,
        alignSelf:'center',
    },
    time : {
        color: '#fff',
        fontSize:18,
        textAlign:'center',
        marginTop: 10
    },
    deg: {
        color: '#fff',
        fontSize:18,
        textAlign:'center',
        marginTop: '60%'
    }
})