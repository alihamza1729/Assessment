
import React from "react";
import {  StyleSheet, StatusBar } from "react-native";
import MainScreen from "./app/Index";
import Color from "./app/common/Color";
import SafeAreaCustom from "./app/components/SafeAreaCustom";
import { SafeAreaProvider } from "react-native-safe-area-context";


function App() {


  return (
    <SafeAreaProvider>
      <SafeAreaCustom>
        <StatusBar
          barStyle={"light-content"}
          backgroundColor={Color.primary}
        />
        <MainScreen />
      </SafeAreaCustom>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
