import React from "react";
import { TextInput, Modal, View, StyleSheet } from "react-native";

const Input = props => {
  return (
    <TextInput
      {...props}
      placeholder={props.placeholder}
      value={props.value}
      style={styles.textInput}
    />
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderBottomColor: "black",
    borderBottomWidth: 3,
    width: "100%",
    padding: 10,
    marginBottom: 10,
    marginTop: 20
  }
});

export default Input;
