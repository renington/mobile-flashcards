import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Quiz = () => {
    return (
        <View>
            <Text style={styles.title}>Quiz</Text>
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

export default Quiz