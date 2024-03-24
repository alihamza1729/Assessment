import React, { useState } from "react";
import { View, StyleSheet, Image, Dimensions } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import Color from "../common/Color";
const HEIGHT = Dimensions.get('window').height



const DropdownComponent = ({value,data,setValue}) => {
  const [isFocus, setIsFocus] = useState(false);


  return (
    <View style={[styles.container, (value||isFocus) && { borderColor: Color.purple }]}>
      <Dropdown
        style={[styles.dropdown,]}
        containerStyle={styles.innerContainer}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        itemTextStyle={{color:Color.white}}
        activeColor={'transparent'}
        iconStyle={styles.iconStyle}
        search
        data={data}
        maxHeight={HEIGHT/4}
        labelField="label"
        valueField="value"
        placeholder={'Select'}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.value);
        }}

      />
    </View>
  );
};

export default DropdownComponent
const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.secondaryColor,
    padding: 10,
    marginTop:15,
    borderRadius:8,
    borderWidth:1
  },
  dropdown: {
    paddingHorizontal: 8,
  },
  innerContainer:{
    backgroundColor:Color.secondaryColor,
    borderWidth:0,
    borderRadius:10,
    top:-52,
    transform:[{scaleX:1.07}]
  },
  icon: {
    marginRight: 5,
    width:14,
    height:14
  },

  placeholderStyle: {
    fontSize: 16,
    color:Color.grey
  },
  selectedTextStyle: {
    fontSize: 16,
    color:Color.white
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    paddingHorizontal:10,
    height: 52,
    width:'100%',
    color:Color.white,
    fontSize: 16,
    alignSelf:'center',
    borderRadius:5,
    borderColor:Color.purple
  },
});
