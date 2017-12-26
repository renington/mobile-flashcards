import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const DeckList = () => {
    return (
        <View>
            <View>
                <Text style={styles.title}>Title Test</Text>
                <Text>(5) cards.</Text>
            </View>
            <View>
                <Text style={styles.title}>Title Test</Text>
                <Text>(5) cards.</Text>
            </View>
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

export default DeckList