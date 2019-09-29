import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'
import {CATEGORIES } from '../data/dummy-data'

const CategoryMealsScreen = props => {
  const catId = props.navigation.getParam('categoryId')
  const selectedCategory = CATEGORIES.find(cat => catId === cat.id)
  return <View style = {styles.screen}>
    <Text >
       The Category Meal Screen
    </Text>
    <Text>{selectedCategory.title}</Text>
    <Button title='Details' onPress={()=>{props.navigation.navigate('MealDetailsScreen')}}/>
  </View>
}

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam('categoryId')
  const selectedCategory = CATEGORIES.find(cat => catId === cat.id)

  return {
    headerTitle: selectedCategory.title,
  }
}

const styles = StyleSheet.create({
   screen: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
   }
})


export default CategoryMealsScreen