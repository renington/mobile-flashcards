import React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { Constants } from 'expo'

import { red } from './utils/colors'
import DeckList from './components/DeckList'
import NewDeck from './components/NewDeck'
import DeckDetail from './components/DeckDetail'
import NewCard from './components/NewCard'
import Quiz from './components/Quiz'

function FlashCardsStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <FlashCardsStatusBar backgroundColor={red} barStyle="light-content" />
        <MainNav />
      </View>
    );
  }
}

const Tabs = TabNavigator({
  Deck: {
    screen: DeckList,
    navigationOptions: {
      headerTitle: 'Deck',
      tabBarLabel: 'Decks',
      tabBarIcon: ({ focused }) => (
        <Ionicons
          name={focused ? 'ios-albums' : 'ios-albums-outline'}
          size={26}
          style={{ color: red }}
        />),
    }
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      headerTitle: 'NewDeck',
      tabBarLabel: 'NewDeck',
      tabBarIcon: ({ focused }) => (
        <Ionicons
          name={focused ? 'ios-create' : 'ios-create-outline'}
          size={26}
          style={{ color: red }}
        />),
    }
  },
})

const MainNav =  StackNavigator({
  Tabs: {
      screen: Tabs
  },
  DeckDetail: {
      screen: DeckDetail
  },
  AddCard: {
      screen: NewCard,
      navigationOptions: {
          title: 'Add Card',
      }
  },
  QuizView: {
      screen: Quiz,
      navigationOptions: {
          title: 'Quiz',
      }
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
