import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native'
import DefaultText from './DefaultText'

const MealItem = ({item, onSelectMeals}) => {
  return (
    <View style = {styles.mealItem}>
      <TouchableOpacity onPress = {onSelectMeals}>
        <View >
          <View style={{...styles.mealRow, ...styles.mealHeader}}>
            <ImageBackground source = {{uri: item.imageUrl}} style={styles.bgImage}>
              <View style= {styles.titleContainer}>
                <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
              </View>
            </ImageBackground>
          </View>
          <View style = {{...styles.mealRow , ...styles.mealDetails}}>
            <DefaultText>{item.duration}m</DefaultText>
            <DefaultText>{item.complexity.toUpperCase()}</DefaultText>
            <DefaultText>{item.affordability.toUpperCase()}</DefaultText>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  bgImage: {
    width: '100%',
    heigth: '100%',
    justifyContent: 'flex-end',
    
  },
  mealHeader: {
    height: '85%'
  },
  mealDetails: {
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    height: '15%',
  },
  mealItem: {
    height: 200,
    width: '100%',
    backroundColor: '#f5f5f5',
    borderRadius: 10,
    overflow: 'hidden'
  },
  mealRow: {
    flexDirection: 'row',
  },
  titleContainer: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    padduingVertical: 5,
    paddingHorizontal: 12,
  },
  title : {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    color: 'white',
    textAlign: 'center'
  }
})

export default MealItem