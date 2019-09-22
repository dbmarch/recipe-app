import React from 'react'
import {View, Text, StyleSheet} from 'react-native'


const CategoriesScreen = props => {
return (
<View style = {styles.screen}>
   <Text >The Categories Screen</Text>
</View>)
}

const styles = StyleSheet.create({
   screen: {
      marginVertical: 30,
      alignItems: 'center'
   }
})


export default CategoriesScreen