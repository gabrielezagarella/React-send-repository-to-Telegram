import React from "react";
import {
  TextInput,
  Modal,
  Button,
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity
} from "react-native";

const Repo = props => {
  return (
    <Modal visible={props.visible}>
      <View style={styles.container}>
      <View style={styles.repoContainer}>
          <TouchableOpacity onPress={props.back}>
            <Image
              source={require("./../assets/back.png")}
            ></Image>
          </TouchableOpacity>
          <Text style={{ marginStart: 30, fontFamily: "OpenSans_SemiBold" }}>
            REPO
          </Text>
        </View>
        <TextInput
          placeholder="Type your repository name"
          value={props.repo.value}
          onChangeText={props.repo}
          style={styles.textInput}
        />
        <View style={styles.check}>
          <Button color="black" title="DONE" onPress={props.check} />
        </View>
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
  },
  repoContainer: {
    flexDirection: "row"
  },
  check: {
    position: "absolute",
    bottom: 40,
    right: 0
  },
  textInput: {
    borderBottomColor: "black",
    borderBottomWidth: 3,
    width: "100%",
    padding: 10,
    marginBottom: 10,
    marginTop: 20
  }
});

export default Repo;
