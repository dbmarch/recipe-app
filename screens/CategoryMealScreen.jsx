import React from 'react'
import {View, Text, StyleSheet} from 'react-native'


const CategoryMealScreen = props => {
return <View>
   <Text style= {styles.screen}>
      The Category Meal Screen
   </Text>
</View>
}

const styles = StyleSheet.Create({
   screen: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
   }
})


export default CategoryMealScreen