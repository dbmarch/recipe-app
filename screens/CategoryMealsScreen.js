import React from 'react'
// import {View, StyleSheet, FlatList} from 'react-native'
import {CATEGORIES,MEALS } from '../data/dummy-data'
import MealList from '../components/MealList'

const CategoryMealsScreen = ({navigation}) => {
  const catId = navigation.getParam('categoryId')
  const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0)
  return <MealList data = {displayedMeals} navigation={navigation}/>
  }

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam('categoryId')
  const selectedCategory = CATEGORIES.find(cat => catId === cat.id)

  return {
    headerTitle: selectedCategory.title,
  }
}

// const styles = StyleSheet.create({})


export default CategoryMealsScreen