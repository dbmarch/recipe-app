import React from 'react'
import {Platform} from 'react-native'
import {createStackNavigator } from 'react-navigation-stack'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {Ionicons} from '@expo/vector-icons'
import {createAppContainer} from 'react-navigation'
import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailsScreen from '../screens/MealDetailScreen'
import FavoritesScreen from '../screens/FavoritesScreen'
import Colors from '../constants/Colors'

// you can set up navigation options right in the object describing the screen
const MealsNavigator = createStackNavigator ({
  Categories: CategoriesScreen,
  CategoryMeals: {
    screen: CategoryMealsScreen,
    },
  MealDetailsScreen: MealDetailsScreen
}, {
  initialRouteName: 'Categories',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white',
    },
    headerTintColor:  Platform.OS === 'android' ? 'white' : Colors.primaryColor
    }
  }
)

const MealsFavTabNavigator = createBottomTabNavigator({
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarLabel: 'Meals',
      tabBarIcon: (tabInfo)=>{
        return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor}/>
      }
    }
  },
  Favorites: {
    screen:FavoritesScreen,
    navigationOptions: {
      tabBarLabel: 'Favorites',
      tabBarIcon: (tabInfo)=>{
        return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor}/>
      }
    }
  }
}, {
  tabBarOptions: {
    activeTintColor: Colors.accentColor,
  }
})

export default createAppContainer(MealsFavTabNavigator)                                             