import React from 'react'
import {StyleSheet} from 'react-native'
import { MEALS } from '../data/dummy-data'
import MealList from '../components/MealList'

const FavoritesScreen = ({navigation}) => {
   console.info (navigation)
   // const catId = navigation.getParam('categoryId')
   const displayedMeals = MEALS.filter(meal => true ) // meal.categoryIds.indexOf(catId) >= 0)
   return <MealList data = {displayedMeals} navigation={navigation}/>
   }

const styles = StyleSheet.create({
   screen: {
      flex: 1,
      padding: 10,
      alignItems: 'center',
      justifyContent: 'center',

   }
})

export default FavoritesScreen