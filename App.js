/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import { SafeAreaView, StyleSheet,StatusBar } from "react-native";
import MainScreen from "./app/Index";


function App() {


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
     <MainScreen/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container:{
      flex:1
    }
})

export default App;
