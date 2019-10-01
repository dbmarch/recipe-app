import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'


const MealItem = ({item, onSelectMeals}) => {
  return (
    <View style = {styles.mealItem}>
      <TouchableOpacity onPress = {onSelectMeals}>
        <View >
          <View style={styles.mealRow}>
            <Text>{item.title}</Text>
          </View>
          <View style = {styles.mealRow}>
            {item.ingredients.map(ingredient => (
              <Text>{ingredient}</Text>
            ))}
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  mealItem: {
    height: 200,
    width: '100%',
    backroundColor: '#ccc'
  },
  mealRow: {
    flexDirection: 'row',
  }
})

export default MealItem