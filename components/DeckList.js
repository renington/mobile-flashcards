import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

import { getDecks } from '../utils/api'
import { white, gray } from '../utils/colors'

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
                            <TouchableOpacity style={[styles.deckItem, {'backgroundColor':white} ]}
                            onPress={() => this.props.navigation.navigate(
                                'DeckDetail',
                                {deckTitle: deck}
                            )} key={index}>
                                    <Text style={styles.title}>{deck}</Text>
                                    <Text>({decks[deck].questions.length}) cards</Text>
                            </TouchableOpacity>
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
    deckItem: {
        // flex: 1,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: gray,
        paddingBottom: 20
        // justifyContent: 'center',
    }
  });

export default DeckList