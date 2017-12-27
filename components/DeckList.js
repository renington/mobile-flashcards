import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { getDecks } from '../utils/api'

class DeckList extends Component {
    constructor(props){
        super(props)

        this.state = {
            decks: null
        }
    }

    componentDidMount() {
        getDecks().then((decks) => {
            this.setState({ decks: JSON.parse(decks) })
        })
    }

    render() {
        const { decks } = this.state

        if(decks !== null){
            return (
                <View>
                    {Object.keys(decks).map((deck, index) => {
                        return (
                            <View key={index}>
                                <Text style={styles.title}>{deck}</Text>
                                <Text>({decks[deck].questions.length}) cards</Text>
                            </View>
                        )
                    })}
                </View>
            )
        }else{
            return <Text>Loading...</Text>
        }
    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        paddingTop: 20,
        paddingBottom: 20
    },
  });

export default DeckList