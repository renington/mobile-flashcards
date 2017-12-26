import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TabNavigator } from 'react-navigation'
import { FontAwesome, Ionicons } from '@expo/vector-icons'

import DeckList from './components/DeckList'
import NewDeck from './components/NewDeck'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Tabs />
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
        tabBarIcon: ({ tintColor, focused }) => (
            <Ionicons
              name={focused ? 'ios-albums' : 'ios-albums-outline'}
              size={26}
              style={{ color: tintColor }}
            />),
    }
  },
  NewDeck: {
      screen: NewDeck,
      navigationOptions: {
          headerTitle: 'NewDeck',
          tabBarLabel: 'NewDeck',
          tabBarIcon: ({ tintColor, focused }) => (
              <Ionicons
                name={focused ? 'ios-create' : 'ios-create-outline'}
                size={26}
                style={{ color: tintColor }}
              />),
      }
  },
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
