import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Platform } from 'react-native'

import { getDeck } from '../utils/api'
import { red, white } from '../utils/colors'

class DeckDetail extends Component {
    constructor(props){
        super(props)

        this.state = {
            deck: null
        }
    }
    
    componentDidMount() {
        const { title } = this.props.navigation.state.params

        getDeck(title).then((deck) => {
            this.setState({ deck: deck })
        })
    }
    
    render(){
        const { deck } = this.state

        if(deck !== null){
            return (
                <View>
                    <Text style={styles.title}>{deck.title}</Text>
                    <Text style={[styles.title, {fontSize: 14, paddingTop: 0, paddingBottom: 10}]}>({deck.questions.length}) cards</Text>
        
                    <TouchableOpacity 
                        style={ Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.androidSubmitBtn } 
                         onPress={() => this.props.navigation.navigate(
                            'NewCard',
                            {title: deck.title}
                        )}>
                        <Text style = {styles.submitBtnText}>ADD CARD</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={ Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.androidSubmitBtn } >
                        <Text style = {styles.submitBtnText}>START QUIZ</Text>
                    </TouchableOpacity>
                </View>
            )
        }else{
            return <Text>Loading ...</Text>
        }
    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
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

export default DeckDetail