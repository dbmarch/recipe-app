import React from 'react'
import {View, Text, Button, StyleSheet} from 'react-native'



const CategoriesScreen = props => {
   console.log (props)
return (
<View style = {styles.screen}>
   <Text >The Categories Screen</Text>
   <Text> Hi </Text>
   <Button title = 'Go To Meals' onPress={()=>{
          props.navigation.navigate({routeName: 'CategoryMeals'})
          //props.navigation.push('Categories')   // push lets you visit the current screen as well ( to show different content)
      }} />
   <Button title = 'replace' onPress={()=>{props.navigation.replace('MealDetailsScreen')}} />
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