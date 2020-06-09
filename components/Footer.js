import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class Footer extends Component {
    render() {
        return (
            <View>
                <Text style={styles.heading}> Additional Infom </Text>
                
                <View style={styles.container}>
                    <Text style={styles.minfo}>Wind:          <Text style={styles.sinfo}>12(m/h) </Text> </Text>
                    <Text style={styles.minfo}>Humidity: <Text style={styles.sinfo}>       55%</Text> </Text>    
                </View>
                <View style={styles.container}>
                    <Text style={styles.minfo}>Visibility:     <Text style={styles.sinfo}>25km </Text> </Text>
                    <Text style={styles.minfo}>UpV:                       <Text style={styles.sinfo}> 2</Text> </Text>    
                </View>
                
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
    },
    container:{
        flexDirection:'row',
        marginVertical:10,
        marginHorizontal:10,
        justifyContent:'space-between'      
    },
    minfo:{
        fontWeight:'bold'
    },
    sinfo:{
        fontWeight:'400'
    }
})