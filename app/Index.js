import React, { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import appStyle from "./styles";
import Color from "./common/Color";
import Header from "./components/Header";
import Images from "./common/Images";
import CustomIconButton from "./components/CustomIconButton";
import Connector from "./components/Connector";
import TextElement from "./components/Text";
import { topics } from "../data.json";
import TagBtn from "./components/TagBtn";
import BackgroundIcon from "./components/BackgroundIcon";

const STEP_ICONS = [
  {
    id: 1,
    icon: Images.user,
  }, {
    id: 2,
    icon: Images.target,
  }, {
    id: 3,
    icon: Images.file,
  }, {
    id: 4,
    icon: Images.description,
  }, {
    id: 5,
    icon: Images.help,
  },
];

function MainScreen({}) {

  const [selectedTopic, setSelectedTop] = useState(topics[0]);

  return (
    <ScrollView contentContainerStyle={StyleSheet.flatten([appStyle.container, {
      padding: 15,
      flexGrow: 1,
      backgroundColor: Color.primary,
    }])}>
      {/*header*/}
      <Header title={"Media management"} description={"Draft campaign"} />


      {/*body*/}
      <View style={appStyle.container}>
        {/* Step indicator */}
        <View style={StyleSheet.flatten([appStyle.row, { marginVertical: 20 }])}>
          <ScrollView
            contentContainerStyle={{ marginStart: 5 }}
            showsHorizontalScrollIndicator={false}
            horizontal>

            {STEP_ICONS.map((item, index) => {
              return (
                <View style={[appStyle.rowAlign]}>
                  <BackgroundIcon
                    colors={index == 2 ? [Color.linearGradient.first, Color.linearGradient.second] : (index <= 1 ? [Color.green, Color.green] : [Color.secondaryColor, Color.secondaryColor])}
                    iconStyle={styles.icon}
                    containerStyle={[styles.iconContainer, {
                      backgroundColor: index == 2 ? Color.purple : (index <= 1 ? Color.green : Color.secondaryColor),
                    }]}
                    source={item.icon}
                  />

                  <Connector
                    colors={index == 2 ? [Color.linearGradient.first, Color.linearGradient.second] : (index <= 1 ? [Color.green, Color.green] : [Color.secondaryColor, Color.secondaryColor])}
                  />
                </View>

              );
            })}

          </ScrollView>
        </View>

        {/*body*/}
        <View style={[appStyle.container, { padding: 15 }]}>

          <View style={{ marginBottom: 20 }}>
            <TextElement h4 medium h4Style={{}}>
              Content type
            </TextElement>
            <TextElement h5 medium h5Style={{ color: Color.grey }}>
              Choose a content type that best fits your needs.
            </TextElement>
          </View>
          <View style={appStyle.spliter} />
          <View style={{ marginVertical: 20 }}>
            <TextElement h4 medium h4Style={{}}>
              What type of content are you creating?
            </TextElement>

            {/*Topics*/}
            <View style={StyleSheet.flatten([appStyle.row, { flexWrap: "wrap", marginVertical: 20 }])}>


                {topics.map((item)=>
                  <TagBtn
                    title={item.name}
                    onPress={()=>{setSelectedTop(item)}}
                    isSelected={item?.id===selectedTopic?.id}
                  />)}
            </View>
          </View>
          <View style={{marginBottom:20}}>

            <TextElement h5 medium>
              Which type of “Fun“content are you creating?
            </TextElement>
          </View>


        </View>


      </View>

    </ScrollView>
  );

}

const styles = StyleSheet.create({

  iconContainer: {
    backgroundColor: Color.green,
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",

  },
  icon: {
    width: 20,
    height: 20,
  },
  connector: {

    width: 32,
    height: 5,
  },

});
export default MainScreen;
