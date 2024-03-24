import React from "react";
import { Image, TouchableOpacity,StyleSheet } from "react-native";

const CustomIconButton = ({ onPress, source,iconStyle,containerStyle }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container,containerStyle]}>
      <Image
        source={source}
        resizeMode={"contain"}
        style={[styles.icons,iconStyle]}
      />
    </TouchableOpacity>
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

export default CustomIconButton;
