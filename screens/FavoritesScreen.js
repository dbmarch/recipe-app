import React from 'react'
import { MEALS } from '../data/dummy-data'
import MealList from '../components/MealList'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'


const FavoritesScreen = ({navigation}) => {
   console.info (navigation)
   // const catId = navigation.getParam('categoryId')
   const displayedMeals = MEALS.filter(meal => true ) // meal.categoryIds.indexOf(catId) >= 0)
   return <MealList data = {displayedMeals} navigation={navigation}/>
   }


FavoritesScreen.navigationOptions = (navigationData) => ({
   headerTitle: 'Your Favorites',
   headerLeft: <HeaderButtons HeaderButtonComponent = {HeaderButton} >
   <Item title="Menu" iconName = 'ios-menu' onPress = {()=>{navigationData.navigation.toggleDrawer()}} />
 </HeaderButtons>
 })
    
export default FavoritesScreen