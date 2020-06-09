import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class Footer extends Component {
    render() {
        return (
            <View>
                <Text style={styles.heading}> Additional Infom </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    heading: {
        fontFamily: 'Arial',
        fontSize: 21,
        fontWeight: 'bold',
        marginTop: 5
    }
})