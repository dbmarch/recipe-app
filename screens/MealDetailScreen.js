import React from 'react'
import {View, Text, Image, StyleSheet, Button, ScrollView} from 'react-native'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import {MEALS} from '../data/dummy-data'
import HeaderButton from '../components/HeaderButton'
import DefaultText from '../components/DefaultText'


const MealDetailScreen = (props) => {
   const id = props.navigation.getParam('id')
   const selectedMeal = MEALS.find(meal=>meal.id === id)
return(
   <ScrollView>
      <Image source={{uri: selectedMeal.imageUrl}} style={styles.image}/>
      <View style = {styles.details}>
            <DefaultText>{selectedMeal.duration}m</DefaultText>
            <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
            <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
      </View>
      
      <Text style = {styles.title}>Ingredients </Text>
      {
         selectedMeal.ingredients.map(ing => <Text>{ing}</Text>)
      }
      <Text style = {styles.title}>Steps </Text>
      {
         selectedMeal.steps.map(step => <Text>{step}</Text>)
      }
   </ScrollView>
) 
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
   details: {
      flexDirection: 'row',
      padding: 15,
      justifyContent: 'space-around'
   },
   image: {
      width: '100%',
      height: 200,
   },
   title: {
      fontFamily: 'open-sans-bold',
      marginTop: 20
   }
})


export default MealDetailScreen