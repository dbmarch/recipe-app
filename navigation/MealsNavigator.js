import React from 'react'
import {Platform, Text} from 'react-native'
import {createStackNavigator } from 'react-navigation-stack'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {createDrawerNavigator} from 'react-navigation-drawer'
import {Ionicons} from '@expo/vector-icons'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'

import {createAppContainer} from 'react-navigation'
import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailsScreen from '../screens/MealDetailScreen'
import FavoritesScreen from '../screens/FavoritesScreen'
import FiltersScreen from '../screens/FiltersScreen'
import Colors from '../constants/Colors'
import MealDetailScreen from '../screens/MealDetailScreen'

const defaultStackNavigationOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white',
  },
  headerTitleStyle: {
    fontFamily: 'open-sans-bold',
  },
  headerBackTitleStyle: {
    fontFamily: 'open-sans'
  },
  headerTintColor:  Platform.OS === 'android' ? 'white' : Colors.primaryColor
  }


// you can set up navigation options right in the object describing the screen
const MealsNavigator = createStackNavigator ({
  Categories: CategoriesScreen,
  CategoryMeals: {
    screen: CategoryMealsScreen,
    },
  MealDetailsScreen: MealDetailsScreen
}, {
  initialRouteName: 'Categories',
  defaultNavigationOptions: defaultStackNavigationOptions
})

const FavoritesNavigator = createStackNavigator ({
  Favorites: FavoritesScreen,
  MealDetail: MealDetailScreen
}, {
  initialRouteName: 'Favorites',
  defaultNavigationOptions: defaultStackNavigationOptions
})



const tabScreenConfig = {
    Meals: {
      screen: MealsNavigator,
      navigationOptions: {
        tabBarLabel: Platform.OS === 'android' ? <Text style = {{fontFamily: 'open-sans-bold'}}>Meals</Text> : 'Meals',
        tabBarColor: Colors.primaryColor,
        tabBarIcon: (tabInfo)=>{
          return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor}/>
        },
      }
    },
    Favorites: {
      screen:FavoritesNavigator,
      navigationOptions: {
        tabBarLabel:  Platform.OS === 'android' ? <Text style = {{fontFamily: 'open-sans-bold'}}>Favorites</Text> : 'Favorites',
        tabBarColor: Colors.accentColor,
        tabBarIcon: (tabInfo)=>{
          return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor}/>
        },
      }
    }
  }

const MealsFavTabNavigator = Platform.OS === 'android' ? 
  createMaterialBottomTabNavigator(
  tabScreenConfig, {
  activeColor: 'white',
  shifting: true,
  barStyle: {
    backgroundColor: Colors.primaryColor,
  }
  }
 ) : createBottomTabNavigator(
  tabScreenConfig,
  {
  tabBarOptions: {
    activeTintColor: Colors.accentColor,
    labelStyle: {
      fontFamily: 'open-sans-bold'
    }
  }
})

const FiltersNavigator = createStackNavigator ({
  Filter: FiltersScreen,
}, {
  initialRouteName: 'Filter',
  defaultNavigationOptions: defaultStackNavigationOptions
})

const MainNavigator = createDrawerNavigator({
  MealFavs: {
    screen: MealsFavTabNavigator,
    navigationOptions: {
      drawerLabel: 'Meals'
    }
  },
  Filters:  {
   screen: FiltersNavigator,
   navigationOptions: {
     drawerLabel: 'Search'
   }
  }
},{
  contentOptions: {
    activeTintColor: Colors.accentColor,
    labelsStyle: {
      fontFamily: 'open-sans-bold',
    }
  }
})

export default createAppContainer(MainNavigator)                                             