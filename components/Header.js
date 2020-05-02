import React from "react";
import {
  TextInput,
  Modal,
  View,
  StyleSheet,
  Image,
  TouchableOpacity
} from "react-native";
import Label from "./Label";

const Header = props => {
  return (
    <View style={styles.container}>
      <TouchableOpacity {...props}>
        <Image source={require("./../assets/back.png")}></Image>
      </TouchableOpacity>
      <Label style={styles.text} label={props.label} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  },
  text: {
    marginStart: 30
  }
});
export default Header;
