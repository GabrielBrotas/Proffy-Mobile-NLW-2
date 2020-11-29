import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {AppLoading} from 'expo' // componente de carregamento do expo
import { Archivo_400Regular, Archivo_700Bold, useFonts} from '@expo-google-fonts/archivo'
import {Poppins_400Regular, Poppins_600SemiBold} from '@expo-google-fonts/poppins'

import {Provider} from 'react-redux'
import store from './src/redux/store'

import AppStack from './src/routes/AppStack';

export default function App() {

  // fontsLoaded vai começar como false, assim que todas as fontes forem carregadas ela vai se tornar true
  let [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold
  })

  if(!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <Provider store={store}>  
        <AppStack />
        <StatusBar style="light" />
      </Provider>
    );
  }

  
}
