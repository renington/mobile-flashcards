import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const NewCard = () => {
    return (
        <View>
            <Text style={styles.title}>New Card</Text>
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

export default NewCard