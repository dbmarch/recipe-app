import React, {useState} from 'react';
import { StyleSheet, Text,View } from 'react-native';
import * as Font from 'expo-font'
import {AppLoading} from 'expo'
import CategoriesScreen from './screens/CategoriesScreen'
import FavoritesScreen from './screens/FavoritesScreen'

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans' : require ('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require ('./assets/fonts/OpenSans-Bold.ttf')
  })
}
export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false)

  if (!dataLoaded) {
    return (
      <AppLoading 
        startAsync = {fetchFonts} 
        onFinish = {()=>setDataLoaded(true)}
        onError = {(err)=>console.log (err)}/>
    )
  }

  return (
    <View style = {styles.screen}>
      <CategoriesScreen />
      <Text> HELLO FROM REACT NATIVE</Text>
      <Text> HELLO FROM REACT NATIVE</Text>
      <Text> HELLO FROM REACT NATIVE</Text>
      <FavoritesScreen />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flexDirection: 'column',
    justifyContent: "space-between",
    flex: 1
  }
})