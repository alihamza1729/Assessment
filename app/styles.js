import { StyleSheet } from "react-native";
import { scale } from "../ScalingUtils";
import Color from "./common/Color";


const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
    },
    profile: {
      backgroundColor:Color.primary,
      height: 36,
      width: 36,
      resizeMode: "contain",
      borderRadius: 18,
    },
    space_between: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",

    },
    rowAlign: {
      flexDirection: "row",
      alignItems: "center",
    },
    row: {
      flexDirection: "row",
    },
    columnAlign: {
      flexDirection: "column",
    },
    spliter: {
      height: 0.7,
      backgroundColor: "#3A3940",
    },
    shadow: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      elevation: 4,
      backgroundColor: "#fff",
      margin: 3,
      borderRadius: 8,
    },
  },
);

export default styles;
