import { AsyncStorage } from 'react-native'

export const MOBILE_FLASHCARD_STORAGE_KEY = 'mobile-flashcads:flashCard'

export function saveDeckTitle(deckTitle) {
    return AsyncStorage.mergeItem(MOBILE_FLASHCARD_STORAGE_KEY, JSON.stringify({
        [deckTitle]: {
            title: deckTitle,
            questions: []
        }
    }))
}

export function getDecks() {
    return AsyncStorage.getItem(MOBILE_FLASHCARD_STORAGE_KEY)
        .then((results) => {
            return JSON.parse(results)
        })
}

export function getDeck(title) {
    return AsyncStorage.getItem(MOBILE_FLASHCARD_STORAGE_KEY)
        .then((results) => {
            const decks = JSON.parse(results)
            return (decks[title])
        })
}

export function addCardToDeck() {

}