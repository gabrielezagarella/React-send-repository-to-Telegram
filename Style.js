import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginStart: 30,
    marginEnd: 30
  },
  titleContainer: {
    position: "absolute",
    top: 120
  },
  title: {
    fontSize: 20
  },
  textState: {
    color: "grey"
  },
  check: {
    position: "absolute",
    bottom: 40,
    right: 0
  }
});

export default styles;
