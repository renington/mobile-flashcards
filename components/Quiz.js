import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Platform } from 'react-native'
import { connect } from 'react-redux'

import { red, green, white } from '../utils/colors'
import { styles } from '../utils/styles'
import { clearLocalNotification, setLocalNotification } from '../utils/notification'

class Quiz extends Component {
    state = {
        showAnswer: false,
        questionPoint: 0,
        score: 0
    }

    componentDidMount() {
        clearLocalNotification().then(setLocalNotification())
    }

    showAnswer(){
        this.setState({showAnswer: true})
    }

    render() {
        const { questionPoint, score } = this.state
        const { questions, title } = this.props.deck
        const { navigation } = this.props

        const card = questions[questionPoint]
        const total = questions.length

        if((questionPoint+1) > total){
            return ( 
                <View>
                    {total === 0 ?
                    <View>
                        <View style={styles.flashcard} >
                            <Text style={styles.textScore}>NO CARDS</Text>
                        </View>
                        <TouchableOpacity 
                            style={ Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.androidSubmitBtn } 
                                onPress={() => navigation.navigate(
                                'NewCard',
                                {title: title}
                            )}>
                            <Text style = {styles.submitBtnText}>ADD CARD</Text>
                        </TouchableOpacity>
                    </View>
                    :
                    <View>
                        <View style={styles.score} >
                            <Text style={styles.textScore}>CARDS: {total}</Text>
                            <Text style={styles.textScore}>SCORE: {score}</Text>
                        </View>
                        
                        <TouchableOpacity 
                            style={ [Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.androidSubmitBtn, {backgroundColor: green}] } 
                            onPress={() => this.setState({ showAnswer: false, questionPoint: 0, score: 0 })}>
                            <Text style = {styles.submitBtnText}>RESET</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={ [Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.androidSubmitBtn, {backgroundColor: green}] } 
                            onPress={() => navigation.navigate(
                                'DeckDetail',
                                {title: title}
                            )}>
                            <Text style = {styles.submitBtnText}>BACK DECK</Text>
                        </TouchableOpacity>
                    </View>
                    }
                </View>
            )
        }else{
            return (
                <View>
                    <View style={styles.containerCounter} >
                        <Text style={styles.counter}>{questionPoint+1} of {total} cards</Text>
                    </View>

                    <View style={styles.flashcard} >
                        <Text style={styles.question}>{card.question}</Text>
                    </View>

                    { !this.state.showAnswer ?
                        <TouchableOpacity 
                            style={ Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.androidSubmitBtn } 
                            onPress={this.showAnswer.bind(this)}>
                            <Text style = {styles.submitBtnText}>SHOW ANSWER</Text>
                        </TouchableOpacity>
                    :
                        <View>
                            <View style={styles.flashcard} >
                                <Text style={styles.question}>{card.answer}</Text>
                            </View>
    
                            <TouchableOpacity 
                                style={ [Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.androidSubmitBtn, {backgroundColor: green}] } 
                                onPress={() => this.setState({ showAnswer: false, questionPoint: this.state.questionPoint + 1, score: this.state.score + 1 })}>
                                <Text style = {styles.submitBtnText}>CORRECT</Text>
                            </TouchableOpacity>
    
                            <TouchableOpacity 
                                style={ Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.androidSubmitBtn } 
                                onPress={() => this.setState({ showAnswer: false, questionPoint: this.state.questionPoint + 1 })}>
                                <Text style = {styles.submitBtnText}>INCORRECT</Text>
                            </TouchableOpacity>
                        </View>
                    }
                </View>
            )
        }
    }
}

const mapStateToProps = (decks, navigation) => {
    return {
        navigation: navigation.navigation,
        deck: Object.keys(decks).map((title) => (
                decks[title]))
                .filter((deck) => (deck.title === navigation.navigation.state.params.title))[0]
    }
}

export default connect(mapStateToProps)(Quiz)