import {Platform} from 'react-native'
import {createStackNavigator } from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailsScreen from '../screens/MealDetailScreen'
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



export default createAppContainer(MealsNavigator)