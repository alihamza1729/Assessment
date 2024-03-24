import React from "react";
import Color from "../common/Color";
import { View, StyleSheet, Image } from "react-native";
import appStyle from "../styles";
import Images from "../common/Images";
import LinearGradient from "react-native-linear-gradient";



const Connector = ({ colors = Color.green }) => {
  return (


    <View style={styles.image}>

      <Image
        style={[styles.inner,{tintColor:colors[0]}]}
        resizeMode={'contain'}
        source={Images.connector}/>
    </View>

  );
};


const styles = StyleSheet.create({
  image: {
    backgroundColor:Color.primary,
    height:undefined,
    aspectRatio:1.95,
    width:24,
    zIndex:-2,
    transform:[{scaleX:2.1},{scaleY:1.7}]
  },
  inner: {
    backgroundColor:Color.primary,
    height:'100%',
    width:'100%',
  },
});
export default Connector;
