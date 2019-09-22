import React from 'react'
import {View, Text, StyleSheet} from 'react-native'


const FiltersScreen = props => {
return <View>
   <Text style= {styles.screen}>
      The Filters Screen
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


export default FiltersScreen