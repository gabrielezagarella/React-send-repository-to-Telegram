import React from "react";
import { View, Button, StyleSheet } from "react-native";

const ButtonInput = props => {
  return (
    <View style={styles.check}>
      <Button {...props} color={props.color} title={props.title} />
    </View>
  );
};

const styles = StyleSheet.create({
  check: {
    position: "absolute",
    bottom: 40,
    right: 0
  }
});

export default ButtonInput;
