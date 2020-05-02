import React from "react";
import { StyleSheet, Text } from "react-native";

const Label = props => {
  return <Text style={{ ...styles.text, ...props.style }}>{props.label}</Text>;
};
const styles = StyleSheet.create({
  text: {
    fontFamily: "OpenSans_SemiBold"
  }
});

export default Label;
