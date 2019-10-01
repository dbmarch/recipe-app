import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'


const MealItem = ({item, onSelectMeals}) => {
  return (
    <View style = {styles.mealItem}>
      <TouchableOpacity onPress = {onSelectMeals}>
        <View >
          <View style={{...styles.mealRow, ...styles.mealHeader}}>
            <Text>{item.title}</Text>
          </View>
          <View style = {{...styles.mealRow , ...styles.mealDetails}}>
            <Text>{item.duration}m</Text>
            <Text>{item.complexity.toUpperCase()}</Text>
            <Text>{item.affordability.toUpperCase()}</Text>
            {/* {item.ingredients.map(ingredient => (
              <Text>{ingredient}</Text>
            ))} */}
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  mealHeader: {
    height: '90%'
  },
  mealDetails: {
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
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