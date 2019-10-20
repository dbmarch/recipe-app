import React from 'react'
import MealList from '../components/MealList'
import {useSelector} from 'react-redux'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'


const FavoritesScreen = ({navigation}) => {
   const displayedMeals  = useSelector(state => state.meals.favoriteMeals)
   return <MealList data = {displayedMeals} navigation={navigation}/>
   }


FavoritesScreen.navigationOptions = (navigationData) => ({
   headerTitle: 'Your Favorites',
   headerLeft: <HeaderButtons HeaderButtonComponent = {HeaderButton} >
   <Item title="Menu" iconName = 'ios-menu' onPress = {()=>{navigationData.navigation.toggleDrawer()}} />
 </HeaderButtons>
 })
    
export default FavoritesScreen