import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Platform } from 'react-native'
import { connect } from 'react-redux'

import { saveDeckTitle, addCardToDeck  } from '../utils/api'
import { red, white } from '../utils/colors'
import { addDeck } from '../actions'

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
            <View>
                <Text style={styles.title}>What is the title of your new deck?</Text>
                <TextInput
                    style={{height: 50,width:150, fontSize: 12, borderColor: 'gray', borderWidth: 1, padding: 10}}
                    value={this.state.deckTitle}
                    onChangeText={ (text) => this.setState({deckTitle: text, error: ''}) }
                    placeholder="Deck Name"
                    />
                    <Text style={styles.error}>{this.state.error}</Text>
                <TouchableOpacity style={ Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.androidSubmitBtn } onPress={this.onSubmit} >
                    <Text style = {styles.submitBtnText}>ADD DECK</Text>
                </TouchableOpacity>
            </View>
        )
    }
}



const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        paddingTop: 20,
        paddingBottom: 20
    },
    error: {
        fontSize: 10,
        color: red
    },
    iosSubmitBtn: {
        backgroundColor: red,
        padding: 10,
        borderRadius: 7,
        height: 45,
        marginLeft: 40,
        marginRight: 40,
    },
    AndroidSubmitBtn: {
        backgroundColor: red,
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        height: 45,
        borderRadius: 2,
        alignSelf: 'flex-end',
        justifyContent: 'center',
        alignItems: 'center',
    },
    submitBtnText: {
        color: white,
        fontSize: 22,
        textAlign: 'center',
    },
  });

export default connect()(NewDeck)