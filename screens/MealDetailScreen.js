import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import {MEALS} from '../data/dummy-data'
import HeaderButton from '../components/HeaderButton'


const MealDetailScreen = (props) => {
   const id = props.navigation.getParam('id')
   const selectedMeal = MEALS.find(meal=>meal.id === id)
   console.info (selectedMeal)
return <View  style= {styles.screen}>
   <Text>
      The Meal Detail Screen
   </Text>
   <Text>{selectedMeal.title}</Text>
   <Button title='Home' onPress={()=>{props.navigation.popToTop()}}/>
</View>
}

MealDetailScreen.navigationOptions = (navigationData) => {
   const id = navigationData.navigation.getParam('id')
   const selectedMeal = MEALS.find(meal=>meal.id === id)
   
   return {
      headerTitle: selectedMeal.title,
      headerRight: <HeaderButtons HeaderButtonComponent = {HeaderButton}>
         <Item title = 'Favorite' iconName='ios-star' onPress={()=>{
            console.info('Mark as Favorite')}}/>
         </HeaderButtons>
   }
}

const styles = StyleSheet.create({
   screen: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
   }
})


export default MealDetailScreen