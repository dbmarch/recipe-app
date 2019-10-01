import React from 'react'
import {View, StyleSheet, FlatList} from 'react-native'
import {CATEGORIES,MEALS } from '../data/dummy-data'
import MealItem from '../components/MealItem'

const CategoryMealsScreen = props => {
  const catId = props.navigation.getParam('categoryId')
  const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0)

  const renderMealItem = itemData => {
    console.log (itemData)
    return (
     <MealItem item={itemData.item} onSelectMeals = {()=>{console.log('MEAL ITEM')}}/>
    )
  }

  return(
    <View style = {styles.screen}>
    <FlatList  
      data={displayedMeals} 
      keyExtractor={item=>item.id} 
      renderItem = {renderMealItem}
      style = {{width: '100%'}}
      />
    </View>
  )
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