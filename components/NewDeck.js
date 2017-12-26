import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const NewDeck = () => {
    return (
        <View>
            <Text style={styles.title}>New Deck</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        paddingTop: 20,
        paddingBottom: 20
    },
  });

export default NewDeck