import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Platform, TouchableNativeFeedback} from 'react-native'

const CategoryGridTile = ({title, color, onSelect}) => {
  let TouchableCmp = TouchableOpacity

  if (Platform.OS === 'android'  && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback
  }
  return (
    <View style={styles.gridItem}>
         <TouchableCmp style = {{flex: 1}}
          onPress = {onSelect}>
          <View 
            style={{...styles.container, ...{ backgroundColor: color} }} >
            <Text style = {styles.title} numberOfLines={2}>{title}</Text>
          </View>
        </TouchableCmp>
  </View>
  )
}

const styles = StyleSheet.create({
  gridItem: {
     flex: 1,
     margin: 15,
     height: 150,
     borderRadius: 10,
     overflow: Platform.OS === 'android' && Platform.version >= 21 ? 'hidden' : 'visible',
     elevation: 15,
  },
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.36,
    shadowOffset: {width: 1, height: 5},
    shadowRadius: 10,
    elevation: 3,
    padding: 15,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    textAlign: 'right'
  }
})


export default CategoryGridTile