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
    return AsyncStorage.getItem(MOBILE_FLASHCARD_STORAGE_KEY, (results) => {
        return JSON.parse(results)
    })
}

export function getDeck() {

}

export function addCardToDeck() {

}