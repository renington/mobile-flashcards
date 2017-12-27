import { GET_DECKS, ADD_CARD, ADD_DECK } from '../utils/consts'

export function fetchDecks(decks) {
    return { type: GET_DECKS, decks }
}

export function addDeck(deck) {
    return { type: ADD_DECK, deck }
}

export function addCard({title, card}) {
    return { 
        type: ADD_CARD, 
        title,
        card
    }
}