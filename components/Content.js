import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

import Card from './Card/Card';

import Rain from '../assets/rain.png';
import Sunny from '../assets/sunny.png';
import Moon from '../assets/moon.png';

export default class Content extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Card color1="#FF853E" color2="#FC686E" img={Rain} bgcolor="#FF853E" style={{borderTopLeftRadius: 50}} />
                <Card color1="#C85E8C" color2="#845B90" img={Sunny}  bgcolor="#fff" />
                <Card color1="#46527B" color2="#244457" img={Moon} bgcolor="#244457" style={{borderBottomRightRadius: 50}} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        justifyContent:'space-around'
    }
})