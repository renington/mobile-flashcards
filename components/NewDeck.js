import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Platform } from 'react-native'
import { connect } from 'react-redux'

import { saveDeckTitle, addCardToDeck  } from '../utils/api'
import { red, white } from '../utils/colors'
import { addDeck } from '../actions'
import { styles } from '../utils/styles'

class NewDeck extends Component {
    constructor(props){
        super(props)
        this.state = {
            deckTitle: '',
            error: ''
        }
        this.onSubmit = this.onSubmit.bind(this)
    }

    onSubmit() {
        if(this.state.deckTitle !== ''){
            //UPDATE REDUX WITH CURRENT STATE
            this.props.dispatch( addDeck({
                [this.state.deckTitle]:{
                    title: this.state.deckTitle,
                    questions:[],
                }
            }))

            //UPDATE DB(LOCALSTORAGE)
            saveDeckTitle(this.state.deckTitle)

            this.props.navigation.navigate(
                'DeckDetail',
                {title: this.state.deckTitle}
            )
        }else{
            this.setState({ error: 'Input empty. Type a text.' })
        }
    }

    render() {
        return (
            <View >
                <View style={styles.flashcard} >
                    <Text style={styles.title}>What is the title of your new deck?</Text>
                    <TextInput
                        style={{height: 60,width:300, fontSize: 12, borderColor: 'gray', borderWidth: 1, padding: 10}}
                        value={this.state.deckTitle}
                        onChangeText={ (text) => this.setState({deckTitle: text, error: ''}) }
                        placeholder="Deck Name"
                        />
                    <Text style={styles.error}>{this.state.error}</Text>
                </View>
                <TouchableOpacity style={ Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.androidSubmitBtn } onPress={this.onSubmit} >
                    <Text style = {styles.submitBtnText}>ADD DECK</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default connect()(NewDeck)