import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
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
        <MaskedViewIOS maskElement={<TextElement h5 medium />}>
          <LinearGradient colors={[Color.linearGradient.first, Color.linearGradient.second]} start={{ x: 0, y: 0 }}
                          end={{ x: 1, y: 0 }}>
            <TextElement h5 medium h5Style={[{ opacity: 0 }, textStyle]}>{title}</TextElement>
          </LinearGradient>
        </MaskedViewIOS>

      </View>
      <Image
        style={styles.icon}
        source={Images.nextArrow}
      />
    </TouchableOpacity>);
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginVertical: 20,
    borderRadius: 20,
  },
  rowView: {
    flex: 1,
  },
  icon:{
    width:scale(14),
    height:scale(14),
  }
});
export default ButtonComponent;
