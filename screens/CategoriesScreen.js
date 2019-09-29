import React from 'react'
import {View, Text, FlatList, StyleSheet} from 'react-native'
import {CATEGORIES} from '../data/dummy-data'


const CategoriesScreen = props => {
   
   const renderGridItem = (itemData) => {
      return <View><Text>{itemData.item.title}</Text></View>
   }

   return (
   <View style = {styles.screen}>
      <FlatList 
         keyExtractor={(item, index)=>item.id}
         numColumns={2} 
         data={CATEGORIES}
         renderItem = {renderGridItem}
         />
   </View>)
}

const styles = StyleSheet.create({
   screen: {
      marginVertical: 30,
      justifyContent: 'center',
      alignItems: 'center'
   }
})


export default CategoriesScreen