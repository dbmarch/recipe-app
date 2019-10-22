import React, {useEffect, useCallback }from 'react'
import {useDispatch} from 'react-redux'
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import {useSelector} from 'react-redux'
import HeaderButton from '../components/HeaderButton'
import DefaultText from '../components/DefaultText'
import {toggleFavorite} from '../store/actions/meals'

const ListItem = props => {
   return <View style = {styles.listItem}>
      <DefaultText>{props.children}</DefaultText>
   </View>
}

const MealDetailScreen = (props) => {
   const mealId = props.navigation.getParam('id')
   const availableMeals  = useSelector(state => state.meals.meals)
   const isFavorite = useSelector(state => state.meals.favoriteMeals.some(meal=>meal.id === mealId))
   const selectedMeal = availableMeals.find(meal=>meal.id === mealId)

   const dispatch = useDispatch()
   
   const toggleFavoriteHandler = useCallback(() => {
      dispatch(toggleFavorite(mealId))
   },[dispatch])

   useEffect(()=>{
      props.navigation.setParams({toggleFavorite: toggleFavoriteHandler})
   }, [toggleFavoriteHandler])

   useEffect(()=>{
      props.navigation.setParams({isFavorite: isFavorite})
   }, [isFavorite])

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
   const isFavorite = navigationData.navigation.getParam('isFavorite')
   const title = navigationData.navigation.getParam('mealTitle')
   const toggleFavoriteHandler = navigationData.navigation.getParam('toggleFavorite')
   console.info ('isFavorite: ', isFavorite)
   return {
      headerTitle: title,
      headerRight: <HeaderButtons HeaderButtonComponent = {HeaderButton}>
         <Item title = 'Favorite' iconName={isFavorite ? 'ios-star' : 'ios-star-outline'} onPress={()=>{
            toggleFavoriteHandler()}}/>
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
      padding: 5
   }
})


export default MealDetailScreen