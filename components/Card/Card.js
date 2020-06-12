import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

// import rain from '../../assets/rain.png';

export default class Card extends Component {
    render() {
        return (
            <View style={{backgroundColor:this.props.bgcolor,alignItems:'center',borderRadius:10}}>
              
              <View style={{...styles.bgCard,backgroundColor:this.props.color1,borderTopRightRadius:10,borderTopLeftRadius:10, ...this.props.style}}> 
                <Text style={styles.time}> {(this.props.data.dt_txt).split(' ')[1]} </Text>
                <Image source={{ uri : `https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/${this.props.data.weather[0].icon}.png`}} style={{...styles.img,}} />
              </View>

               <View style={{...styles.bgCard ,zIndex: -1,backgroundColor:this.props.color2,...this.props.style,borderBottomRightRadius:10,borderBottomLeftRadius:10  }}>
                 <Text style={styles.deg}> {this.props.data.main.temp} &deg;</Text>
               </View>
            
            </View>
        )
    }
}

const styles = StyleSheet.create({
    img : {
        height: 80,
        width: 80,
        marginTop: 60,
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