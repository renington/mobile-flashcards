import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import { connect } from 'react-redux'

import { getDecks } from '../utils/api'
import { white, gray, blue } from '../utils/colors'
import { fetchDecks } from '../actions'

class DeckList extends Component {
    componentDidMount() {
        getDecks().then((decks) => {
            this.props.dispatch(fetchDecks(decks))
        })
    }

    render() {
        const { decks } = this.props

        if(decks !== null){
            return (
                <ScrollView automaticallyAdjustContentInsets={false}>
                    <View>
                        {Object.keys(decks).map((deck, index) => {
                            return (
                                <TouchableOpacity style={[styles.deckItem, {'backgroundColor':white} ]}
                                onPress={() => this.props.navigation.navigate(
                                    'DeckDetail',
                                    {title: decks[deck].title}
                                )} key={index}>
                                        <Text style={styles.title}>{decks[deck].title}</Text>
                                        <Text style={styles.deckItemCard}>({decks[deck].questions.length}) cards</Text>
                                </TouchableOpacity>
                            )
                        })}
                    </View>
                </ScrollView>
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
        alignItems: 'center',
        borderWidth: 1,
        borderColor: gray,
        paddingBottom: 20
    },
    deckItemCard: {
        color: blue
    }
});

const mapStateToProps = (decks) => ({ decks })
export default connect(mapStateToProps)(DeckList)