import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Platform } from 'react-native'
import { connect } from 'react-redux'
import { red, green, white } from '../utils/colors'

class Quiz extends Component {
    state = {
        showAnswer: false,
        questionPoint: 0,
        score: 0
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
                        <Text>NO CARDS</Text>
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
                        <Text>CARDS: {total}</Text>
                        <Text>SCORE: {score}</Text>
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
                    <Text>({questionPoint+1}/{total}) cards</Text>
                    <Text style={styles.question}>{card.question}</Text>
                    
                    { !this.state.showAnswer ?
                        <TouchableOpacity 
                            style={ Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.androidSubmitBtn } 
                            onPress={this.showAnswer.bind(this)}>
                            <Text style = {styles.submitBtnText}>SHOW ANSWER</Text>
                        </TouchableOpacity>
                    :
                        <View>
                            <Text style={styles.question}>{card.answer}</Text>
    
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

const styles = StyleSheet.create({
    question: {
        fontSize: 18,
        paddingTop: 20,
        paddingBottom: 10,
        textAlign: 'center'
    },
    iosSubmitBtn: {
        backgroundColor: red,
        padding: 10,
        borderRadius: 7,
        height: 45,
        marginLeft: 40,
        marginRight: 40,
        marginTop: 10,
        marginBottom: 10,
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
        marginTop: 10,
        marginBottom: 10,
    },
    submitBtnText: {
        color: white,
        fontSize: 22,
        textAlign: 'center',
    },
});

const mapStateToProps = (decks, navigation) => {
    return {
        navigation: navigation.navigation,
        deck: Object.keys(decks).map((title) => (
                decks[title]))
                .filter((deck) => (deck.title === navigation.navigation.state.params.title))[0]
    }
}

export default connect(mapStateToProps)(Quiz)