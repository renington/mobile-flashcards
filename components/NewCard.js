import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Platform } from 'react-native'
import { connect } from 'react-redux'

import { styles } from '../utils/styles'
import { addCardToDeck } from '../utils/api'
import { addCard } from '../actions'

class NewCard extends Component {
    constructor(props){
        super(props)

        this.state = {
            title: '',
            question: '',
            answer: '',
            error: ''
        }
        this.onSubmit = this.onSubmit.bind(this)
    }

    componentDidMount() {
        const { title } = this.props.navigation.state.params
        this.setState({ title: title })
    }

    onSubmit = () => {
        if(this.state.question !== '' && this.state.answer !== ''){
            const card = { question : this.state.question, answer: this.state.answer }
            
            this.props.dispatch( addCard({   
                title: this.state.title,
                card,
            }))

            addCardToDeck(this.state.title, card)

            this.props.navigation.navigate(
                'DeckDetail',
                { title: this.state.title }
            )

            this.clearState()
        }else{
            this.setState({ error: 'Type a question and a answer.' })
        }
    }

    clearState = () => {
        this.setState({question: '', answer: '', error: ''})
    }

    render() {
        const { title } = this.state

        return (
            <View style={{ flex: 1, alignItems: 'center'}}>
                <Text style={[{fontSize: 20}]}>New FlashCard in {title}</Text>
                
                <Text>Front</Text>
                <TextInput
                    style={{height: 50,width:150, fontSize: 12, borderColor: 'gray', borderWidth: 1, padding: 10}}
                    value={this.state.question}
                    onChangeText={ (question) => this.setState({question: question, error: ''}) }
                    placeholder="Question!?"
                />
    
                <Text>Back</Text>
                <TextInput
                    style={{height: 50,width:150, fontSize: 12, borderColor: 'gray', borderWidth: 1, padding: 10}}
                    value={this.state.answer}
                    onChangeText={ (answer) => this.setState({answer: answer, error: ''}) }
                    placeholder="Answer"
                />

                <Text style={styles.error}>{this.state.error}</Text>
                <TouchableOpacity style={ Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.androidSubmitBtn } onPress={this.onSubmit} >
                    <Text style = {styles.submitBtnText}>ADD CARD</Text>
                </TouchableOpacity>
            </View>
    
        )
    }
}

export default connect()(NewCard)