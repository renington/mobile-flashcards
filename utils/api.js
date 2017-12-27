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
    // return AsyncStorage.getItem(CALENDAR_STORAGE_KEY)
    // .then((results) => {
    //   const data = JSON.parse(results)
    //   data[key] = undefined
    //   delete data[key]
    //   AsyncStorage.setItem(CALENDAR_STORAGE_KEY, JSON.stringify(data))
    // })
}

export function addCardToDeck() {

}