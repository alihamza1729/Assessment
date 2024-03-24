import React, { useCallback } from "react";
import { Image, StyleSheet, View } from "react-native";
import Slider from "rn-range-slider";
import Color from "../common/Color";
import LinearGradient from "react-native-linear-gradient";
import Images from "../common/Images";
import TextElement from "./Text";
import appStyle from '../styles'

const RangeSlider = ({setLow,setHigh}) => {
  const renderThumb = useCallback(() =>
    <Image source={Images.thumb} style={styles.thumb}/>, []);
  const renderRail = useCallback(() => <View style={styles.rail}/>, []);
  const renderLabel = useCallback((value) =>
    <View style={styles.label}>
      <TextElement medium h6 h6Style={{color:Color.white}}>
        {value}
      </TextElement>
    </View>, []);

  const renderRailSelected = useCallback(() =>
    <LinearGradient
      style={{ height: 5}}
      colors={[Color.linearGradient.first,Color.linearGradient.second]}>
  </LinearGradient>
    , []);
  const handleValueChange = useCallback((low, high) => {
    setLow(low);
    setHigh(high);
  }, []);

  return (
   <View style={appStyle.rowAlign}>
     <TextElement h6 medium h6Style={{marginTop:20,color:Color.grey}}>
       {'100'}
     </TextElement>
     <Slider
       style={styles.slider}
       min={100}
       max={1000}
       step={100}
       renderThumb={renderThumb}
       renderRail={renderRail}
       disableRange
       renderLabel={renderLabel}
       renderRailSelected={renderRailSelected}
       onValueChanged={handleValueChange}
     />
     <TextElement medium h6 h6Style={{marginTop:20,color:Color.grey}}>
       {'1000'}
     </TextElement>
   </View>
  );
};

export default RangeSlider
const styles = StyleSheet.create({
  slider:{
    flex:1,
    marginHorizontal:5,
  },
  label:{
    paddingHorizontal:5,
    paddingVertical:3,
    borderRadius:8,
    backgroundColor:Color.purple
  },
  rail:{
    flex: 1,
    backgroundColor: Color.secondaryColor,
    height: 5
  },
  thumb:{
    resizeMode:'contain',
    width:20,
    height:20
  }
});
