import React from 'react'
import {View, Text, StyleSheet} from 'react-native'


const CategoriesScreen = props => {
return <View>
   <Text style= {styles.screen}>
      The Categories  Screen
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


export default CategoriesScreen