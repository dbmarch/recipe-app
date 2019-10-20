import React, {useEffect}from 'react'
import {View, Text, Image, StyleSheet, Button, ScrollView} from 'react-native'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import {useSelector} from 'react-redux'
import HeaderButton from '../components/HeaderButton'
import DefaultText from '../components/DefaultText'

const ListItem = props => {
   return <View style = {styles.listItem}>
      <DefaultText>{props.children}</DefaultText>
   </View>
}

const MealDetailScreen = (props) => {
   const id = props.navigation.getParam('id')
   const availableMeals  = useSelector(state => state.meals.meals)
   const selectedMeal = availableMeals.find(meal=>meal.id === id)
   
   // useEffect(()=>{
   //    props.navigation.setParams({mealTitle: selectedMeal.title})
   // }, [selectedMeal])
   
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
         selectedMeal.ingredients.map(ing => <ListItem key={ing}>{ing}</ListItem>)
      }
      <Text style = {styles.title}>Steps </Text>
      {
         selectedMeal.steps.map((step,index) => <ListItem key={step}>{index+1}) {step}</ListItem>)
      }
   </ScrollView>
) 
}

MealDetailScreen.navigationOptions = (navigationData) => {
   const id = navigationData.navigation.getParam('id')
   const title = navigationData.navigation.getParam('mealTitle')
   
   return {
      headerTitle: title,
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
      marginVertical: 10
   },
   listItem: {
      marginVertical: 5,
      marginHorizontal: 20,
      // borderColor: '#ccc',
      // borderWidth: 1,
      padding: 5
   }
})


export default MealDetailScreen