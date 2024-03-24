import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import appStyle from "../styles";
import CustomIconButton from "./CustomIconButton";
import Images from "../common/Images";
import LinearGradient from "react-native-linear-gradient";
import Color from "../common/Color";
import TextElement from "./Text";

export default function Header({title,description,onPressProfile}) {

  return (
    <View style={appStyle.rowAlign}>
      {/*back icon*/}
      <CustomIconButton source={Images.backIcon} onPress={() => {
      }} />

      {/*Title and Decscription*/}

      <View style={StyleSheet.flatten([
        appStyle.container,
        styles.textView
      ])}>

        <TextElement h4 medium h4Style={{}}>{title}</TextElement>
        <TextElement h7 medium h7Style={{color:Color.grey}}>{description}</TextElement>
      </View>


      <TouchableOpacity onPress={()=>onPressProfile()}>
      <>
      <LinearGradient

        colors={[Color.linearGradient.first, Color.linearGradient.second]}
        style={styles.profileContainer}>

        <View style={styles.innerView}>

        <Image
          style={appStyle.profile}
          source={Images.profile}
        />
        </View>

      </LinearGradient>
        <View style={styles.absoluteIcon}>
          <Image source={Images.profileDropdown} style={styles.dropdownIcon} />
        </View>
      </>
      </TouchableOpacity>
    </View>
  );

}

const styles = StyleSheet.create({

  profileContainer: {
    alignItems:'center',
    justifyContent:'center',
    width: 50,
    height: 50,
    borderRadius: 30,
    padding: 2,
    overflow: 'hidden',
    borderWidth: 0.5,
  },
  textView:{
    alignItems:'center'
  },
  innerView: {
    backgroundColor:Color.primary,
    alignItems:'center',
    justifyContent:'center',
    width: 46,
    height: 46,
    borderRadius: 46/2,
  },
  dropdownIcon: {
    height: 12,
    width: 12,
    resizeMode:'contain'
  },
  absoluteIcon: {
    position: "absolute",
    right: 0,
    bottom:5,
    zIndex:2,
  },

});
