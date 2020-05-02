import React from "react";
import { TextInput, Modal, View, StyleSheet } from "react-native";
import ButtonInput from "./../components/Button";
import Header from "./../components/Header";
import Input from "./../components/Input";

const User = props => {
  return (
    <Modal visible={props.visible}>
      <View style={styles.container}>
        <Header onPress={props.back} label="User" />
        <Input
          placeholder="Type your github username"
          value={props.user.value}
          onChangeText={props.user}
        />
        <ButtonInput color="black" title="CHECK" onPress={props.check} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    marginStart: 30,
    marginEnd: 30
  }
});
export default User;
