import { StyleSheet } from 'react-native'
import { red, white, gray } from './colors'

export const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        paddingTop: 20,
        paddingBottom: 20
    },
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
    flashcard: {
        backgroundColor: white,
        color: gray,
        textAlign: 'center',
        padding: 10,
        borderRadius: 7,
        marginBottom: 10,
        marginTop: 10,
    },
    score: {
        backgroundColor: white,
        padding: 10,
        borderRadius: 7,
        marginBottom: 10,
        marginTop: 10,
    },
    textScore: {
        color: gray,
        textAlign: 'center',
        fontSize: 20
    },
    counter: {
        backgroundColor: red,
        color: white,
        textAlign: 'center',
        fontSize: 14,
        width: 100,
        borderRadius: 10,
        height: 18,
        alignItems: 'center',
    },
    containerCounter: {
        alignSelf: 'flex-end',
    },
    error: {
        fontSize: 10,
        color: red
    },
})