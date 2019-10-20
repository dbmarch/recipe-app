import React from 'react'
import {View, FlatList, StyleSheet} from 'react-native'
import MealItem from '../components/MealItem'


const MealList = ({data, navigation}) =>{
  const renderMealItem = itemData => {
    return (
     <MealItem 
      item={itemData.item} 
      onSelectMeals = {()=>{
        navigation.navigate({
          routeName: 'MealDetailsScreen',
          params: {
            id: itemData.item.id,
            mealTitle: itemData.item.title
          }
          })
        }}
      />
    )
  }
  return (
  <View style = {styles.list}>
    <FlatList  
      data={data} 
      keyExtractor={item=>item.id} 
      renderItem = {renderMealItem}
      style = {{width: '100%'}}
      />
    </View>
  )
}

const styles = new StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
 }
})

export default MealList