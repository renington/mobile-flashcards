import { GET_DECKS, ADD_CARD, ADD_DECK } from '../utils/consts'

/*
{
------  STATE MODEL ------ 
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  }
*/

function deck( state = {} , action ) {
        switch(action.type) {
            case GET_DECKS:
                return {
                    ...state,
                    ...action.decks,
                }
            case ADD_DECK:
                return {
                    ...state,
                    ...action.deck,
                }
            case ADD_CARD:
                return {
                    ...state,
                    [action.title]: {
                      ...state[action.title],
                      questions: state[action.title].questions.concat(action.card)
                    }
                }
        default: 
            return state
    }
}

export default deck
