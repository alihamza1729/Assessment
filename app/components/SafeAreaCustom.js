import React, {useContext} from 'react'
import {View, StyleSheet} from 'react-native'
import Color from "../common/Color";
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';

const SafeAreaCustom = ({children, style,}) => {

const safeArea=useSafeAreaInsets();
    return (
        <>
            <View style={{backgroundColor: Color.primary,paddingTop:safeArea.top,flex:1}}>
            <View style={StyleSheet.flatten([{flex: 1,backgroundColor:  Color.primary,paddingBottom:safeArea.bottoms}, style])}>
                {children}
            </View>
            </View>
        </>

    )
}

export default SafeAreaCustom
