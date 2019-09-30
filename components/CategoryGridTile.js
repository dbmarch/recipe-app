import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

const CategoryGridTile = ({title, color, onSelect}) => {
  return (
    <TouchableOpacity 
      style={styles.gridItem}
      onPress = {onSelect}>
      <View style = {{backgroundColor: color}} >
        <Text>{title}</Text>
      </View>
  </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  gridItem: {
     flex: 1,
     margin: 15,
     height: 150,
  }
})


export default CategoryGridTile