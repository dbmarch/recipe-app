import React, {useState, useEffect, useCallback}  from 'react'
import {View, Text, StyleSheet, Switch, Platform} from 'react-native'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'
import Colors from '../constants/Colors'

const FilterSwitch = ({filter, value, onValueChange}) => {
   return (
      <View style={styles.filterContainer}>
         <Text>{filter}</Text>
         <Switch 
         trackColor={{true: Colors.primaryColor}}
         thumbColor={Platform.OS === 'android' ? Colors.primaryColor : ''}
         value={value} 
         onValueChange={onValueChange} />
   </View> 
   )
}

const FiltersScreen = ({navigation}) => {
   const [isGlutenFree, setIsGlutenFree] = useState(false)
   const [isVegetarian, setIsVegetarian] = useState(false)
   const [isVegan, setIsVegan] = useState(false)
   const [isLactoseFree, setIsLactoseFree] = useState(false)

   const saveFilters = useCallback(() => {
      const appliedFilters = {
         glutenFree: isGlutenFree,
         vegetarian: isVegetarian,
         vegan: isVegan,
         lactoseFree: isLactoseFree,
      }
      console.info (appliedFilters)
   }, [isGlutenFree, isVegetarian, isVegan, isLactoseFree])

   useEffect(()=> {
      navigation.setParams({save: saveFilters})    
   }, [saveFilters])

return <View  style= {styles.screen}>
   <Text style={styles.title}>Available Filters/Restrictions</Text>
    <FilterSwitch filter='Gluten-free' value={isGlutenFree} onValueChange={setIsGlutenFree}/>
    <FilterSwitch filter='Vegetarian' value={isVegetarian} onValueChange={setIsVegetarian}/>
    <FilterSwitch filter='Vegan' value={isVegan} onValueChange={setIsVegan}/>
    <FilterSwitch filter='Lactose Free' value={isLactoseFree} onValueChange={setIsLactoseFree}/>
</View>
}

 FiltersScreen.navigationOptions = (navigationData) => ({
   headerTitle: 'Find Meals',
   headerLeft: (
      <HeaderButtons HeaderButtonComponent = {HeaderButton} >
         <Item 
            title="Menu" 
            iconName = 'ios-menu' 
            onPress = {()=>{navigationData.navigation.toggleDrawer()}} 
         />
      </HeaderButtons>),
   headerRight: (
      <HeaderButtons HeaderButtonComponent = {HeaderButton}>
         <Item 
            title="Save"
            iconName = 'ios-save' 
            onPress = {navigationData.navigation.getParam('save')} 
         />
      </HeaderButtons>),
   } )


const styles = StyleSheet.create({
   screen: {
      flex: 1,
      alignItems: 'center'
   },
   title: {
      fontFamily: 'open-sans-bold',
      fontSize: 22,
      margin: 20,
      textAlign: 'center'
   }, 
   filterContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '80%',
      marginVertical: 15,
   }
})


export default FiltersScreen