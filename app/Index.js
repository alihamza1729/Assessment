import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import appStyle from "./styles";
import Color from "./common/Color";
import Header from "./components/Header";


function MainScreen({}) {


  return (
    <View style={StyleSheet.flatten([appStyle.container, { padding: 15, backgroundColor: Color.primary }])}>
      <Header />
    </View>
  );

}


export default MainScreen;
