import React from "react";
import { Image, TouchableOpacity,StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";

const BackgroundIcon = ({ onPress,colors, source,iconStyle,containerStyle }) => {
  return (
    <LinearGradient colors={colors} style={[styles.container,containerStyle]}>
      <Image
        source={source}
        resizeMode={"contain"}
        style={[styles.icons,iconStyle]}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  icons:{
    height: 50,
    width: 50
  }

});

export default BackgroundIcon;
