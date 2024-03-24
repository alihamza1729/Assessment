import React from "react";
import { StyleSheet,TouchableOpacity, View } from "react-native";
import TextElement from "./Text";
import Color from "../common/Color";




  function TagBtn({title, isSelected, onPress}) {
    return (
      <View style={[styles.tagBtnStyle,{
        backgroundColor: isSelected ?Color.purple : 'transparent',
        borderWidth:1,
        borderColor:isSelected?Color.purple:Color.greyDark
      }]}>
        <TouchableOpacity onPress={onPress} style={[ {}]}>

          <TextElement light h5 h5Style={{color: '#fff'}}>{title}</TextElement>

        </TouchableOpacity>
      </View>

    )
  }

const styles =  StyleSheet.create({
  tagBtnStyle:{
    paddingVertical: 10,
    borderRadius: 30,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5
  }
})
export default TagBtn
