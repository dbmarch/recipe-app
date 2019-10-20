import React, {useState} from 'react';
import { StyleSheet } from 'react-native';
import * as Font from 'expo-font'
import {AppLoading} from 'expo'
import {useScreens} from 'react-native-screens'
import {createStore, combineReducers} from 'redux'
import {Provider} from 'react-redux'
import MealsNavigator from './navigation/MealsNavigator'
import mealsReducer from './store/reducers/meals'

useScreens()

const rootReducer = combineReducers({
  meals: mealsReducer
  })

const store  = createStore(rootReducer)


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
    <Provider store = {store}>
      <MealsNavigator />
    </Provider>)
  }

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  }
})
