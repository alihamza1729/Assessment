import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import TextElement from "./Text";
import Color from "../common/Color";
import LinearGradient from "react-native-linear-gradient";
import appStyle from "../styles";
import Images from "../common/Images";
import { scale } from "../../ScalingUtils";

const ButtonComponent = ({ onPress, textStyle, style, title = "Next" }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[appStyle.rowAlign, styles.container, style]}>
      <View style={styles.rowView}>
        <TextElement h5 medium h5Style={[{ color: Color.purple }, textStyle]}>{title}</TextElement>
      </View>
      <Image
        style={styles.icon}
        source={Images.nextArrow}
      />
    </TouchableOpacity>);
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    marginVertical: 20,
    borderRadius: 24,
    backgroundColor: Color.white,
  },
  rowView: {
    flex: 1,
  },
  icon: {
    width: scale(14),
    height: scale(14),
  },
});
export default ButtonComponent;
